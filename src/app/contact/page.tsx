"use client"
import React from 'react'
import Hero from '@/components/Hero'
import * as Yup from "yup"

import Link from 'next/link'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '@/db/firebaseDb';
import { useFormik } from 'formik'
import Toast from '@/utils/Alert'


export default function Contact() {

    const formikContact = useFormik({
        initialValues: {
          email: "",
          name: "",
          subject: "",
          message: "",
          phone: "",
        },
    
        validationSchema: Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .trim()
            .required("Email required")
            .lowercase(),
          name: Yup.string().lowercase().trim().required("fullname is required"),
          phone: Yup.string().required("phone number is required"),
          subject: Yup.string().optional(),
          message: Yup.string()
            .min(4, "message must be more then 4 characters")
            .required("Message number required"),
        }),
        onSubmit: (values) => handleSubmit(values),
      });
    
      const handleSubmit = async (val: {
        email: string;
        name: string;
        subject: string;
        message: string;
        phone: string;
      }) => {
        formikContact.setSubmitting(true);
        const { email, name, subject, message, phone } = val;
    
        try {
          //create user on firestore
          await addDoc(collection(db, "contacts"), {
            uid: auth.currentUser ? auth.currentUser?.uid : Date.now(),
            name,
            email,
            phone,
            subject,
            message,
            status: "success",
            filterDate: new Date().toLocaleDateString(),
            date: serverTimestamp(),
          });
          formikContact.setSubmitting(false);
          formikContact.resetForm();
          Toast.success.fire({
            text: "Thanks for contacting us. We will get back to you soon.",
          });
        } catch (err) {
          formikContact.setSubmitting(false);
          formikContact.resetForm();
          Toast.success.fire({ text: "An error occured" });
        }
      };

      const formik = useFormik({
        initialValues: {
         email: ""
        },
        validationSchema: Yup.object({
         email: Yup.string().email().trim().required("Field required")
        }),
        onSubmit: (values) => handleSubmitNews(values.email)
     })

     const handleSubmitNews = async(values: string) => {
          formik.setSubmitting(true)
    
          try{
            await addDoc(collection(db,"newsletters"),{
                  user: auth.currentUser?.uid ? auth.currentUser?.uid: "Guest",
                  newsletter: values,
                  uid: new Date().toDateString(),
                  date: serverTimestamp()
            } )
            formik.setSubmitting(false)
            formik.resetForm()
            Toast.success.fire({text: "Thanks for subscribing for our newsletters"})
         }catch(error){
              formik.setSubmitting(false)
               Toast.error.fire("Something went wrong")
          }
     }
  return (
    <div className="h-screen ">
      <Hero pageName="Contact" />
      <section>
        <div className="px-3 md:px-8 h-auto -mt-28 mb-16">
          <div className="container mx-auto max-w-full">
            <div className="flex justify-center items-center  px-4 h-[600px]">
              <div className="map w-full h-[50%] ">

                <iframe
                  src="https://www.google.com/maps/embed/v1/place?q=no+345+Street+End,+Blagdon,+Bristol,+England,+United+Kingdom&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  style={{ border: 0 }}
                  className="w-full h-full rounded-lg"
                  aria-hidden="false"
                  tabIndex={0}
                  title="Cryptoguarantee Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <footer
          className="footer-area bg-img"
          style={{
            backgroundImage:
              'url(https://ico-tailwindcss.netlify.app/assets/img/core-img/pattern.png)',
          }}
        >
          {/* ##### Contact Area Start ##### */}
          <div className="contact_us_area section-padding-0-0" id="contact">
            <div className="container mx-auto sm:px-4">
              <div className="flex flex-wrap ">
                <div className="w-full">
                  <div className="section-heading text-center">
                    {/* Dream Dots */}
                    <div
                      className="dream-dots justify-center fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <span className="gradient-text">Contact us</span>
                    </div>
                    <h2 className="fadeInUp" data-wow-delay="0.3s">
                      Contact With Us
                    </h2>
                    <p className="fadeInUp" data-wow-delay="0.4s">
                      Contact us for any information, confusions or issues. Our
                      client satisfaction is our most priority.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="flex flex-wrap  justify-center">
                <div className="w-full md:w-4/5 pr-4 pl-4 lg:w-2/3 ">
                  <div className="contact_form">
                  <form id="main_contact_form" onSubmit={formikContact.handleSubmit}>
                    <div className="flex flex-wrap ">
                      <div className="w-full">
                        <div id="success_fail_info"></div>
                      </div>

                      <div className="w-full md:w-1/2 pr-4 pl-4">
                        <div className="group fadeInUp" data-wow-delay="0.2s">
                          <input
                            type="text"
                            placeholder='Enter Name'
                            {...formikContact.getFieldProps("name")}
                          />
                          <span className="highlight"></span>
                          <span className="bar"></span>
                          <label>Name</label>
                      {formikContact.touched.name && formikContact.errors.name ? (
                          <div className="text-red-500 mb-2">
                            {formikContact.errors.name}
                          </div>
                        ) : null}
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 pr-4 pl-4">
                        <div className="group fadeInUp" data-wow-delay="0.3s">
                          <input
                            type="email"  
                           {...formikContact.getFieldProps("email")}
                           placeholder='Enter Email'
                          />
                          <span className="highlight"></span>
                          <span className="bar"></span>
                          <label>Email</label>
                          {formikContact.touched.email && formikContact.errors.email ? (
                          <div className="text-red-500 mb-2">
                            {formikContact.errors.email}
                          </div>
                        ) : null}
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="group fadeInUp" data-wow-delay="0.4s">
                          <input
                            type="text"
                           {...formikContact.getFieldProps("subject")}
                          />
                          <span className="highlight"></span>
                          <span className="bar"></span>
                          <label>Subject</label>
                          {formikContact.touched.email && formikContact.errors.email ? (
                          <div className="tw-text-red-500 tw-mb-2">
                            {formikContact.errors.email}
                          </div>
                        ) : null}
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="group fadeInUp" data-wow-delay="0.5s">
                          <textarea
                            placeholder='Write us a message'
                           {...formikContact.getFieldProps("message")}
                          ></textarea>
                          <span className="highlight"></span>
                          <span className="bar"></span>
                          <label>Message</label>
                          {formikContact.touched.message && formikContact.errors.message ? (
                          <div className="tw-text-red-500 tw-mb-2">
                            {formikContact.errors.message}
                          </div>
                        ) : null}
                        </div>
                      </div>
                      <div
                        className="w-full text-center fadeInUp"
                        data-wow-delay="0.6s"
                      >
                        <button
                          type="submit"
                          className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline more-btn"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ##### Contact Area End ##### */}
          <section className="container mx-auto sm:px-4 mt-12">
            <div className="subscribe section-padding-0-100">
              <div className="flex flex-wrap ">
                <div className="sm:w-full pr-4 pl-4">
                  <div className="subscribe-wrapper">
                    <div className="section-heading text-center">
                      <h2 className="wow fadeInUp" data-wow-delay="0.3s">
                        Don’t Miss our News And Updates!
                      </h2>
                      <p className="wow fadeInUp" data-wow-delay="0.4s">
                        Subscribe for updates, news and information on our
                        platform.
                      </p>
                    </div>
                    <div className="service-text text-center">
                      <div className="subscribe-section has-shadow">
                        <div className="input-wrapper">
                          <i className="fa fa-home"></i>
                          <input
                            type="email"
                            placeholder="Enter your Email"
                            {...formik.getFieldProps("email")}
                          />
                          {formik.touched.email && formik.errors.email ? (
                              <div className="text-red-500 mb-2">
                                {formik.errors.email}
                              </div>
                            ) : null}
                        </div>
                        <button
                          type="submit"
                          className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline more-btn mt-x-15"
                        >
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="footer-content-area ">
            <div className="container mx-auto sm:px-4">
              <div className="flex flex-wrap  ">
                <div className="w-full lg:w-1/3 pr-4 pl-4 md:w-1/2 ">
                  <div className="footer-copywrite-info">
                    {/* Copywrite */}
                    <div
                      className="copywrite_text fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="footer-logo">
                        <Link href="#">
                          <img draggable="false" src="/assets/img/logo.png" alt="logo" />{' '}
                          cryptoguarantee{' '}
                        </Link>
                      </div>
                      <p>
                        We are out to give you the best of our services in
                        crypto trading and investment.Our clients satisfaction
                        is our priority .
                      </p>
                    </div>
                    {/* Social Icon */}
                    <div
                      className="footer-social-info fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <Link href="#">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </Link>
                      <Link href="#">
                        {' '}
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </Link>
                      <Link href="#">
                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                      </Link>
                      <Link href="#">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </Link>
                      <Link href="#">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/5 pr-4 pl-4 md:w-1/2  ">
                  {/* Content Info */}
                  <div className="contact_info_area sm:flex justify-between">
                    <div
                      className="contact_info mt-s text-center fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <h5>NAVIGATE</h5>
                      <Link href="/">
                        <p>Home</p>
                      </Link>
                      <Link href="/about">
                        <p>About</p>
                      </Link>
                      <Link href="/team">
                        <p>Team</p>
                      </Link>
                      <Link href="/contact">
                        <p>Contact</p>
                      </Link>
                      <Link href="/pricing">
                        <p>Pricing</p>
                      </Link>
                      <Link href="/login">
                        <p>login</p>
                      </Link>
                      <Link href="/register">
                        <p>Register</p>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/4 pr-4 pl-4 md:w-1/2  ">
                  <div className="contact_info_area sm:flex justify-between">
                    {/* Content Info */}
                    <div
                      className="contact_info mt-s text-center fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <h5>CONTACT US</h5>
                      <p>Address:No 345 Street End,</p>
                      <p>Blagdon, Bristol, England, United Kingdom</p>
                      <p>
                        Whatsapp:{' '}
                        <a href="https://wa.me/+443567647896">+443567647896</a>
                      </p>
                      <p>
                        Whatsapp:{' '}
                        <a href="https://wa.me/+12046022485">+12046022485</a>{' '}
                      </p>
                      <p>support@cryptoguarantee.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  )
}
