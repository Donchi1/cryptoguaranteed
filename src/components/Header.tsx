"use client"

import React from 'react'
import {usePathname} from "next/navigation"

function Header() {

const pathname = usePathname()


  return (
    <header className="header-section">
    <div className="overlay">
      <div className="container">
        <div className="row d-flex header-area">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="index.html">
              <img src="/assets/imgs/logo2.png" className="logo" alt="logo" />
            </a>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbar-content">
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbar-content">
              <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className={`nav-link ${pathname === "/" && "active"}`} aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${pathname === "/about-us" && "active"}`} aria-current="page" href="/about-us">About Us</a>
                </li>
                <li className="nav-item dropdown main-navbar">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                    data-bs-auto-close="outside">Product</a>
                  <ul className="dropdown-menu main-menu shadow">
                    <li className="dropend sub-navbar">
                        
                          <li><a className={`nav-link ${pathname === "/account" && "active"}`} href="/account">Account</a></li>
                          <li><a className={`nav-link ${pathname === "/saving" && "active"}`} href="/saving">Saving</a></li>
                        
                    </li>
                    {/* <li><a className="nav-link" href="product.html">Product</a></li>
                    <li className="dropend sub-navbar">
                      <a href="#" className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown"
                        data-bs-auto-close="outside">Loan</a>
                      <ul className="dropdown-menu sub-menu shadow">
                        <li><a className="nav-link" href="business-loan.html">Business Loans</a></li>
                        <li><a className="nav-link" href="educations-loan.html">Educations Loans</a></li>
                        <li><a className="nav-link" href="home-loan.html">Home Loans</a></li>
                        <li><a className="nav-link" href="car-loan.html">Car Loans</a></li>
                        <li><a className="nav-link" href="personal-loan.html">Personal Loans</a></li>
                      </ul>
                    </li>
                    <li><a className="nav-link" href="card.html">Card</a></li> */}
                  </ul>
                </li>
                {/* <li className="nav-item dropdown main-navbar">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                    data-bs-auto-close="outside">Pages</a>
                  <ul className="dropdown-menu main-menu shadow">
                    <li><a className="nav-link" href="affiliate.html">Affiliate</a></li>
                    <li className="dropend sub-navbar">
                      <a href="#" className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown"
                        data-bs-auto-close="outside">Blog</a>
                      <ul className="dropdown-menu sub-menu shadow">
                        <li><a className="nav-link" href="blog-list.html">Blog List</a></li>
                        <li><a className="nav-link" href="blog-grid.html">Blog Grid</a></li>
                        <li><a className="nav-link" href="blog-single.html">Blog Single</a></li>
                      </ul>
                    </li>
                    <li><a className="nav-link" href="remittance.html">Remittance</a></li>
                    <li><a className="nav-link" href="career-single.html">Career Single</a></li>
                    <li><a className="nav-link" href="faqs.html">Faqs</a></li>
                    <li><a className="nav-link" href="login.html">Login</a></li>
                    <li><a className="nav-link" href="password-set.html">Password Set</a></li>
                    <li><a className="nav-link" href="varify-number.html">Varify Number</a></li>
                    <li><a className="nav-link" href="otp.html">OTP</a></li>
                    
                    <li><a className="nav-link" href="terms-conditions.html">Terms Conditions</a></li>
                    <li><a className="nav-link" href="privacy-policy.html">Privacy Policy</a></li>
                    
                  </ul>
                </li> */}
                <li className="nav-item">
                  <a className={`nav-link ${pathname === "/contact" && "active"}`} href="/contact">Contact Us</a>
                </li>
              </ul>
              <div className="right-area header-action d-flex align-items-center">
                <a href="/auth/register" className="cmn-btn">Open Account</a>
            </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
</header>
  )
}

export default Header