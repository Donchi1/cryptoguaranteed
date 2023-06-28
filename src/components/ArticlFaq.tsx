import React from 'react'

function ArticlFaq() {
  return (
    <>
    {/* <section className="latest-articles">
    <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-6">
                    <div className="section-header text-center">
                        <h5 className="sub-title">Latest insights from Bankio</h5>
                        <h2 className="title">Our Latest Articles</h2>
                        <p>Get more Latest News and Resources here ...</p>
                    </div>
                </div>
            </div>
            <div className="row cus-mar">
                <div className="col-lg-4 col-md-6">
                    <div className="blog-item">
                        <div className="thumb">
                            <img src="/assets/imgs/blog-1.png" alt="blog"/>
                        </div>
                        <div className="content">
                            <a href="#">
                                <h5>The future of fraud protection.</h5>
                            </a>
                            <div className="info">
                                <div className="item cus-bor d-flex align-items-center">
                                    <span className="icon d-flex align-items-center justify-content-center "><img
                                            src="/assets/imgs/user.png" alt="icon" /></span>
                                    <span>Post By Hans Murazik</span>
                                </div>
                                <div className="item d-flex align-items-center">
                                    <span className="icon d-flex align-items-center justify-content-center"><img
                                            src="/assets/imgs/calendar.png" alt="icon" /></span>
                                    <span>05 Feb 2022</span>
                                </div>
                            </div>
                            <p>Morbi eget venenatis lorem, id viverra massa. Etiam congue efficitur velit vel
                                pharetra.</p>
                            <div className="read">
                                <a href="#" className="btn-arrow">Read more<img
                                        src="/assets/imgs/arrow-right.png" alt="arrow" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="blog-item">
                        <div className="thumb">
                            <img src="/assets/imgs/blog-2.png" alt="blog"/>
                        </div>
                        <div className="content">
                            <a href="#">
                                <h5>Digital Banking Services</h5>
                            </a>
                            <div className="info">
                                <div className="item cus-bor d-flex align-items-center">
                                    <span className="icon d-flex align-items-center justify-content-center "><img
                                            src="/assets/imgs/user.png" alt="icon" /></span>
                                    <span>Post By Hans Murazik</span>
                                </div>
                                <div className="item d-flex align-items-center">
                                    <span className="icon d-flex align-items-center justify-content-center"><img
                                            src="/assets/imgs/calendar.png" alt="icon" /></span>
                                    <span>05 Feb 2022</span>
                                </div>
                            </div>
                            <p>Morbi eget venenatis lorem, id viverra massa. Etiam congue efficitur velit vel
                                pharetra.</p>
                            <div className="read">
                                <a href="#" className="btn-arrow">Read more<img
                                        src="/assets/imgs/arrow-right.png" alt="arrow" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="blog-item">
                        <div className="thumb">
                            <img src="/assets/imgs/blog-3.png" alt="blog"/>
                        </div>
                        <div className="content">
                            <a href="#">
                                <h5>Mobile Banking at a Glance</h5>
                            </a>
                            <div className="info">
                                <div className="item cus-bor d-flex align-items-center">
                                    <span className="icon d-flex align-items-center justify-content-center "><img
                                            src="/assets/imgs/user.png" alt="icon" /></span>
                                    <span>Post By Hans Murazik</span>
                                </div>
                                <div className="item d-flex align-items-center">
                                    <span className="icon d-flex align-items-center justify-content-center"><img
                                            src="/assets/imgs/calendar.png" alt="icon" /></span>
                                    <span>05 June 2022</span>
                                </div>
                            </div>
                            <p>Our mobile banking was </p>
                            <div className="read">
                                <a href="#" className="btn-arrow">Read more<img
                                        src="/assets/imgs/arrow-right.png" alt="arrow" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> */}

<section className="faqs-section">
    <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-6">
                    <div className="section-header text-center">
                        <h5 className="sub-title">If you have question,we have answer</h5>
                        <h2 className="title">Frequently asked questions</h2>
                        <p>Get answers to all questions you have and boost your knowledge so you can save, invest
                            and spend smarter in Global Finance Point</p>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-xl-8">
                    <div className="faq-box wow fadeInUp">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                        aria-expanded="false" aria-controls="collapseTwo">
                                        How do I locate the nearest branch or ATM?
                                    </button>
                                </h5>
                                <div id="collapseTwo" className="accordion-collapse collapse"
                                    aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>You can google our nearest atm or contact our support team for more informations.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                        aria-expanded="false" aria-controls="collapseThree">
                                        What do I do if I lose my card or it gets stolen?
                                    </button>
                                </h5>
                                <div id="collapseThree" className="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>If you lost your card, you should report to us immidiately so that we can block your card to avoid fund extortion.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                        aria-expanded="false" aria-controls="collapseFour">
                                        What is your customer service number?
                                    </button>
                                </h5>
                                <div id="collapseFour" className="accordion-collapse collapse"
                                    aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>You can find our customer service number on our contact page or you can send us a mail in support@globalfinancepoint.info</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                        aria-expanded="false" aria-controls="collapseFive">
                                        How do I save money in Global Finance Point?
                                    </button>
                                </h5>
                                <div id="collapseFive" className="accordion-collapse collapse"
                                    aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>You can save your money by registering in our platform, after which you can fund your account and start your savings instantly</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="headingsix">
                                    <button className="accordion-button collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapsesix"
                                        aria-expanded="false" aria-controls="collapsesix">
                                        What is required to use Digital Banking?
                                    </button>
                                </h5>
                                <div id="collapsesix" className="accordion-collapse collapse"
                                    aria-labelledby="headingsix" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>The only requirement for digital banking is your correct information and your money to fund your account.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="headingsaven">
                                    <button className="accordion-button collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapsesaven"
                                        aria-expanded="false" aria-controls="collapsesaven">
                                        Is digital banking secure?
                                    </button>
                                </h5>
                                <div id="collapsesaven" className="accordion-collapse collapse"
                                    aria-labelledby="headingsaven" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Not all digital banking platform are secured but Global Finance Point is a secured and legit platform.</p>
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
{/* FAQs In end */}

{/* Get Start In start */}
<section className="get-start wow fadeInUp">
    <div className="overlay">
        <div className="container">
            <div className="col-12">
                <div className="get-content">
                    <div className="section-text">
                        <h3 className="title">Ready to get started?</h3>
                        <p>It only takes a few minutes to register your FREE Global Finance Point account.</p>
                    </div>
                    <a href="/auth/register" className="cmn-btn">Open an Account</a>
                    <img src="/assets/imgs/get-start.png" alt="images" />
                </div>
            </div>
        </div>
    </div>
</section>
</>
  )
}

export default ArticlFaq