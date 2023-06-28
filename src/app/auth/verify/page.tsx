"use client";
import React, { useEffect, useState } from "react";
import Toast from "@/utils/Alert";
import {  db, auth } from "@/db/firebaseDb";
import { useFormik } from "formik";
import * as Yup from "yup";
import createNotification from "@/utils/createNotification";
import { DocumentData, doc, onSnapshot, updateDoc } from "firebase/firestore";


function Verify() {
  //const {document} = useSelector((state: RootState) => state.auth)
  
const [document, setDocument] = useState<DocumentData | undefined>({})

  useEffect(() => {
    const getDocument = async () => {

        const unsubscribe = onSnapshot(doc(db, "users", auth.currentUser?.uid as string),
          (qsnap) => {
            setDocument(qsnap.data());
          },
          (err) => {
          }
        );
        return unsubscribe;
     
    };

    getDocument();
  }, []);

  const formik = useFormik({
    initialValues: {
      code: "",
    },

    validationSchema: Yup.object({
      code: Yup.string().required("Verification code required"),
    }),
    onSubmit: (values) => handleSubmit(values.code as string),
  });

  const handleSubmit = async (code: string) => {
    formik.setSubmitting(true);

    //create user on firestore
    if (document?.verificationCode !== code) {
      formik.setSubmitting(false);
      return Toast.error.fire({ text: "Wrong verification code" });
    }
    try {
      await updateDoc(doc(db, `users/${document?.uid}`), {
        verified: true,
      });
      const noteData1 = {
        title: "Fund Added",
        text: "You have received $20 registration bonus",
      };

      await createNotification(noteData1);
      formik.setSubmitting(false);
      formik.resetForm();
      Toast.success
        .fire({
          text: "Account verification successful",
        })
        .then(() => window.location.assign("/user"));
    } catch (error: any) {
      formik.setSubmitting(false);
      formik.resetForm();
      Toast.error.fire({
        text: error.message,
      });
    }
  };

  return (
    <div className="h-screen footer-bg  homepage-3  flex justify-center items-center">
      <div className="lg:w-[50%] w-[85%]   mx-auto bg-[#322194] shadow rounded-lg flex justify-center  flex-wrap">
        <div className=" w-full p-6 ">
          <h1 className="text-2xl xl:text-2xl font-black uppercase text-white">
            Verify Account
          </h1>

          <form className="flex-1 mt-[2px]  " onSubmit={formik.handleSubmit}>
            <div className=" w-full ">
              <input
                className="w-full px-8 py-3 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-sm focus:outline-none focus:bg-opacity-10 text-white mt-8"
                type="text"
                placeholder="Verification Code"
                {...formik.getFieldProps("code")}
              />
              {formik.touched.code && formik.errors.code ? (
                <div className="text-danger mb-2">{formik.errors.code}</div>
              ) : null}
            </div>

            <button
              disabled={formik.isSubmitting}
              type="submit"
              className="more-btn w-full  mt-8"
            >
              <i className="fas fa-sign-in-alt fa 1x w-6 text-white -ml-2" />
              <span className="ml-3">
                {formik.isSubmitting ? "Submitting..." : "Verify"}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Verify;
