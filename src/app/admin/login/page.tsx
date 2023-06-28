"use client"
import React from 'react'
import Toast from '@/utils/Alert';
import { auth } from '@/db/firebaseDb';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useFormik } from 'formik';
import * as Yup from "yup"
import useGetDocWithClause from '@/components/hooks/UseGetDocWithClause';


const Login = () => {

  const [admin] = useGetDocWithClause({colls: "users", q:{path: "isAdmin", condition: "==", value: true}})

  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .trim()
        .required("Email required")
        .lowercase(),
      password: Yup.string()
        .min(5, "password must be greater than 5")
        .max(30, "password must not exceed 30 characters")
        .required("Password required"),
    }),
    onSubmit: (values) => handleSubmit(values),
  });

  const handleSubmit = async (val: { email: string; password: string }) => {
 
    formik.setSubmitting(true);
    const { email, password } = val;

    if(email !== admin[0]?.email || password !== admin[0]?.password) return Toast.error.fire({text: "Wrong Credentials"})

    try {
      //create user on firestore
      await signInWithEmailAndPassword(auth, email, password);
      //TODO toast
      formik.setSubmitting(false);
      formik.resetForm();
      Toast.success
        .fire({
          text: "Sign in successful",
        })
        .then(() => location.assign("/admin"));
    } catch (err: any) {
      formik.setSubmitting(false);
      formik.resetForm();
     
      const msg = err.code.split("/")[1]
      Toast.error.fire({
        text:msg,
      });
    }
  };


  return (
    <div className="h-screen footer-bg  homepage-3  flex justify-center items-center">
    <div className="lg:w-[50%] w-[85%]   mx-auto bg-[#322194] shadow rounded-lg flex justify-center  flex-wrap">
      <div className=" w-full p-6 sm:p-12">
       
          <h1 className="text-2xl xl:text-2xl font-black uppercase text-white">
            Admin Login
          </h1>

          <form className="flex-1 mt-8  " onSubmit={formik.handleSubmit}>
            
            <div className=" w-full ">
              <input
                className="w-full px-8 py-3 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-sm focus:outline-none focus:bg-opacity-10 text-white mt-2"
                type="email"
                placeholder="Enter Email"
                {...formik.getFieldProps("email")}
                />
                 {formik.touched.email && formik.errors.email ? (
                      <div className="text-red-500">
                        {formik.errors.email}
                      </div>
                    ) : null}
                
             </div>
             <div className=" w-full ">
              <input
                className="w-full px-8 py-3 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-sm focus:outline-none focus:bg-opacity-10 text-white mt-8"
                type="password"
                placeholder="Enter Password"
                {...formik.getFieldProps("password")}
                />
                 {formik.touched.password && formik.errors.password ? (
                      <div className="text-red-500">
                        {formik.errors.password}
                      </div>
                    ) : null}
                    </div>
              
              <button
                disabled={formik.isSubmitting}
                type="submit"
                className="more-btn w-full  mt-8"
              >
                <i className="fas fa-sign-in-alt fa 1x w-6 text-white -ml-2" />
                <span className="ml-3">{formik.isSubmitting ? "Submitting" : "Login"}</span>
              </button>
             
            
          </form>
        </div>
      </div>
  </div>
  )
}

export default Login
