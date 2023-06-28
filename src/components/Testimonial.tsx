"use client"
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Testimonial() {
  return (
    <div className="container mx-auto text-center mt-14">
      <div className="w-full">
        <div className="section-heading text-center">
          {/* Dream Dots */}
          <div
            className="dream-dots justify-center fadeInUp"
            data-wow-delay="0.2s"
          >
            <span>Our Testimonials</span>
          </div>
          <h2 className="fadeInUp" data-wow-delay="0.3s">
            Testimonials
          </h2>
          <p className="fadeInUp" data-wow-delay="0.4s">
            See what our clients has to say. Your success story is guaranteed{' '}
          </p>
        </div>
      </div>
      <Slider
 
       
       
 responsive={[
  {
    breakpoint: 460,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true
    }
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true
    }
  }]}

        dots
        autoplay
        className="owl-theme"
        arrows={false}

      >
        <div className="single-team-member fadeInUp" data-wow-delay="0.4s">
          <div className="team-member-thumb">
            <img
              draggable="false"
              src="/assets/img/testi2.jpg"
              className="center-block"
              alt=""
            />
          </div>
          <div className="team-info">
            <h3 className="w-text">Ella James</h3>
            <p className="g-text">
              {' '}
              I was able to withdraw my fund within 5 days of their trading. Am
              so happy to be in this platform. Thanks to their account manager
              and team members.
            </p>
          </div>
        </div>

        <div className="single-team-member fadeInUp" data-wow-delay="0.4s">
          <div className="team-member-thumb">
            <img
              draggable="false"
              src="/assets/img/testi.jpg"
              className="center-block"
              alt=""
            />
          </div>
          <div className="team-info">
            <h3 className="w-text">Jude Kenneth</h3>

            <p className="g-text">
              {' '}
              Am so glad that i joined this wonderful life changing
              platform.They have truely changed my life with the little
              investment of $200 everything changed.
            </p>
          </div>
        </div>

        <div className="single-team-member fadeInUp" data-wow-delay="0.4s">
          <div className="team-member-thumb">
            <img
              draggable="false"
              src="/assets/img/testi1.jpg"
              className="center-block"
              alt=""
            />
          </div>
          <div className="team-info">
            <h3 className="w-text">James Elvis</h3>

            <p className="g-text">
              {' '}
              I was insulted by my boss, who sacked me from work today am rich.
              All thanks to Crytoguarantee management who has made this a
              success.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Testimonial
