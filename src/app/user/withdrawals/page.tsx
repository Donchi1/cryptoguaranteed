"use client"

import AdminNavbar from '@/components/user/UserNavbar' 
import Sidebar from '@/components/user/Sidebar'
import { db } from '@/db/firebaseDb'
import { RootState } from '@/redux/store'
import Toast from '@/utils/Alert'
import { Dialog, DialogTitle, IconButton } from '@mui/material'
import axios from 'axios'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useFormik } from 'formik'
import React, {  useEffect, useState } from 'react'
import {  useSelector } from 'react-redux'
import * as Yup from "yup"
import Layout from '@/components/Layout'
import UserHero from '@/components/user/UserHero'
import FooterUser from '@/components/user/FooterUser'
import * as Icons from 'react-icons/bs'


type withdrawDataType ={
  amount: number | null,
  wallet: string,
  withdrawalMethod: string,
  name: string,
  phone: string,
}
type withdrawDataTypeBank ={
  amount: number | null,
  bankName: string,
  routenNumber: string,
  accountName: string,
  withdrawalMethod: string,
  name: string,
  accountNumber: string,
  country: string,
  
}



function Withdrawals() {



  const withdrawalInfo = useSelector((state:RootState) => state.app)

  const {currentUser} = useSelector((state:RootState) => state.auth)

  const [openPay, setOpenPay] = useState({
    btc: false,
    etheruim: false,
    litecoin: false,
    bank: false,
  })

  const [newAmount, setNewAmount] = useState(1)


  const formik = useFormik({
    initialValues:{
    amount: null ,
    wallet: '',
    withdrawalMethod: '',
    name: '',
    phone: ''
  } as withdrawDataType,
  validationSchema: Yup.object({
    wallet: Yup.string().required(),
    withdrawalMethod: Yup.string().required(),
    phone: Yup.string().required(),
    amount: Yup.number().min(5).required(),
    name: Yup.mixed().required()
  }),
  onSubmit: (values) => handleWithdrawal(values)
})

  const formikBank = useFormik({
    initialValues:{
    amount: null,
    withdrawalMethod: '',
    bankName: "",
    country: "",
    accountNumber: '',
    accountName: "",
    routenNumber: ""
  } as withdrawDataTypeBank,
  validationSchema: Yup.object({
    accountName: Yup.string().required(),
    bankName: Yup.string().required(),
    withdrawalMethod: Yup.string().required(),
    accountNumber: Yup.string().required(),
    routenNumber: Yup.string().required(),
    country: Yup.string().required(),
    amount: Yup.number().min(5).required(),
  }),
  onSubmit: (values) => handleWithdrawalBank(values)
})


  useEffect(() => {
    axios
      .get(
        `https://blockchain.info/tobtc?currency=USD&value=${formik.values.amount}`,
      )
      .then((res) => {
        setNewAmount(res.data)
      })
      .catch((err) => {})
  }, [formik.values.amount])

  const handleWithdrawal = async(values: withdrawDataType ):Promise<void> => {
  

    formik.setSubmitting(true)
    try{
     await addDoc(collection(db, `withdrawals/${currentUser?.uid}/withdrawalDatas`), {
      withdrawalAmount: values.amount,
      wallet: values.wallet ,
      method: values.withdrawalMethod,
      email: currentUser?.email || "None",
      date: serverTimestamp(),
      currentUserfirstname: currentUser?.firstname,
      currentUserlastname: currentUser?.lastname,
      withdrawerName: values.name,
      number: values.phone,
      charge: "0.5",
      country:  currentUser?.country,
      AccountNumber: "None",
      uid: currentUser?.uid,
      idx: Math.random().toString(),
      status: "pending"
     })
     formik.setSubmitting(false)
     formik.resetForm()
     Toast.success.fire({
      text:"Please wait for less then 24 hour for withdrawal verification."
     })
    }catch(err: any){
      formik.setSubmitting(false)
      formik.resetForm()
      Toast.error.fire({
       text:err
      })
    }
  }
  const handleWithdrawalBank = async(values: withdrawDataTypeBank) => {

   
    formikBank.setSubmitting(true)
    try{
     await addDoc(collection(db, `withdrawals/${currentUser?.uid}/withdrawalDatas`), {
      withdrawalAmount: values.amount,
      wallet: "None",
      method: values.withdrawalMethod,
      email: currentUser?.email || "None",
      date: serverTimestamp(),
      currentUserfirstname: currentUser?.firstname,
      currentUserlastname: currentUser?.lastname,
      withdrawerName: currentUser?.firstname,
      number: currentUser?.phone,
      charge: "0.5",
      country: values.country || currentUser?.country,
      AccountNumber: values.accountNumber,
      uid: currentUser?.uid,
      idx: Math.random().toString(),
      status: "pending"
     })
     formikBank.setSubmitting(false)
     formikBank.resetForm()
     Toast.success.fire({
      text:"Please wait for less then 24 hour for withdrawal verification."
     })
    }catch(err: any){
      formikBank.setSubmitting(false)
      formikBank.resetForm()
      Toast.error.fire({
       text:err
      })
    }
  }

  const checkCoins = (key: string) => {
    switch (key) {
      case "btc":
      return setOpenPay((prev) => ({ ...prev, btc: false }))
      
      case "ethe":
      return setOpenPay((prev) => ({ ...prev, etheruim: false }))
      case "lite":
      return setOpenPay((prev) => ({ ...prev, litecoin: false }))
      case "bank":
      return setOpenPay((prev) => ({ ...prev, bank: false }))  
      default:
      
        break;
    }
  }

  const  handleClose = ( reason: "backdropClick" | "escapeKeyDown", key: string) => {
    if(reason === "backdropClick") return   
   checkCoins(key)
   formik.resetForm()
   key === "bank" && formikBank.resetForm()
 }
 
  return (
    <>
 <AdminNavbar/> 
    <div className='flex  '>
    <Sidebar />
      <Layout >
    <div className='lg:mx-7 mx-5 mb-6'>
      <UserHero title='Withdrawals' />
        <div className=" ">
    <div className="min-h-screen footer-bg  homepage-3  flex justify-center">
      <div className="w-full items-center c-bg !bg-[#011628]/30 shadow sm:rounded-lg flex justify-center ">
        <div className="lg:px-0 px-4">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-3xl xl:text-4xl font-black uppercase text-center text-white">
              Withdrawal Methods
            </h1>
            <h4 className="text-lg mt-4 uppercase text-center text-white">
              Make your instant withdrawal today with ease <br />
              Choose your withdrawal method
            </h4>

            <section className="w-full ">
              <div className="mx-auto mt-4 max-w-xl  relative ">
                <button
                 className="text-white w-full rounded-lg py-3 px-2 bg-gradient-to-r from-[#21d397] to-[#7450fe] hover:gradient-to-l "
                  onClick={() => {
                    setOpenPay({
                      ...openPay,
                      btc: !openPay.btc,
                      bank: false,
                      etheruim: false,
                      litecoin: false,
                    })
                    formik.setFieldValue("withdrawalMethod", 'Bitcoin')
                  }}
                >
                  Bitcoin
                </button>
              </div>

              <Dialog
               
               PaperProps={
                
                {className: "!bg-[#030239]"}
              }
              
             
              fullWidth
                open={openPay.btc}
                onClose={(event, reason) => handleClose( reason, 'btc')}
              >
                <DialogTitle className="text-right">
                  <IconButton onClick={() => handleClose( "escapeKeyDown", "btc")} TouchRippleProps={{
                    className: "hover:border-red-500 border"
                  }}>
                    <Icons.BsX className='text-red-500'/>
                  </IconButton>

                </DialogTitle>
                <div className="field_form authorize_form p-4 ">
                  <div className="text-center">
                    <h6 className="text-bold capitalize mb-1">
                      You are about to withdraw ${formik.values.amount} Bitcoin : {newAmount && newAmount}
                    </h6>
                    
                    <p className="text-muted ">
                      with {formik.values.withdrawalMethod} withdrawal
                      method.
                    </p>
                   
                  </div>
                  <h5 className="text-center main-color font-bold text-xl mb-2">
                    Please Input your withdrawal information
                  </h5>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="form-group col-md-12 animation">
                      <input
                        type="text"
                        className="w-full px-8 py-3 rounded-lg font-medium bg-transparent border border-[#304ffe] text-white text-sm focus:outline-none focus:bg-opacity-10  mt-2 "
                        placeholder="Name"
                        {...formik.getFieldProps("name")}
                       
                      />
                       {formik.touched.name && formik.errors.name ? (
                      <div className="text-red-500 mb-2">
                        {formik.errors.name}
                      </div>
                    ) : null}
                    </div>
                    <div className="form-group col-md-12 animation">
                      <input
                        type="number"
                        className="w-full px-8 py-3 rounded-lg font-medium bg-transparent border border-[#304ffe] text-white text-sm focus:outline-none focus:bg-opacity-10  mt-3"
                        required
                        placeholder="Amount"
                        {...formik.getFieldProps("amount")}
                      />
                       {formik.touched.amount && formik.errors.amount ? (
                      <div className="text-red-500 mb-2">
                        {formik.errors.amount}
                      </div>
                    ) : null}
                    </div>
                    <div className="form-group col-md-12 animation">
                      <input
                        type="text"
                        className="w-full px-8 py-3 rounded-lg font-medium bg-transparent border border-[#304ffe] text-white text-sm focus:outline-none focus:bg-opacity-10  mt-3"
                        required
                        placeholder="Wallet"
                        {...formik.getFieldProps("wallet")}
                        
                      />
                       {formik.touched.wallet && formik.errors.wallet ? (
                      <div className="text-red-500 mb-2">
                        {formik.errors.wallet}
                      </div>
                    ) : null}
                    </div>
                    <div className="form-group col-md-12 animation">
                      <input
                        type="tel"
                        className="w-full px-8 py-3 rounded-lg font-medium bg-transparent border border-[#304ffe] text-white text-sm focus:outline-none focus:bg-opacity-10  mt-3"
                        required
                        placeholder="Phone Number"
                       {...formik.getFieldProps("phone")}
                      />
                       {formik.touched.phone && formik.errors.phone ? (
                      <div className="text-red-500 mb-2">
                        {formik.errors.phone}
                      </div>
                    ) : null}
                    </div>
                    <div className="form-group col-md-12 text-center mt-4 animation">
                      <button
                         disabled={formik.isSubmitting}
                        className="text-white w-full rounded-lg py-3 px-2 bg-gradient-to-r from-[#21d397] to-[#7450fe] hover:gradient-to-l"
                         type="submit"
                       >
                         {formik.isSubmitting ? "Submitting...":"Submit"}
                      </button>
                    </div>
                    <div className="divider small_divider"></div>
                  </form>
                </div>
              </Dialog>

              <div className="mx-auto max-w-xl mt-4 relative">
                <button
                 className="text-white w-full rounded-lg py-3 px-2 bg-gradient-to-r from-[#21d397] to-[#7450fe] hover:gradient-to-l"
                  onClick={() => {
                    setOpenPay({
                      ...openPay,
                      etheruim: !openPay.etheruim,
                      bank: false,
                      litecoin: false,
                      btc: false,
                    })
                    formik.setFieldValue(
                      "withdrawalMethod",
                      'Etheruim'
                    )
                  }}
                >
                  Etherium
                </button>
              </div>
              <Dialog
               
               PaperProps={
                {className: "!bg-[#030239]"}
              }
              
           
              fullWidth
                open={openPay.etheruim}
                onClose={(event, reason) => handleClose(reason, "ethe")}
                >
                  <DialogTitle className="text-right">
                    <IconButton onClick={() => handleClose("escapeKeyDown", "ethe") } TouchRippleProps={{
                      className: "hover:border-red-500 border"
                    }}>
                      <Icons.BsX className='text-red-500'/>
                    </IconButton>
  
                  </DialogTitle>
                  <div className="field_form authorize_form p-4">
                  <div className="text-center">
                    <h6 className="text-bold capitalize mb-1">
                      You want to withdraw ${formik.values.amount} Bitcoin : {newAmount && newAmount}
                    </h6>
                
                    <p className="text-muted ">
                      with {formik.values.withdrawalMethod} withdrawal
                      method.
                    </p>
                   
                  </div>
                  <h5 className="text-center main-color font-bold text-xl tex-xl">
                    Input your withdrawal information
                  </h5>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="form-group col-md-12 animation">
                      <input
                        type="text"
                        className="w-full px-8 py-3 rounded-lg font-medium bg-transparent border border-[#304ffe] text-white text-sm focus:outline-none focus:bg-opacity-10  mt-3"
                        placeholder="Name"
                        {...formik.getFieldProps("name")}
                       
                      />
                       {formik.touched.name && formik.errors.name ? (
                      <div className="text-red-500 mb-2">
                        {formik.errors.name}
                      </div>
                    ) : null}
                    </div>
                    <div className="form-group col-md-12 animation">
                      <input
                        type="number"
                        className="w-full px-8 py-3 rounded-lg font-medium bg-transparent border border-[#304ffe] text-white text-sm focus:outline-none focus:bg-opacity-10  mt-3"
                        required
                        placeholder="Amount"
                        {...formik.getFieldProps("amount")}
                      />
                       {formik.touched.amount && formik.errors.amount ? (
                      <div className="text-red-500 mb-2">
                        {formik.errors.amount}
                      </div>
                    ) : null}
                    </div>
                    <div className="form-group col-md-12 animation">
                      <input
                        type="text"
                        className="w-full px-8 py-3 rounded-lg font-medium bg-transparent border border-[#304ffe] text-white text-sm focus:outline-none focus:bg-opacity-10  mt-3"
                        required
                        placeholder="Wallet"
                        {...formik.getFieldProps("wallet")}
                        
                      />
                       {formik.touched.wallet && formik.errors.wallet ? (
                      <div className="text-red-500 mb-2">
                        {formik.errors.wallet}
                      </div>
                    ) : null}
                    </div>
                    <div className="form-group col-md-12 animation">
                      <input
                        type="tel"
                        className="w-full px-8 py-3 rounded-lg font-medium bg-transparent border border-[#304ffe] text-white text-sm focus:outline-none focus:bg-opacity-10   mt-3"
                        required
                        placeholder="Number"
                       {...formik.getFieldProps("number")}
                      />
                       {formik.touched.phone && formik.errors.phone ? (
                      <div className="text-red-500 mb-2">
                        {formik.errors.phone}
                      </div>
                    ) : null}
                    </div>
                    <div className="form-group col-md-12 text-center mt-4 animation">
                      <button
                       disabled={formik.isSubmitting}
                      className="text-white w-full rounded-lg py-3 px-2 bg-gradient-to-r from-[#21d397] to-[#7450fe] hover:gradient-to-l"
                       type="submit"
                     >
                       {formik.isSubmitting ? "Submitting...":"Submit"}
                      </button>
                    </div>
                    <div className="divider small_divider"></div>
                  </form>
                </div>
              </Dialog>

              <div className="mx-auto max-w-xl mt-4 relative">
                <button
                 className="text-white w-full rounded-lg py-3 px-2 bg-gradient-to-r from-[#21d397] to-[#7450fe] hover:gradient-to-l"
                  onClick={() => {
                    setOpenPay({
                      ...openPay,
                      litecoin: !openPay.litecoin,
                      bank: false,
                      etheruim: false,
                      btc: false,
                    })
                    formik.setFieldValue(
                      "withdrawalMethod",
                      'Litecoin'
                    )
                  }}
                >
                  Litecoin
                </button>
              </div>
              <Dialog
               
               PaperProps={
                {className: "!bg-[#030239]"}
              }
              
             
              fullWidth
                open={openPay.litecoin}
                onClose={(event,reason) => handleClose(reason, "lite")}
                >
                  <DialogTitle className="text-right">
                    <IconButton onClick={() => handleClose("escapeKeyDown", "lite") } TouchRippleProps={{
                      className: "hover:border-red-500 border"
                    }}>
                      <Icons.BsX className='text-red-500'/>
                    </IconButton>
  
                  </DialogTitle>
                 <div className="field_form authorize_form p-4">
                  <div className="text-center">
                    <h6 className="text-bold capitalize mb-1">
                      You want to withdraw ${formik.values.amount} Bitcoin : {newAmount && newAmount}
                    </h6>
                   
                    <p className="text-muted ">
                      with {formik.values.withdrawalMethod} withdrawal
                      method.
                    </p>
                   
                  </div>
                  <h5 className="text-center main-color font-bold text-xl tex-xl">
                    Input your withdrawal information
                  </h5>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="form-group col-md-12 animation">
                      <input
                        type="text"
                        className="w-full px-8 py-3 rounded-lg font-medium bg-transparent border border-[#304ffe] text-white text-sm focus:outline-none focus:bg-opacity-10   mt-3"
                        placeholder="Name"
                        {...formik.getFieldProps("name")}
                       
                      />
                       {formik.touched.name && formik.errors.name ? (
                      <div className="text-red-500 mb-2">
                        {formik.errors.name}
                      </div>
                    ) : null}
                    </div>
                    <div className="form-group col-md-12 animation">
                      <input
                        type="number"
                        className="w-full px-8 py-3 rounded-lg font-medium bg-transparent border border-[#304ffe] text-white text-sm focus:outline-none focus:bg-opacity-10  mt-3"
                        required
                        placeholder="Amount"
                        {...formik.getFieldProps("amount")}
                      />
                       {formik.touched.amount && formik.errors.amount ? (
                      <div className="text-red-500 mb-2">
                        {formik.errors.amount}
                      </div>
                    ) : null}
                    </div>
                    <div className="form-group col-md-12 animation">
                      <input
                        type="text"
                        className="w-full px-8 py-3 rounded-lg font-medium bg-transparent border border-[#304ffe] text-white text-sm focus:outline-none focus:bg-opacity-10  mt-3"
                        required
                        placeholder="Wallet"
                        {...formik.getFieldProps("wallet")}
                        
                      />
                       {formik.touched.wallet && formik.errors.wallet ? (
                      <div className="text-red-500 mb-2">
                        {formik.errors.wallet}
                      </div>
                    ) : null}
                    </div>
                    <div className="form-group col-md-12 animation">
                      <input
                        type="tel"
                        className="w-full px-8 py-3 rounded-lg font-medium bg-transparent border border-[#304ffe] text-white text-sm focus:outline-none focus:bg-opacity-10  mt-3"
                        required
                        placeholder="Phone"
                       {...formik.getFieldProps("phone")}
                      />
                       {formik.touched.phone && formik.errors.phone ? (
                      <div className="text-red-500 mb-2">
                        {formik.errors.phone}
                      </div>
                    ) : null}
                    </div>
                    <div className="form-group col-md-12 text-center mt-4 animation">
                      <button
                        disabled={formik.isSubmitting}
                       className="text-white w-full rounded-lg py-3 px-2 bg-gradient-to-r from-[#21d397] to-[#7450fe] hover:gradient-to-l"
                        type="submit"
                      >
                        {formik.isSubmitting ? "Submitting...":"Submit"}
                      </button>
                    </div>
                    <div className="divider small_divider"></div>
                  </form>
                </div>
              </Dialog>

              <div className="mx-auto mt-4 max-w-xl  relative ">
                <button
                 className="text-white w-full rounded-lg py-3 px-2 bg-gradient-to-r from-[#21d397] to-[#7450fe] hover:gradient-to-l"
                  onClick={() => {
                    setOpenPay({
                      ...openPay,
                      bank: !openPay.bank,
                      litecoin: false,
                      etheruim: false,
                      btc: false,
                    })
                    formikBank.setFieldValue(
                      "withdrawalMethod",
                      'Bank'
                    )
                  }}
                >
                  Bank
                </button>
              </div>
              <Dialog
               
               PaperProps={
                {className: "!bg-[#030239]"}
              }
              
             
              fullWidth
                open={openPay.bank}
                onClose={(event,reason) => handleClose(reason, "bank")}
                >
                  <DialogTitle className="text-right">
                    <IconButton onClick={() => handleClose("escapeKeyDown", "bank") } TouchRippleProps={{
                      className: "hover:border-red-500 border"
                    }}>
                      <Icons.BsX className='text-red-500'/>
                    </IconButton>
  
                  </DialogTitle>
                  <div className="field_form authorize_form p-4">
                  <div className="text-center">
                    <h6 className="text-bold capitalize mb-1">
                      You want to withdraw ${formikBank.values.amount} Bitcoin : {newAmount && newAmount}
                    </h6>
                    
                    <p className="text-muted ">
                      with {formikBank.values.withdrawalMethod} withdrawal
                      method.
                    </p>
                   
                  </div>
                  <h5 className="text-center main-color font-bold text-xl tex-xl">
                    Input your withdrawal information
                  </h5>
                  <form onSubmit={formikBank.handleSubmit}>
                    
                    <div className="form-group col-md-12 animation">
                      <input
                        type="number"
                        className="w-full px-8 py-3 rounded-lg font-medium bg-transparent border border-[#304ffe] text-white text-sm focus:outline-none focus:bg-opacity-10  mt-3"
                        required
                        placeholder="Amount"
                        {...formikBank.getFieldProps("amount")}
                      />
                       {formikBank.touched.amount && formikBank.errors.amount ? (
                      <div className="text-red-500 mb-2">
                        {formikBank.errors.amount}
                      </div>
                    ) : null}
                    </div>
                    <div className="form-group col-md-12 animation">
                      <input
                        type="text"
                        className="w-full px-8 py-3 rounded-lg font-medium bg-transparent border border-[#304ffe] text-white text-sm focus:outline-none focus:bg-opacity-10  mt-3"
                        required
                        placeholder="Account Number"
                        {...formikBank.getFieldProps("accountNumber")}
                        
                      />
                       {formikBank.touched.accountNumber && formikBank.errors.accountNumber ? (
                      <div className="text-red-500 mb-2">
                        {formikBank.errors.accountNumber}
                      </div>
                    ) : null}
                    </div>
                    <div className="form-group col-md-12 animation">
                      <input
                        type="text"
                        className="w-full px-8 py-3 rounded-lg font-medium bg-transparent border border-[#304ffe] text-white text-sm focus:outline-none focus:bg-opacity-10  mt-3"
                        required
                        placeholder="Bank name"
                        
                       {...formikBank.getFieldProps("bankName")}
                      />
                       {formikBank.touched.bankName && formikBank.errors.bankName ? (
                      <div className="text-red-500 mb-2">
                        {formikBank.errors.bankName}
                      </div>
                    ) : null}
                    </div>
                    <div className="form-group col-md-12 animation">
                      <input
                        type="text"
                        className="w-full px-8 py-3 rounded-lg font-medium bg-transparent border border-[#304ffe] text-white text-sm focus:outline-none focus:bg-opacity-10  mt-3"
                        required
                        placeholder="Routen Number or Equiv"
                        title='Routen number or equivalent'
                       {...formikBank.getFieldProps("routenNumber")}
                      />
                       {formikBank.touched.routenNumber && formikBank.errors.routenNumber ? (
                      <div className="text-red-500 mb-2">
                        {formikBank.errors.routenNumber}
                      </div>
                    ) : null}
                    </div>
                    <div className="form-group col-md-12 animation">
                      <input
                        type="text"
                        className="w-full px-8 py-3 rounded-lg font-medium bg-transparent border border-[#304ffe] text-white text-sm focus:outline-none focus:bg-opacity-10  mt-3"
                        required
                        placeholder="Account Name"
                        
                       {...formikBank.getFieldProps("accountName")}
                      />
                       {formikBank.touched.accountName && formikBank.errors.accountName ? (
                      <div className="text-red-500 mb-2">
                        {formikBank.errors.accountName}
                      </div>
                    ) : null}
                    </div>
                    <div className="form-group col-md-12 animation">
                      <input
                        type="tel"
                        className="w-full px-8 py-3 rounded-lg font-medium bg-transparent border border-[#304ffe] text-white text-sm focus:outline-none focus:bg-opacity-10  mt-3"
                        required
                        placeholder="Country of bank"
                        title='Enter the country where This bank is located'
                       {...formikBank.getFieldProps("country")}
                      />
                       {formikBank.touched.country && formikBank.errors.country ? (
                      <div className="text-red-500 mb-2">
                        {formikBank.errors.country}
                      </div>
                    ) : null}
                    </div>
                    <div className="form-group col-md-12 mt-4 text-center animation">
                      <button
                        disabled={formikBank.isSubmitting}
                       className="text-white w-full rounded-lg py-3 px-2 bg-gradient-to-r from-[#21d397] to-[#7450fe] hover:gradient-to-l"
                        type="submit"
                      >
                        {formikBank.isSubmitting ? "Submitting...":"Submit"}
                      </button>
                    </div>
                    <div className="divider small_divider"></div>
                  </form>
                </div>
              </Dialog>

              <div className="divider small_divider"></div>
            </section>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden">
          <div className="lg:m-12 xl:m-16 w-full  ">
            <div>
              <h4 className="mt-8 text-red-600 text-2xl">
              39mdPL5NsJky1cZyD7hyjrCA45iHo21Pcd
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    <FooterUser />
    </Layout>
    </div>
    
   </>
  )
}

export default Withdrawals

Withdrawals.defaultProps ={
  needsAuth: true,


}