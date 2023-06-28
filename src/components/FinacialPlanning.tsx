import Link from 'next/link'
import React from 'react'

function FinacialPlanning() {
  return (
    <>
  

<section className="financial-planning">
    <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
            <div className="row d-flex justify-content-center">
                <div className="col-xl-6 col-lg-5">
                    <div className="section-text">
                        <h5 className="sub-title">Financial Planning</h5>
                        <h2 className="title">Lets plan your finances the right way</h2>
                        <p>Lending that doesnt weigh you down.We know how hard is it to start something new, that’s
                            why we have the perfect plan for you.</p>
                    </div>
                    <a href="/register" className="cmn-btn">Apply for a loan</a>
                </div>
                <div className="col-xl-6 col-lg-7">
                    <div className="row cus-mar">
                        <div className="col-md-6 col-sm-6">
                            <div className="plan-box">
                                <div className="thumb">
                                    <img src="/assets/imgs/loan-1.png" alt="icon" className="active" />
                                    <img src="/assets/imgs/loan-11.png" alt="icon"  className="alt" />
                                </div>
                                <a href="#">
                                    <h5>Home Loans</h5>
                                </a>
                                <ul className="list">
                                    <li className="list-item d-flex align-items-center">
                                        <span className="check d-flex align-items-center justify-content-center">
                                            <img src="/assets/imgs/check.png" alt="icon" />
                                        </span>
                                        <span>Lowest interest rates</span>
                                    </li>
                                    <li className="list-item d-flex align-items-center">
                                        <span className="check d-flex align-items-center justify-content-center">
                                            <img src="/assets/imgs/check.png" alt="icon" />
                                        </span>
                                        <span>Fast Loan Processing</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="plan-box">
                                <div className="thumb">
                                    <img src="/assets/imgs/loan-2.png" alt="icon"  className="active" />
                                    <img src="/assets/imgs/loan-22.png" alt="icon"  className="alt" />
                                </div>
                                <a href="car-loan.html">
                                    <h5>Car Loans</h5>
                                </a>
                                <ul className="list">
                                    <li className="list-item d-flex align-items-center">
                                        <span className="check d-flex align-items-center justify-content-center">
                                            <img src="/assets/imgs/check.png" alt="icon" />
                                        </span>
                                        <span>Competitive rates</span>
                                    </li>
                                    <li className="list-item d-flex align-items-center">
                                        <span className="check d-flex align-items-center justify-content-center">
                                            <img src="/assets/imgs/check.png" alt="icon" />
                                        </span>
                                        <span>Quick Easy</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="plan-box">
                                <div className="thumb">
                                    <img src="/assets/imgs/loan-3.png" alt="icon"  className="active" />
                                    <img src="/assets/imgs/loan-33.png" alt="icon" className="alt" />
                                </div>
                                <a href="#">
                                    <h5>Education Loans</h5>
                                </a>
                                <ul className="list">
                                    <li className="list-item d-flex align-items-center">
                                        <span className="check d-flex align-items-center justify-content-center">
                                            <img src="/assets/imgs/check.png" alt="icon" />
                                        </span>
                                        <span>Pay back conveniently</span>
                                    </li>
                                    <li className="list-item d-flex align-items-center">
                                        <span className="check d-flex align-items-center justify-content-center">
                                            <img src="/assets/imgs/check.png" alt="icon" />
                                        </span>
                                        <span>Fast Loan Processing</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="plan-box">
                                <div className="thumb">
                                    <img src="/assets/imgs/loan-4.png" alt="icon"  className="active" />
                                    <img src="/assets/imgs/loan-44.png" alt="icon"  className="alt" />
                                </div>
                                <a href="#">
                                    <h5>Business Loans</h5>
                                </a>
                                <ul className="list">
                                    <li className="list-item d-flex align-items-center">
                                        <span className="check d-flex align-items-center justify-content-center">
                                            <img src="/assets/imgs/check.png" alt="icon" />
                                        </span>
                                        <span>Easy Approvals</span>
                                    </li>
                                    <li className="list-item d-flex align-items-center">
                                        <span className="check d-flex align-items-center justify-content-center">
                                            <img src="/assets/imgs/check.png" alt="icon" />
                                        </span>
                                        <span>Full Assistance</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="personalized">
        <div className="overlay">
            <div className="container wow fadeInUp">
                <div className="row d-flex justify-content-between">
                    <div className="col-lg-6 col-xl-5 d-flex align-items-center justify-content-end">
                        <div className="img-area">
                            <img src="https://pixner.net/bankio/assets/images/personalized.png" alt="image" /> 
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-5 pt-120 pb-120">
                        <div className="section-text">
                            <h3 className="title">Need a Personalized Solution?</h3 >
                            <p>Get in touch with us, and we will help you to create the right one for your business or
                                personal needs.</p>
                        </div>
                        <Link href="/register" className="cmn-btn">Apply for a loan</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
  )
}

export default FinacialPlanning