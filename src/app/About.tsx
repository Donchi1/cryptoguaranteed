"use client"
import React from 'react'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Testimonial from '@/components/Testimonial'
import manager from '/assets/img/manager.jpg'
import Teams from '@/components/Teams'
import Link  from "next/link"
import Features from '@/components/Features'


export default function About() {
  return (
    <div>
      <Hero pageName="About-Us" />

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
                    Decentralized Trading Platform
                  </span>
                </div>
                <h4 className="fadeInUp" data-wow-delay="0.3s">
                  Connect blockchain to the real world and start crypto tading.
                </h4>
                <p className="fadeInUp" data-wow-delay="0.4s">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  at dictum risus, non suscipit arcu. Quisque aliquam posuere
                  tortor, sit amet convallis nunc scelerisque in.
                </p>
                <p className="fadeInUp" data-wow-delay="0.5s">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Suscipit ipsa ut quasi adipisci voluptates, voluptatibus
                  aliquid alias beatae reprehenderit incidunt iusto laboriosam.
                </p>
                <Link
                  className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline more-btn mt-30 fadeInUp"
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
      {/* ##### About Us Area End ##### */}

 <Features />

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              accumsan nisi Ut ut felis congue nisl hendrerit commodo.
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
                  <li className="text-white">
                    <i className="fa fa-check"></i>Competent Professionals
                  </li>
                  <li className="text-white">
                    <i className="fa fa-check"></i>Affordable Prices
                  </li>
                  <li className="text-white">
                    <i className="fa fa-check"></i>High Successful Recovery
                  </li>
                  <li className="text-white">
                    <i className="fa fa-check"></i>Creative Layout
                  </li>
                </ul>
                <Link
                  className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline more-btn mt-30 fadeInUp"
                  data-wow-delay="0.6s"
                  href="/features"
                >
                  Read More
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

      <Teams />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  )
}
