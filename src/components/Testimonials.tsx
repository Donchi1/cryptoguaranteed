import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  return (
    <section className="testimonials">
    <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-6">
                    <div className="section-header text-center">
                        <h5 className="sub-title">Testimonials</h5>
                        <h2 className="title">Do not take our word for it, take theirs</h2>
                        <p>Take a look at our past customers success stories. Our goal is to help you grow</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <Slider arrows={false} autoplay={true} className="testimonials-carouse">
                    <div className="slide-item">
                        <div className="single-slide">
                            <div className="thumb">
                                <img src="/assets/imgs/testomonial.png" alt="image" className="max-un" />
                            </div>
                            <div className="content">
                                <div className="top-content">
                                    <img src="/assets/imgs/icon/quote.png" alt="quote"/>
                                    <h5>“I love Global Finance Point, they are the best”</h5>
                                    <p className="xxlr">
                                        “ Its been 2 years since I found Global Finance Point, and its such a relief as a small
                                        business
                                        owner to not worry about unnecessary fees. I lost my credit card once, and
                                        the
                                        service was so prompt that I was back to work the next day!
                                    </p>
                                </div>
                                <div className="bottom-content">
                                    <h5 className="name">Anna Kings</h5>
                                    <span className="country"> Germany</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="single-slide">
                            <div className="thumb">
                                <img src="/assets/imgs/testomonial.png" alt="image" className="max-un" />
                            </div>
                            <div className="content">
                                <div className="top-content">
                                    <img src="/assets/imgs/icon/quote.png" alt="quote" />
                                    <h5>“I love Global Finance Point, they are reliabel”</h5>
                                    <p className="xxlr">
                                        “ it was not easy for me to start at first. But i put myself together and started saving in this platform. Today i gladly boast of the boost of my funds.
                                    </p>
                                </div>
                                <div className="bottom-content">
                                    <h5 className="name">Sophie Moore</h5>
                                    <span className="country"> United Kingdom</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="single-slide">
                            <div className="thumb">
                                <img src="/assets/imgs/testomonial.png" alt="image" className="max-un" />
                            </div>
                            <div className="content">
                                <div className="top-content">
                                    <img src="/assets/imgs/icon/quote.png" alt="quote"/>
                                    <h5>“I love Global Finance Point, they are trusted”</h5>
                                    <p className="xxlr">
                                        “ Finding a legit platform was my problem for about three years after i had issue with my bank. 
                                        Now i have have been saving my money with ease in globalFP with trust and ease.
                                    </p>
                                </div>
                                <div className="bottom-content">
                                    <h5 className="name">Emily Judge</h5>
                                    <span className="country">South Africa</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="single-slide">
                            <div className="thumb">
                                <img src="/assets/imgs/testomonial.png" alt="image" className="max-un" />
                            </div>
                            <div className="content">
                                <div className="top-content">
                                    <img src="/assets/imgs/icon/quote.png" alt="quote"/>
                                    <h5>“I love Global Finance Point, they are the Legit”</h5>
                                    <p className="xxlr">
                                        “ I have tried so many platforms which as never fulfilled there promises. GlobalFP does what they say and says what they do.
                                        I have saving in this platform for about two years without any issues.
                                    </p>
                                </div>
                                <div className="bottom-content">
                                    <h5 className="name">Olivia Owen</h5>
                                    <span className="country"> United States</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    </div>
</section>
  )
}

export default Testimonials