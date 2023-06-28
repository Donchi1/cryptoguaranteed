"use client"
import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from "yup"
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { auth, db, storage } from '@/db/firebaseDb'
import { RootState } from '@/redux/store'
import {useSelector} from "react-redux"
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import Toast from '@/utils/Alert'
import UserHero from '@/components/user/UserHero'
import AdminNavbar from '@/components/user/UserNavbar'
import Sidebar from '@/components/user/Sidebar'
import FooterUser from '@/components/user/FooterUser'
import Layout from '@/components/Layout'
import Image from 'next/image'

type ProveType =  {amount: string, method: string, prove: Blob | null}

function Payments() {
  
  const { currentUser } = useSelector((state: RootState) => state.auth);
 const formik = useFormik({
  initialValues: {
    amount: '1',
    method: 'Bitcoin',
    prove: null
  } as ProveType,
  validationSchema: Yup.object({
    amount: Yup.number().required("Amount is required"),
    method: Yup.string().required(),
    prove: Yup.mixed().required("Prove is required")
  }),
  onSubmit: (value) => handleProve(value)
    
  })

 

  

  const handleProve = async(values: ProveType) => {
    
    formik.setSubmitting(true)
    const date = new Date().getTime().toString();
    const storageRef = ref(storage, `proves/${auth.currentUser?.uid + date}`);
    try{

      await uploadBytes(storageRef, values.prove as Blob);
      const url = await getDownloadURL(storageRef);

      await addDoc(collection(db,`payments/${auth.currentUser?.uid}/paymentDatas`),{
      paymentAmount: values.amount,
      date: serverTimestamp(),
      method: values.method,
      firstname: currentUser?.firstname,
      lastname: currentUser?.lastname,
      uid: auth.currentUser?.uid,
      prove: url,
      email: currentUser?.email,
      idx: Math.random().toString(),
      status: "pending",
      dailyIncrement: 0.5
      })
      Toast.success.fire({
        text: "Your funding prove has been sent successfully. We will get back to you soon",
      });
    }catch{
      Toast.error.fire({
        text: "Something went wrong. Please try again",
      });
    }
    
    
  }
 
  
  return (
<>
<AdminNavbar/> 
    <div className='flex  '>
    <Sidebar />
      <Layout >
    <div className='lg:mx-7 mx-5 mb-6'>
      <UserHero title='Payment' />
        <div className=" ">

<div className='flex  justify-center items-center shadow sm:rounded-xl c-bg !bg-[#011628]/30'>
      <div className="max-w-screen-2xl m-0    flex justify-center flex-1  flex-wrap">
        <div className="lg:w-1/2 xl:w-5/12 sm:w-full p-6 sm:p-12">
          <div className=" flex flex-col items-center">
            <h1 className="text-2xl xl:text-2xl font-black uppercase text-center main-color">
              Payment Methods
            </h1>
            <h4 className="text-sm mt-4 uppercase text-center text-white">
              Invest in our platform today and never regret <br />
              choose your investment method
            </h4>

            <form className="w-full flex-1 mt-4 " onSubmit={formik.handleSubmit}>
              <div className="form-group col-md-12 ">
                <input
                  className="w-full px-8 py-3 rounded-[7px] font-medium bg-transparent border border-[#304ffe] placeholder-white text-sm focus:outline-none focus:bg-opacity-10 text-white mt-5"
                  type="number"
                  placeholder="Enter Amount"
                   {...formik.getFieldProps("amount")}  
                  
                />
                 {formik.touched.amount && formik.errors.amount ? (
                      <div className="text-red-500 mb-2">
                        {formik.errors.amount}
                      </div>
                    ) : null}
              </div>

              <div className="form-group col-md-12 animation">
                <h4 className="main-color uppercase mt-2 text-lg">Upload prove</h4>
                <input
                  type="file"
                  className="w-full px-8 py-3 rounded-[7px] font-medium bg-transparent border border-[#304ffe] placeholder-white text-sm focus:outline-none focus:bg-opacity-10 text-white mt-2"
                  
                  title="Upload Prove"
                  onChange={(e) => {
                    const newFile = e.target.files && e.target.files[0]
                    formik.setFieldValue("prove", newFile)
                  }}
                />
                 {formik.touched.prove && formik.errors.prove ? (
                      <div className="text-red-500 mb-2">
                        {formik.errors.prove}
                      </div>
                    ) : null}
              </div>
              <div className="form-group col-md-12 text-center mt-4 ">
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="text-white w-full rounded-lg py-3 px-2 bg-gradient-to-r from-[#21d397] to-[#7450fe] hover:gradient-to-l"
                >
                  <i className="fas fa-user-plus fa 1x w-6  -ml-2" />
                  <span className="ml-3">
                    {formik.isSubmitting ? 'Submitting...' : 'Submit'}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex-1 bg-gray-500 text-center ">
          <div className=" xl:mt-14 w-80 mx-auto  ">
            <div>
              <div>
                <h4 className="text-center">
                  Make payment with the below bitcoin wallet and upload prove.
                </h4>
              </div>
              <Image width={300} height={300} src="/assets/img/qrcode.jpg" alt="code" />
              <h4 className="mt-8 main-color text-xl text-orange-500 text-center break-words">
              37GUcvSwbzRaMRQzVX83bdzKQSjoFjCqJS
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

export default Payments

Payments.defaultProps ={
  needsAuth: true,


}