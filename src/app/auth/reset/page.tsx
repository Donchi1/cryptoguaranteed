"use client"
import { useFormik } from 'formik';
import React from 'react'
import * as Yup from "yup"
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/db/firebaseDb';
import Toast from '@/utils/Alert';
import Link from 'next/link';



const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .trim()
        .required("Email required")
        .lowercase(),
    }),
    onSubmit: (values) => handleSubmit(values),
  });

  const handleSubmit = async (val: { email: string }) => {
    formik.setSubmitting(true);
    const { email } = val;

    try {
      //create user on firestore
      await sendPasswordResetEmail(auth, email);
      formik.setSubmitting(false);
      formik.resetForm();
      Toast.success.fire({
        text: "An account reset instructions was sent to your email",
      });
    } catch (err: any) {
      formik.setSubmitting(false);
      formik.resetForm();
      Toast.error.fire({ text: err });
    }
  };


  return (
    <div className="h-screen footer-bg  homepage-3  flex justify-center items-center">
      <div className="lg:w-[50%] w-[85%]   mx-auto bg-[#322194] shadow rounded-lg flex justify-center  flex-wrap">
        <div className=" w-full p-6 ">
          <h1 className="text-2xl xl:text-2xl font-black uppercase text-white">
            Password Reset
          </h1>

          <form className="flex-1 mt-2  " onSubmit={formik.handleSubmit}>
            <div className=" w-full ">

                <input
                  className="w-full px-8 py-3 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-sm focus:outline-none focus:bg-opacity-10 text-white mt-3"
                  type="email"
                  placeholder="Email"
                  {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email ? (
                        <div className="text-red-500 mb-2">
                          {formik.errors.email}
                        </div>
                      ) : null}
                </div>

                <button type="submit" className="w-full more-btn mt-4 ">
                  <i className="fas fa-user-plus fa 1x w-6  -ml-2" />
                  <span className="ml-3">{formik.isSubmitting? "Submitting" : "Submit"}</span>
                </button>
                <div className="my-3  text-center flex justify-center items-center">
                  <span className="leading-none border rounded-full flex justify-center items-center w-8 h-8  text-sm text-indigo-400 tracking-wide font-medium  transform translate-y-1/2">
                    OR 
                  </span>
                </div>
                <div className="mx-auto mx-w-sm w-full">
                  <Link className="w-full more-btn mt-4" href="/auth/login">
                    <i className="fas fa-sign-in-alt fa 1x w-6  -ml-2 text-white" />
                    <span className="ml-4">Login</span>
                  </Link>
                  <Link className="w-full more-btn mt-4 " href="/auth/register">
                    <i className="fas fa-sign-in-alt fa 1x w-6  -ml-2 text-white" />
                    <span className="ml-4">Register</span>
                  </Link>
                </div>

            </form>
              </div>
              </div>
          </div>
          
         
      
  )
}

export default Login
