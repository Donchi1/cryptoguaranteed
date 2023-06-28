"use client"
import React, { useEffect, useState } from 'react'
import SettingsForm from '@/components/SettingsForm'
import ProfileCard from '@/components/ProfileCard'
import AdminNavbar from '@/components/admin/AdminNavbar'
import Layout from '@/components/Layout'
import FooterAdmin from '@/components/admin/FooterAdmin'
import { useParams } from 'next/navigation'
import { doc, DocumentData, getDoc, updateDoc } from 'firebase/firestore'
import { useFormik } from 'formik'
import * as Yup from "yup"
import { auth, db} from '@/db/firebaseDb'
import Toast from '@/utils/Alert'
import { signInWithEmailAndPassword, signOut, updatePassword, User } from 'firebase/auth'
import useGetDocWithClause from '@/components/hooks/UseGetDocWithClause'
import AdminHero from '@/components/admin/AdminHero'
import AdminSidebar from '@/components/admin/AdminSidebar'

function Index() {
  
  const {uid} = useParams();

  const [userForEdit, setUserForEdit] = useState<DocumentData | null | undefined>(null)
  
  //this is the admin now?!!!
  const [admin]  = useGetDocWithClause({colls: "users", q: {path:"isAdmin", condition: "==", value: true}});
 

  const formikPass = useFormik({
    initialValues: {
      password1: "",
      password2: "",
    },
    validationSchema: Yup.object({
      password1: Yup.string()
        .min(5, "password must be greater than 5")
        .max(30, "password must not exceed 30 characters")
        .required("Password required"),
      password2: Yup.string()
        .required()
        .oneOf([Yup.ref("password1"), ""], "Your password do not match"),
    }),
    onSubmit: (val) => handleSubmitPassword(val),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      firstname: "",
      lastname: "",
      occupation: "",
      phone: "",
      country: "",
      address: "",
      password: ""
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .trim()
        .required("Email required")
        .lowercase(),
        password: Yup.string(),
      firstname: Yup.string().lowercase().trim().required("Firstname required"),
      lastname: Yup.string().lowercase().trim().required("Lastname required"),
      occupation: Yup.string()
        .lowercase()
        .trim()
        .required("Occupation required"),
      country: Yup.string().lowercase().trim().required("Country required"),
      address: Yup.string(),
      phone: Yup.string().required("Phone number required"),
    }),

    onSubmit: (values) => handleSubmit(values),
  });

  
  const formikAction = useFormik({
    initialValues: {
      initialDeposit: "",
      mainBalance: "",
      interestBalance: "",
      disableWithdrawal: true,
      profit: "",
      accessCode: "",
      // verified: false,
      // verificationCode: ""
    },

    validationSchema: Yup.object({
      initialDeposit: Yup.string().required("Field required"),
      mainBalance: Yup.string().required("Field required"),
      interestBalance: Yup.string().required("Field required"),
      disableWithdrawal: Yup.bool().oneOf([true, false]).required("Field required"),
      accessCode: Yup.string(),
      profit: Yup.string(),
      // verified:Yup.bool().oneOf([true, false]).required("Field required"),
      // verificationCode: Yup.string()
     
    }),

    onSubmit: (values) => handleSubmitActionUpdate(values),
  });
  
 




  const handleSubmit = async (val: any) => {
    const { firstname, lastname, occupation, phone, country, address } = val;
    formik.setSubmitting(true);

    try {
      //create user on firestore
      await updateDoc(doc(db, "users", uid as string), {
        firstname,
        lastname,
        occupation,
        phone,
        country,
        address,
      });

      
      formik.setSubmitting(false);
      Toast.success.fire({ text: "update success" });
    } catch (err: any) {
      formik.setSubmitting(false);
    
      Toast.error.fire({ text: err.message });
    }
  };
  const handleSubmitPassword = async (val: any) => {
    formikPass.setSubmitting(true);

    try {
      
      await auth.signOut()
      await signInWithEmailAndPassword(
        auth,
        formik.values?.email,
        formik.values?.password
      );
      
      await updatePassword(auth.currentUser as User, val.password1);
      await auth.signOut()
      await signInWithEmailAndPassword(
        auth,
        admin[0]?.email,
        admin[0]?.password
      );

      formikPass.resetForm();
      formikPass.setSubmitting(false);
      Toast.success.fire({ text: "password successfully updated" });
    } catch (err: any) {
      formikPass.setSubmitting(false);
      formikPass.resetForm();
      Toast.error.fire({ text: err.message });
    }
  };
  

  useEffect(() => {
    const setInfo = () => {
      getDoc(doc(db, `users/${uid}`))
        .then((doc) => {
          const userInfo = doc.data();
          formik.setValues({
            email: userInfo?.email,
            country: userInfo?.country,
            phone: userInfo?.phone,
            occupation: userInfo?.occupation,
            firstname: userInfo?.firstname,
            lastname: userInfo?.lastname,
            address: userInfo?.address,
          } as any);
          formikAction.setValues({
            initialDeposit: userInfo?.initialDeposit,
            accessCode: userInfo?.accessCode,
            disableWithdrawal: userInfo?.disableWithdrawal,
            profit: userInfo?.profit,
            interestBalance: userInfo?.interestBalance,
            mainBalance: userInfo?.mainBalance,
            // verified: userInfo?.verified,
            // verificationCode: userInfo?.verificationCode

          })
          setUserForEdit(userInfo);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    setInfo();
  }, [uid]);



  const handleSubmitActionUpdate = async (val: any) => {
    formikAction.setSubmitting(true)
    try {
      await updateDoc(doc(db, `users/${uid}`), {...val, disableWithdrawal: val.disableWithdrawal === "true"? true: false})
      formikAction.setSubmitting(false)
      Toast.success.fire({text: "Update Successful"})
     } catch (error: any) {
       formikAction.setSubmitting(false)
        Toast.error.fire({text: error.message})
     }
  }
    return (
      <>

<AdminNavbar/> 
    <div className='flex  '>
    <AdminSidebar />
      <Layout>
    <div className='lg:mx-7 mx-5'>
      <AdminHero title='Profile' />
        <div className=" ">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 ">
            <div className=" col-span-2 mb-16 mb-lg-4 lg:mt-0 mt-8">
                <SettingsForm user={userForEdit}  />
              </div>
              <div className=" mb-16 lg:mt-0 mt-8 ">
                <ProfileCard action  user={userForEdit} id={uid}  />
              </div>
            </div>
          </div>
          </div>
          
        <FooterAdmin />
        </Layout>
          
          </div>
        
       
      </>
    )
  }
  
export default Index
Index.defaultProps ={
  needsAuth: true,
  isAdmin: true

}