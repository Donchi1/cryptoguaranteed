import React from "react";
import Slider from "react-slick";

const settingsCard = {
  infinite: true,
  autoplay: true,
  focusOnSelect: false,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  prevArrow: (
    <button type="button" className="slick-prev pull-left">
      <i className="icon-a-left-arrow\" aria-hidden="true"></i>
    </button>
  ),
  nextArrow: (
    <button type="button" className="slick-next pull-right">
      <i className="icon-b-right-arrow\" aria-hidden="true"></i>
    </button>
  ),
  dots: true,
  dotsClassName: "section-dots",

  responsive: [
    {
      breakpoint: 993,
      settings: {
        arrows: false,
        dots: false,
      },
    },
  ],
};

function BoostSavings() {
  return (
    <section className="card-section">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-end">
            <div className="col-lg-6">
              <div className="section-header">
                <h5 className="sub-title">
                  Boost your savings with the right credit card
                </h5>
                <h2 className="title">
                  Access Endless Possibilities with Bankio Card
                </h2>
                <p>
                  All your needs covered with a full range of credit and debit
                  cards.
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-end">
            <div className="col-lg-5">
              <div className="pb-120">
                <Slider {...settingsCard} className="card-carousel-index">
                  <div className="single">
                    <div className="thumb">
                      <img
                        src="/assets/imgs/card-img-1.png"
                        alt="image"
                      />
                    </div>
                    <div className="button-area text-center">
                      <a href="/auth/register" className="cmn-btn">
                        Get Started Now
                      </a>
                    </div>
                  </div>
                  <div className="single">
                    <div className="thumb">
                      <img
                        src="/assets/imgs/card-img-2.png"
                        alt="image"
                      />
                    </div>
                    <div className="button-area text-center">
                      <a href="/auth/register" className="cmn-btn">
                        Get Started Now
                      </a>
                    </div>
                  </div>
                  <div className="single">
                    <div className="thumb">
                      <img
                        src="/assets/imgs/card-img-1.png"
                        alt="image"
                      />
                    </div>
                    <div className="button-area text-center">
                      <a href="/auth/register" className="cmn-btn">
                        Get Started Now
                      </a>
                    </div>
                  </div>
                  <div className="single">
                    <div className="thumb">
                      <img
                        src="/assets/imgs/card-img-2.png"
                        alt="image"
                      />
                    </div>
                    <div className="button-area text-center">
                      <a href="/auth/register" className="cmn-btn">
                        Get Started Now
                      </a>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="credit-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#credit"
                    type="button"
                    role="tab"
                    aria-controls="credit"
                    aria-selected="true"
                  >
                    Credit Card
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="debit-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#debit"
                    type="button"
                    role="tab"
                    aria-controls="debit"
                    aria-selected="false"
                  >
                    Debit Card
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="credit"
                  role="tabpanel"
                  aria-labelledby="credit-tab"
                >
                  <div className="row cus-mar">
                    <div className="col-md-6">
                      <div className="single-box text-center">
                        <div className="thumb">
                          <img
                            src="/assets/imgs/tab-card-1.png"
                            alt="icon"
                            className="active"
                          />
                          <img
                            src="/assets/imgs/tab-card-11.png"
                            alt="icon"
                            className="alt"
                          />
                        </div>
                        <a href="#">
                          <h5>Secured Cards</h5>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-box text-center">
                        <div className="thumb">
                          <img
                            src="/assets/imgs/tab-card-2.png"
                            alt="icon"
                            className="active"
                          />
                          <img
                            src="/assets/imgs/tab-card-22.png"
                            alt="icon"
                            className="alt"
                          />
                        </div>
                        <a href="#">
                          <h5>Balance Transfer</h5>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-box text-center">
                        <div className="thumb">
                          <img
                            src="/assets/imgs/tab-card-3.png"
                            alt="icon"
                            className="active"
                          />
                          <img
                            src="/assets/imgs/tab-card-33.png"
                            alt="icon"
                            className="alt"
                          />
                        </div>
                        <a href="#">
                          <h5>Travel</h5>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-box text-center">
                        <div className="thumb">
                          <img
                            src="/assets/imgs/tab-card-4.png"
                            alt="icon"
                            className="active"
                          />
                          <img
                            src="/assets/imgs/tab-card-44.png"
                            alt="icon"
                            className="alt"
                          />
                        </div>
                        <a href="#">
                          <h5>Cashback</h5>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="debit"
                  role="tabpanel"
                  aria-labelledby="debit-tab"
                >
                  <div className="row cus-mar">
                    <div className="col-md-6">
                      <div className="single-box text-center">
                        <div className="thumb">
                          <img
                            src="/assets/imgs/tab-card-1.png"
                            alt="icon"
                            className="active"
                          />
                          <img
                            src="/assets/imgs/tab-card-11.png"
                            alt="icon"
                            className="alt"
                          />
                        </div>
                        <a href="#">
                          <h5>Secured Cards</h5>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-box text-center">
                        <div className="thumb">
                          <img
                            src="/assets/imgs/tab-card-2.png"
                            alt="icon"
                            className="active"
                          />
                          <img
                            src="/assets/imgs/tab-card-22.png"
                            alt="icon"
                            className="alt"
                          />
                        </div>
                        <a href="#">
                          <h5>Balance Transfer</h5>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-box text-center">
                        <div className="thumb">
                          <img
                            src="/assets/imgs/tab-card-3.png"
                            alt="icon"
                            className="active"
                          />
                          <img
                            src="/assets/imgs/tab-card-33.png"
                            alt="icon"
                            className="alt"
                          />
                        </div>
                        <a href="#">
                          <h5>Travel</h5>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-box text-center">
                        <div className="thumb">
                          <img
                            src="/assets/imgs/tab-card-4.png"
                            alt="icon"
                            className="active"
                          />
                          <img
                            src="/assets/imgs/tab-card-44.png"
                            alt="icon"
                            className="alt"
                          />
                        </div>
                        <a href="#">
                          <h5>Cashback</h5>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BoostSavings;
