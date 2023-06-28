"use client"
import Link from "next/link";
import * as Icons from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Toast from "@/utils/Alert";
import { usePathname } from "next/navigation";
import { RootDispatch, RootState } from "@/redux/store";
import { accessCodeType, handleAccessCode } from "@/redux/mainSlice";
import { auth, db } from "@/db/firebaseDb";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import createNotification from "@/utils/createNotification";
import { useState } from "react";

type investType = {
  amount: string;
  account: string;

};
type transType = {
  amount: string;
  account: string;
  firstname: string,
  email: string,
  remark: string
};

export default function Sidebar() {
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const { showSidebar, accessCodeInfo } = useSelector(
    (state: RootState) => state.app
  );

  const dispatch: RootDispatch = useDispatch();

  const pathname  = usePathname();
  const [transfer, setTransfer] = useState(false)

  const formik = useFormik({
    initialValues: {
      amount: "",
      account: "",
    } as investType,

    validationSchema: Yup.object({
      amount: Yup.number().min(50).required("Amount required"),
      account: Yup.string().required("Account required"),

    }),

    onSubmit: (values) => handleInvest(values),
  });

  const formikTrans = useFormik({
    initialValues: {
      amount: "",
      account: "",
      email: "",
      remark: "",
      firstname: ""
    } as transType,

    validationSchema: Yup.object({
      amount: Yup.number().min(50).required("Amount required"),
      account: Yup.string().required("Account required"),
      email: Yup.string().email().trim().required("Receiver email required"),
      remark: Yup.string().required("Remark required"),
      firstname: Yup.string().trim().required("Receiver firstname  required"),
    }),

    onSubmit: (values) => handleTransfer(values),
  });

  const handleTransfer  = async(values:transType) => {
    
    if (values.account === "mainBalance" && currentUser?.mainBalance === "0000")
      return Toast.error.fire({
        text: "Low or No balance for Transfer (Main)",
      });
    if (
      values.account === "interestBalance" &&
      currentUser?.interestBalance === "0000"
    )
      return Toast.error.fire({
        text: "Low or No balance for Transfer (Interest)",
      });
    if (
      values.account === "interestBalance" &&
      Number(currentUser?.interestBalance) < 50
    )
      return Toast.error.fire({
        text: "Sorry you can't transfer less than 50 Euros (Interest)",
      });
    if (
      values.account === "mainBalance" &&
      Number(currentUser?.mainBalance) < 50
    )
      return Toast.error.fire({
        text: "Sorry you can't transfer less than 50 Euros (Main)",
      });

      const deductedMain =
      values.account === "mainBalance"
        ? Number(currentUser?.mainBalance) - Number(values?.amount)
        : currentUser?.mainBalance;
    const deductedInterest =
      values.account === "interestBalance"
        ? Number(currentUser?.interestBalance) - Number(values?.amount)
        : currentUser?.interestBalance;
        formikTrans.setSubmitting(true);
        try {
          const user = await getDocs(query(collection(db, `users`), where("email", "==", values.email ) ))
           if(user.empty){
            formikTrans.setSubmitting(false);
             return Toast.error.fire({text: "User not found"})
           }
          const mainBalanceInfo: number | string = values.account === "mainBalance"? Number(user.docs[0].data().mainBalance) + Number(values.amount): user.docs[0].data().mainBalance 
          const interestBalanceInfo: number | string = values.account === "interestBalance" ? Number(user.docs[0].data().interestBalance) + Number(values.amount) : user.docs[0].data().interestBalance

          await updateDoc(doc(db, `users/${user.docs[0].id}`), {
              mainBalance: mainBalanceInfo.toString(),
              interestBalance: interestBalanceInfo.toString()
          });
          await updateDoc(doc(db, `users/${currentUser?.uid}`), {
            mainBalance: deductedMain.toString(),
            interestBalance: deductedInterest.toString(),
          });
    
         
          await addDoc(
            collection(db, `transactions/${currentUser?.uid}/transactionDatas`),
            {
              slNo: Math.ceil(Math.random() + new Date().getSeconds()),
              uid: currentUser?.uid,
              amount: values?.amount,
              type: "Transfer",
              remarks: `You have successfully transfered ${values?.amount}`,
              date: serverTimestamp(),
              firstname: currentUser?.firstname,
              photo: currentUser?.photo,
              status: "success",
              accessCodeProve: "",
              filterDate: new Date().toLocaleDateString(),
            }
          );
          const nData = {
            title: "Transfer",
            text:  `You have transfered €${values?.amount} to ${values.firstname}`
          }
          const rData = {
            title: "Received",
            text:  `You have received €${values?.amount} from ${currentUser?.firstname}`,
            userId: user.docs[0].id
          }
          await createNotification(nData)
          await createNotification(rData, )
          formikTrans.setSubmitting(false);
          formikTrans.resetForm();
          Toast.success.fire({
            text: `You transfer of €${values?.amount} to ${values.email} was successful`,
          });
        } catch (err: any) {
          formikTrans.setSubmitting(false);
          formikTrans.resetForm();
          Toast.error.fire({ text: err });
        }
  }

  const handleInvest = async (values: investType) => {
   
    if (values.account === "mainBalance" && currentUser?.mainBalance === "0000")

      return Toast.error.fire({
        text: "Low or No balance for Investment (Main)",
      });
    if (
      values.account === "interestBalance" &&
      currentUser?.interestBalance === "0000"
    )
      return Toast.error.fire({
        text: "Low or No balance for Investment (Interest)",
      });
    if (
      values.account === "interestBalance" &&
      Number(currentUser?.interestBalance) < 50
    )
      return Toast.error.fire({
        text: "Sorry you can't invest less than 50 Euros (Interest)",
      });
    if (
      values.account === "mainBalance" &&
      Number(currentUser?.mainBalance) < 50
    )
      return Toast.error.fire({
        text: "Sorry you can't invest less than 50 Euros (Main)",
      });
  
    const deductedMain =
      values.account === "mainBalance"
        ? Number(currentUser?.mainBalance) - Number(values?.amount)
        : currentUser?.mainBalance;
    const deductedInterest =
      values.account === "interestBalance"
        ? Number(currentUser?.interestBalance) - Number(values?.amount)
        : currentUser?.interestBalance;

        formik.setSubmitting(true);
    try {
      await updateDoc(doc(db, `users/${currentUser?.uid}`), {
        mainBalance: deductedMain.toString(),
        interestBalance: deductedInterest.toString(),
      });

      await addDoc(
        collection(
          db,
          `investments/${auth.currentUser?.uid as string}/investmentDatas`
        ),
        {
          startDate: serverTimestamp(),
          date: serverTimestamp(),
          filterDate: new Date().toLocaleDateString(),
          profit: 0,
          progress: 0,
          investedAmount: values.amount,
          expectedProfit: Number(values?.amount) * 12,
          username: currentUser?.firstname || "guest",
          photo: currentUser?.photo,
          status: "pending",
          fixedCharge: "5",
          uid: auth.currentUser?.uid,
          idx: "wt".concat(Date.now().toString()),
        }
      );
      await addDoc(
        collection(db, `transactions/${currentUser?.uid}/transactionDatas`),
        {
          slNo: Math.ceil(Math.random() + new Date().getSeconds()),
          uid: currentUser?.uid,
          amount: values?.amount,
          type: "Investment",
          remarks: `You have successfully invested €${values?.amount}`,
          date: serverTimestamp(),
          firstname: currentUser?.firstname,
          photo: currentUser?.photo,
          status: "success",
          accessCodeProve: "",
          filterDate: new Date().toLocaleDateString(),
        }
      );
      const nData = {
        title: "Investment Started",
        text:  `You have Successfully invested ${values?.amount} euros`
      }
      await createNotification(nData)
      formik.setSubmitting(false);
      formik.resetForm();
      Toast.success.fire({
        text: `Your investment of €${values?.amount} was successful`,
      });
    } catch (err: any) {
      formik.setSubmitting(false);
      formik.resetForm();
      Toast.error.fire({ text: err });
    }
  };

  const withdrawalCheck = () => {
    if (pathname === "/user/withdrawals") {
      return;
    }
    if (!currentUser?.mainBalance || currentUser?.mainBalance === "0000") {
      return Toast.error.fire({
        text: "No balance for withdrawal",
      });
    }

    if (currentUser?.accessCode === "") {
      return Toast.Alert.fire({
        title: <p>Access Code Required</p>,
        html: (
          <span className="text-warning">
            Access code required to further your withdrawal
          </span>
        ),
        icon: "error",
        showCloseButton: true,
        background: "#030239",
        confirmButtonText: "Check Or Get One",
        
      }).then((value) => {
        if (value.isConfirmed) {
         
          return dispatch(
            handleAccessCode({
              isSubmitting: false,
              open: true,
            } as accessCodeType)
          );
        }
      });
    }

    return dispatch(
      handleAccessCode({
        isSubmitting: false,
        open: true,
      } as accessCodeType)
    );
  };

  const handleLogout = async () => {
    await auth.signOut();
    return location.assign("/");
  };

  return (
    <>
      <div className="modal fade !bg-black/80 " data-bs-backdrop="static" data-bs-keyboard="false"  id="investModal" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content darker">
            <div className="modal-header">
              <h5 className="modal-title text-bold uppercase text-white">
                Investment
              </h5>
              <button
              onClick={() => {
                formik.resetForm()
                formik.setSubmitting(false)
              }}
                className="btn-close !text-red-500 border-0"
                data-bs-dismiss="modal"
                aria-label="close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={formik.handleSubmit}>
                <div className="input-grou">
                  <label className="text-[#7450fe]" htmlFor="amt">Amount</label>
                  <input
                    type="number"
                    id="amt"
                     {...formik.getFieldProps("amount")}
                    className="w-full px-8 py-3 rounded-lg font-medium bg-transparent border border-[#304ffe] text-white text-sm focus:outline-none focus:bg-opacity-10  mt-2"
                  />
                  {formik.touched.amount && formik.errors.amount ? (
                    <div className="text-red-500 mb-2">
                      {formik.errors.amount}
                    </div>
                  ) : null}
                </div>
                <div className="single-input">
                  <label  htmlFor="acc" className="mt-2 w-full text-[#7450fe]">
                    Account Type
                  </label>
                  <select
                  {...formik.getFieldProps("account")}
                    id="acc"
                    style={{border:"1px solid white"}}
                    className="w-full px-8   !outline-none !py-4 rounded-lg font-medium bg-transparent focus:!outline-none bordered  text-white text-sm  focus:bg-opacity-10  mt-2"
                    
                  >
                    <option className="text-white !bg-[#011628]/30"></option>
                    <option className="text-white !bg-[#011628]/30" value="mainBalance">
                      Main Balance
                    </option>
                    <option className="text-white !bg-[#011628]/30" value="interestBalance">
                      Interest Balance
                    </option>
                  </select>
                  {formik.touched.account && formik.errors.account ? (
                    <div className="text-red-500 mb-2 w-full">
                      {formik.errors.account}
                    </div>
                  ) : null}
                </div>
                <div className="input-group mt-4">
                  <button disabled={formik.isSubmitting} className="cmn--btn text-white w-full rounded-lg py-3 px-2 bg-gradient-to-r hover:bg-gradient-to-l from-[#21d397] to-[#7450fe]">
                    {formik.isSubmitting ? "Investing..." : "Invest"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade  " data-bs-backdrop="static" data-bs-keyboard="false"  id="transferModal" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content darker">
            <div className="modal-header">
              <h5 className="modal-title text-bold uppercase text-red-500">
                Transfer
              </h5>
              <button
                onClick={() => {
                  setTransfer(false)
                  formikTrans.resetForm()
                  formikTrans.setSubmitting(false)
                }}
                className="btn-close text-danger border-0"
                data-bs-dismiss="modal"
                aria-label="close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={formikTrans.handleSubmit}>
                <div className="input-grou">
                  <label htmlFor="amt">Amount</label>
                  <input
                    type="number"
                    id="amt"
                     {...formikTrans.getFieldProps("amount")}
                    className="w-full px-8 py-3 rounded-lg font-medium bg-transparent border border-[#304ffe] text-white text-sm focus:outline-none focus:bg-opacity-10  mt-2"
                  />
                  {formikTrans.touched.amount && formikTrans.errors.amount ? (
                    <div className="text-red-500 mb-2">
                      {formikTrans.errors.amount}
                    </div>
                  ) : null}
                </div>
                <div className="input-grou">
                  <label htmlFor="acc" className="mt-2">
                    From
                  </label>
                  <select
                  {...formikTrans.getFieldProps("account")}
                    id="acc"
                    className="w-full px-8 py-3 rounded-lg font-medium bg-transparent border border-[#304ffe] text-white text-sm focus:outline-none focus:bg-opacity-10  mt-2"
                  >
                    <option className="text-white main-bg"></option>
                    <option className="text-white main-bg" value="mainBalance">
                      Main Balance
                    </option>
                    <option className="text-white !bg-[#011628]/30" value="interestBalance">
                      Interest Balance
                    </option>
                  </select>
                  {formikTrans.touched.account && formikTrans.errors.account ? (
                    <div className="text-red-500 mb-2">
                      {formikTrans.errors.account}
                    </div>
                  ) : null}
                </div>
                <div className="input-grou">
                  <label htmlFor="email" className="mt-2">Receiver Email</label>
                  <input
                    type="email"
                    id="email"
                     {...formikTrans.getFieldProps("email")}
                    className="w-full px-8 py-3 rounded-lg font-medium bg-transparent border border-[#304ffe] text-white text-sm focus:outline-none focus:bg-opacity-10  mt-2"
                  />
                  {formikTrans.touched.email && formikTrans.errors.email ? (
                    <div className="text-red-500 mb-2">
                      {formikTrans.errors.email}
                    </div>
                  ) : null}
                </div>
                <div className="input-grou">
                  <label htmlFor="firstname" className="mt-2">Receiver Firstname</label>
                  <input
                    type="text"
                    id="firstname"
                     {...formikTrans.getFieldProps("firstname")}
                    className="w-full px-8 py-3 rounded-lg font-medium bg-transparent border border-[#304ffe] text-white text-sm focus:outline-none focus:bg-opacity-10  mt-2"
                  />
                  {formikTrans.touched.firstname && formikTrans.errors.firstname ? (
                    <div className="text-red-500 mb-2">
                      {formikTrans.errors.firstname}
                    </div>
                  ) : null}
                </div>
                <div className="input-grou">
                  <label className="mt-2" htmlFor="remark">Remark</label>
                  <input
                    type="text"
                    id="renmark"
                     {...formikTrans.getFieldProps("remark")}
                    className="w-full px-8 py-3 rounded-lg font-medium bg-transparent border border-[#304ffe] text-white text-sm focus:outline-none focus:bg-opacity-10  mt-2"
                  />
                  {formikTrans.touched.remark && formikTrans.errors.remark ? (
                    <div className="text-red-500 mb-2">
                      {formikTrans.errors.remark}
                    </div>
                  ) : null}
                </div>
                <div className="input-group">
                  <button disabled={formikTrans.isSubmitting} className="cmn--btn text-white w-full rounded-lg py-3 px-2 bg-gradient-to-r hover:bg-gradient-to-l from-[#21d397] to-[#7450fe]">
                    {formikTrans.isSubmitting ? "Sending..." : "Transfer"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        
      <div
        className={`md:left-0 z-40 static flex-1    ${
          showSidebar ? "block w-0 absolute " : "hidden lg:block static"
        }  `}
      >
        <div className={`h-[87%] pb-4 fixed sidebar-scroll shadow-2xl   ${showSidebar ? "w-[50%] bg--gradient darker" : "w-[25%]  bg-[#011628]/30 c-bg"}`}>
          <div
            className={`h-screen flex-row flex-nowrap  z-10 text-white py-4 px-6 transition-all duration-300`}
          >
            <div className="flex-col items-stretch min-h-full flex-nowrap px-0 ">
              <div>
                <div className="flex justify-center flex-col items-center  p-2">
                  <div>
                    <Image
                      height={150}
                      width={150}
                      className="rounded-xl "
                      src={currentUser?.photo}
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h6 className="text-lg font-[600] mt-2">
                      Welcome:{" "}
                      <span className="text-lg uppercase  text-[#7450fe] font-normal">
                        {currentUser?.firstname}
                      </span>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 justify-center items-center mt-1">
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#investModal"
                  className="px-2 py-[0.7rem]  rounded-lg w-full outline-none bg-new"
                >
                  Invest Now
                </button>
                {/* <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#transferModal"
                  className="  bg-red-500 text-white shadow-md p-2 rounded-lg  outline-none hover:bg-[#e36715] transition-colors "
                >
                  Transfer
                </button> */}
              </div>
              <div className="flex flex-col ">
                <hr className="my-4 min-w-full" />

                <ul className="flex-col min-w-full flex list-none">
                  <li
                    className={`${
                      pathname === "/user" &&
                      " bg-gradient-to-r from-[#21d397] to-[#7450fe]  text-white shadow-md"
                    } rounded-lg mb-2   hover:bg-gradient-to-l hover:from-[#21d397] hover:to-[#7450fe] transition-colors text-white ease-linear duration-500`}
                  >
                    <Link
                      href="/user"
                      className="flex items-center hover:text-white gap-4 text-sm text-white font-light px-4 py-3 rounded-lg"
                    >
                      <Icons.MdHome size={20} />
                      Dashboard
                    </Link>
                  </li>
                  <li
                    className={`${
                      pathname === "/user/profile" &&
                        " bg-gradient-to-r from-[#21d397] to-[#7450fe]  text-white shadow-md"
                    } rounded-lg mb-2   hover:bg-gradient-to-l hover:from-[#21d397] hover:to-[#7450fe] transition-colors text-white ease-linear duration-500`}
                  >
                    <Link
                      href="/user/profile"
                      className="flex items-center hover:text-white gap-4 text-sm text-white font-light px-4 py-3 rounded-lg"
                    >
                      <Icons.MdPerson size={20} />
                      Profile
                    </Link>
                  </li>

                  {/* <li
                    className={`${
                      pathname === "/user/plans" &&
                        " bg-gradient-to-r from-[#21d397] to-[#7450fe]  text-white shadow-md"
                    } rounded-lg mb-2   hover:bg-gradient-to-l hover:from-[#21d397] hover:to-[#7450fe] transition-colors text-white ease-linear duration-500`}
                  >
                    <Link
                      href="/user/plans"
                      className="flex items-center hover:text-white gap-4 text-sm text-white font-light px-4 py-3 rounded-lg"
                    >
                      <Icons.MdToc size={20} />
                      Plans
                    </Link>
                  </li> */}
                  <li
                    className={`${
                      pathname === "/user/investments" &&
                      " bg-gradient-to-r from-[#21d397] to-[#7450fe]  text-white shadow-md"
                    } rounded-lg mb-2   hover:bg-gradient-to-l hover:from-[#21d397] hover:to-[#7450fe] transition-colors text-white ease-linear duration-500`}
                  >
                    <Link
                      href="/user/investments"
                      className="flex items-center hover:text-white gap-4 text-sm text-white font-light px-4 py-3 rounded-lg"
                    >
                      <Icons.MdOutlineSend size={20} />
                      Investments
                    </Link>
                  </li>

                  <li
                    className={`${
                      pathname === "/user/withdrawals" &&
                      " bg-gradient-to-r from-[#21d397] to-[#7450fe]  text-white shadow-md"
                    } rounded-lg mb-2   hover:bg-gradient-to-l hover:from-[#21d397] hover:to-[#7450fe] transition-colors text-white ease-linear duration-500`}
                  >
                    <Link
                      href="#"
                       onClick={withdrawalCheck}
                      className="flex items-center focus:text-white hover:text-white gap-4 text-sm text-white font-light px-4 py-3 rounded-lg"
                    >
                      <Icons.MdListAlt size={20} />
                      Withdrawal
                    </Link>
                  </li>
                  <li
                    className={`${
                      pathname === "/user/withdrawal/history" &&
                        " bg-gradient-to-r from-[#21d397] to-[#7450fe]  text-white shadow-md"
                    } rounded-lg mb-2   hover:bg-gradient-to-l hover:from-[#21d397] hover:to-[#7450fe] transition-colors text-white ease-linear duration-500`}
                  >
                    <Link
                      href="/user/withdrawals/history"
                      className="flex items-center hover:text-white gap-4 text-sm text-white font-light px-4 py-3 rounded-lg"
                    >
                      <Icons.MdHistory size={20} />
                      Withdrawals History
                    </Link>
                  </li>
                  <li
                    className={`${
                      pathname === "/user/payments" &&
                        " bg-gradient-to-r from-[#21d397] to-[#7450fe]  text-white shadow-md"
                    } rounded-lg mb-2   hover:bg-gradient-to-l hover:from-[#21d397] hover:to-[#7450fe] transition-colors text-white ease-linear duration-500`}
                  >
                    <Link
                      href="/user/payments"
                      className="flex items-center hover:text-white gap-4 text-sm text-white font-light px-4 py-3 rounded-lg"
                    >
                      <Icons.MdMoney size={20} />
                      Payment
                    </Link>
                  </li>
                  <li
                    className={`${
                      pathname === "/user/payment/history" &&
                        " bg-gradient-to-r from-[#21d397] to-[#7450fe]  text-white shadow-md"
                    } rounded-lg mb-2   hover:bg-gradient-to-l hover:from-[#21d397] hover:to-[#7450fe] transition-colors text-white ease-linear duration-500`}
                  >
                    <Link
                      href="/user/payments/history"
                      className="flex items-center hover:text-white gap-4 text-sm text-white font-light px-4 py-3 rounded-lg"
                    >
                      <Icons.MdWorkHistory size={20} />
                      Payments History
                    </Link>
                  </li>
                
                  {/* <li
                    className={`${
                      pathname === "/user/chat" &&
                        " bg-gradient-to-r from-[#21d397] to-[#7450fe]  text-white shadow-md"
                    } rounded-lg mb-2   hover:bg-gradient-to-l hover:from-[#21d397] hover:to-[#7450fe] transition-colors text-white ease-linear duration-500`}
                  >
                    <Link
                      href="/user/chat"
                      className="flex items-center hover:text-white gap-4 text-sm text-white font-light px-4 py-3 rounded-lg"
                    >
                      <Icons.MdChat size={20} />
                      Chat
                    </Link>
                  </li> */}
                  <li  className=" bg-gradient-to-r from-[#21d397] to-[#7450fe]  text-white shadow-md
                    rounded-lg mb-2   hover:bg-gradient-to-l hover:from-[#21d397] hover:to-[#7450fe] transition-colors ease-linear duration-500">
                    <Link
                     className="flex items-center hover:text-white gap-4 text-sm text-white font-light px-4 py-[0.8rem] rounded-lg"
                      href="#"
                      onClick={handleLogout}
                    >
                      <Icons.MdLogout size={20} />
                      Logout
                    </Link>
                  </li>
                  {/* <li className="bg-[#e36715] px-4 rounded-lg text-white mb-6">
                    <Link
                      className="flex items-center gap-4 text-lg font-light py-2"
                      href="#"
                      onClick={handleLogout}
                    >
                      <Icon name="description" size="2xl" />
                      Logout
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
