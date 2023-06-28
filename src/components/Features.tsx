"use client"
import Link from 'next/link'
import React from 'react'
import {BsCheck} from "react-icons/bs"

function Features() {
  return (
   <>
   <section className="about-us-area section-padding-0-100 clearfix">
        <div className="container mx-auto sm:px-4">
          <div className="flex flex-wrap  items-center">
            <div className="w-full lg:w-1/2 pr-4 pl-4 offset-lg-0">
              <div className="who-we-contant">
                <div
                  className="dream-dots text-left fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <span className="gradient-text ">
                    Guaranteed crypto Trading Platform
                  </span>
                </div>
                <h4 className="fadeInUp" data-wow-delay="0.3s">
                  Connect blockchain to the real world and start crypto trading.
                </h4>
                <p className="fadeInUp" data-wow-delay="0.4s">
                  We are the one guaranteed option for your crypto investment
                  and trading. We stand out, providing you with an easy and
                  guaranteed means of crypto trading and investment round the
                  whole world.
                </p>
                <p className="fadeInUp" data-wow-delay="0.5s">
                  Our aim is to make sure all low and high income earners makes
                  the best of there income.
                </p>
                <Link
                  className=" more-btn mt-2 fadeInUp"
                  data-wow-delay="0.6s"
                  href="/about"
                >
                  Read More
                </Link>
              </div>
            </div>

            <img
              draggable="false"
              className="supportImg"
              src="https://ico-tailwindcss.netlify.app/assets/img/svg/trading-strokes.svg"
              alt="support"
            />
            <div className="w-full lg:w-1/2 pr-4 pl-4 offset-lg-0 md:w-full  mt-30 no-padding-left">
              <div
                className="welcome-meter floating-anim fadeInUp"
                data-wow-delay="0.7s"
              >
                <img draggable="false" src="/assets/img/computer.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
       <section
        className="our_services_area section-padding-0-70 clearfix"
        id="services"
      >
        <div className="container mx-auto sm:px-4">
          <div className="section-heading text-center">
            {/* Dream Dots */}
            <div
              className="dream-dots justify-center fadeInUp"
              data-wow-delay="0.2s"
            >
              <span>Why choose us</span>
            </div>
            <h2 className="fadeInUp" data-wow-delay="0.3s">
              Our Main Features
            </h2>
            <p className="fadeInUp" data-wow-delay="0.4s">
              Our features and services made available for you. We are out to
              deliver our best of service.
            </p>
          </div>

          <div className="flex flex-wrap ">
            <div className="w-full md:w-1/2 pr-4 pl-4 lg:w-1/4">
              {/* Content */}
              <div
                className="service_single_content text-left px-4 py-6 mb-30"
                data-wow-delay="0.2s"
              >
                {/* Icon */}
                <div className="service_icon">
                  <img
                    draggable="false"
                    src="https://ico-tailwindcss.netlify.app/assets/img/features/feature-1.svg"
                    alt=""
                  />
                </div>
                <h6>Instant withdrawal</h6>
                <p>
                  Easy and fast withdrawal to your wallet through our reliable
                  withdrawal gateway.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 pr-4 pl-4 lg:w-1/4 ">
              {/* Content */}
              <div
                className="service_single_content text-left px-4 py-6 mb-30"
                data-wow-delay="0.3s"
              >
                {/* Icon */}
                <div className="service_icon">
                  <img
                    draggable="false"
                    src="https://ico-tailwindcss.netlify.app/assets/img/features/feature-2.svg"
                    alt=""
                  />
                </div>
                <h6>Flexibility</h6>
                <p>
                  We provide a fast and flexible means of crypto trading and
                  investments round the whole world.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 pr-4 pl-4 lg:w-1/4 ">
              {/* Content */}
              <div
                className="service_single_content text-left px-4 py-6 mb-30"
                data-wow-delay="0.4s"
              >
                {/* Icon */}
                <div className="service_icon">
                  <img draggable="false" src="/assets/svg/feature-3.svg" alt="" />
                </div>
                <h6>Blockchain technology</h6>
                <p>
                  A stable and accessible blockchain technology made available
                  for all crypto transactions.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 pr-4 pl-4 lg:w-1/4 ">
              {/* Content */}
              <div
                className="service_single_content text-left px-4 py-6 mb-30"
                data-wow-delay="0.5s"
              >
                {/* Icon */}
                <div className="service_icon">
                  <img draggable="false" src="/assets/svg/feature-4.svg" alt="" />
                </div>
                <h6>Experienced team</h6>
                <p>
                  Our experienced and reliable team members ever ready o reach
                  out to you .
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 pr-4 pl-4 lg:w-1/4 ">
              {/* Content */}
              <div
                className="service_single_content text-left px-4 py-6 mb-30"
                data-wow-delay="0.6s"
              >
                {/* Icon */}
                <div className="service_icon">
                  <img draggable="false" src="/assets/svg/feature-5.svg" alt="feature5" />
                </div>
                <h6>Connect free</h6>
                <p>
                  Easy and free way to connect to the cryto for your earnings
                  and feature establishments.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 pr-4 pl-4 lg:w-1/4 ">
              {/* Content */}
              <div
                className="service_single_content text-left px-4 py-6 mb-30"
                data-wow-delay="0.7s"
              >
                {/* Icon */}
                <div className="service_icon">
                  <img draggable="false" src="/assets/svg/feature-6.svg" alt="feature-6" />
                </div>
                <h6>Fast Profit</h6>
                <p>
                  Fast and easy profit and stable bonus added to your account
                  prior to the chosen investment plan .
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 pr-4 pl-4 lg:w-1/4 ">
              {/* Content */}
              <div
                className="service_single_content text-left px-4 py-6 mb-30"
                data-wow-delay="0.7s"
              >
                {/* Icon */}
                <div className="service_icon">
                  <img draggable="false" src="/assets/svg/feature-7.svg" alt="" />
                </div>
                <h6>Low cost</h6>
                <p>
                  No hidden or addition fee. You aligible for your withdrawal in
                  just trading days.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 pr-4 pl-4 lg:w-1/4 ">
              {/* Content */}
              <div
                className="service_single_content text-left px-4 py-6 mb-30"
                data-wow-delay="0.7s"
              >
                {/* Icon */}
                <div className="service_icon">
                  <img draggable="false" src="/assets/svg/feature-8.svg" alt="feature-8" />
                </div>
                <h6>Fast Information</h6>
                <p>
                  Constant information transmition about your account and
                  company activities sent contantly .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features section-padding-0-100 ">
        <div className="container mx-auto sm:px-4">
          <div className="section-heading text-center">
            {/* Dream Dots */}
            <div
              className="dream-dots justify-center fadeInUp"
              data-wow-delay="0.2s"
            >
              <span>Try our Platform</span>
            </div>
            <h2 className="fadeInUp" data-wow-delay="0.3s">
              Our Trading Platform
            </h2>
            <p className="fadeInUp" data-wow-delay="0.4s">
              We provide you a legit, stable and reliable trading platform for
              your future establishments.
            </p>
          </div>
          <div className="flex flex-wrap  items-center">
            <div className="service-img-wrapper lg:w-2/5  md:w-full  sm:w-full pr-4 pl-4 no-padding-right">
              <div className="features-list">
                <div className="who-we-contant">
                  <h4 className="w-text fadeInUp" data-wow-delay="0.3s">
                    Powerful platform.
                  </h4>
                  <p className="w-text fadeInUp" data-wow-delay="0.4s">
                    We are dedicated to providing professional service with the
                    highest degree of honesty and integrity, and strive to add
                    value to our tax and consulting services.
                  </p>
                </div>
                <ul className="list-marked">
                  <li className="text-white flex ">
                    <i className=" !inline-flex justify-center items-center">
                        <BsCheck size={40} />
                        </i>Competent Professionals
                  </li>
                  <li className="text-white flex ">
                    <i className=" !inline-flex justify-center items-center">
                        <BsCheck size={40} />
                        </i>Affordable Prices
                  </li>
                  <li className="text-white flex ">
                    <i className=" !inline-flex justify-center items-center">
                        <BsCheck size={40} />
                        </i>High Successful Recovery
                  </li>
                  <li className="text-white flex ">
                    <i className=" !inline-flex justify-center items-center">
                        <BsCheck size={40} />
                        </i>Fast and easy Trading
                  </li>
                </ul>
                <Link
                  className=" more-btn mt-30 fadeInUp"
                  data-wow-delay="0.6s"
                  href="/login"
                >
                  Get Started
                </Link>
              </div>
            </div>

            <div className="service-img-wrapper lg:w-3/5 pr-4 pl-4 md:w-full  sm:w-full mt-s">
              <div className="image-box">
                <img
                  draggable="false"
                  src="/assets/img/platform.png"
                  className="center-block img-responsive phone-img"
                  alt=""
                />
                <img
                  draggable="false"
                  src="https://ico-tailwindcss.netlify.app/assets/img/core-img/rings.png"
                  className="center-block img-responsive rings "
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
   </>
  )
}

export default Features