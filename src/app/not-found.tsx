import React from 'react'
import Hero from '@/components/Hero'

export default function NotFound() {
  return (
    <div className="footer-bg  homepage-3 ">
      <section className="h-screen">
        <div className="flex justify-center items-center h-screen ">
         
          <div className="row">
            <div className=" offset-lg-1 text-center leading-loose mb-12">
              <div className="divider small_divider"></div>
              <div className="not_found">
                <h3
                  className="text-2xl font-black text-gray-300"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  PAGE NOT FOUND!
                </h3>
                <p
                  className="text-red-500 mb-8"
                  data-animation="fadeInUp"
                  data-animation-delay="0.6s"
                >
                  The page you are looking for was moved, removed, renamed or
                  might never existed.
                </p>
                <a
                  href="/"
                  className="mt-5 py-2 tracking-wide hover:text-white font-semibold bg-[#304ffe] text-gray-100 w-2/4 mx-auto  rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  data-animation="fadeInUp"
                  data-animation-delay="0.8s"
                >
                  Homepage <i className="ion-ios-arrow-thin-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
