"use client"
import React, { useState } from 'react'
import  Link  from 'next/link'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'


const NavBar = () => {
  const authState = useSelector((state: RootState) => state.auth)
  const [openSidebar, setOpenSidebar] = useState(false)
  return (
    <>
      <nav className="relative px-4 py-4 flex justify-between items-center">
        <Link
          className="text-3xl flex font-bold leading-none items-center"
          href="/"
        >
          <img draggable="false" src="/assets/img/logo.png" alt="logo" />
          <p>Cryptoguarantee</p>
        </Link>
        <div className="lg:hidden">
          <button
            onClick={() => setOpenSidebar(true)}
            className="navbar-burge flex items-center text-blue-600 p-3"
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className=" hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <Link className="text-sm text-white font-bold" href="/">
              Home
            </Link>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              ></path>
            </svg>
          </li>
          <li>
            <Link className="text-sm text-white font-bold" href="/about">
              About Us
            </Link>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              ></path>
            </svg>
          </li>
          <li>
            <Link className="text-sm text-white font-bold" href="/pricing">
              Pricing
            </Link>
          </li>

          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              ></path>
            </svg>
          </li>
          <li>
            <Link className="text-sm text-white font-bold" href="/team">
              Team
            </Link>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              ></path>
            </svg>
          </li>
          <li>
            <Link className="text-sm text-white font-bold" href="/contact">
              Contact
            </Link>
          </li>
        </ul>
        {authState ? (
          <Link
            className="hidden lg:inline-block hover:bg-gradient-to-l  bg-gradient-to-r from-[#21d397] to-[#7450fe] border border-white rounded-full py-[0.7rem] text-white uppercase  px-4 text-xs font-medium  transition-all ease-linear duration-700"
            href="/user"
          >
            Dashboard
          </Link>
        ) : (
          <>
            <Link
              className="hidden lg:inline-block lg:ml-auto lg:mr-3 hover:bg-gradient-to-l  bg-gradient-to-r from-[#21d397] to-[#7450fe] border border-white rounded-full py-[0.7rem] text-white uppercase  px-4 text-xs font-medium  transition-all ease-linear duration-700"
              href=" /auth/login"
            >
              Sign In
            </Link>
            <Link
              className="hidden lg:inline-block hover:bg-gradient-to-l  bg-gradient-to-r from-[#21d397] to-[#7450fe] border border-white rounded-full py-[0.7rem] text-white uppercase  px-4 text-xs font-medium   transition-all  ease-linear duration-700"
              href="/auth/register"
            >
              Sign up
            </Link>
          </>
        )}
      </nav>
      <div
        className={`navbar-men relative z-50 ${
          openSidebar ? 'block' : 'hidden'
        }  `}
      >
        <div
          className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
          onClick={() => setOpenSidebar(false)}
        ></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-[#030239] border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <Link
              className="mr-auto text-3xl flex items-center font-bold leading-none"
              href="/"
            >
              <img draggable="false" src="/assets/img/logo.png" alt="logo" />
              <p>Cryptoguarantee</p>
            </Link>
            <button
              className="navbar-clos cursor-pointer hover:border-red-400 rounded p-2 border-none hover:border-solid border-2"
              onClick={() => setOpenSidebar(false)}
            >
              <svg
                className="h-6 w-6  text-gray-400 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <Link
                  className="block px-4 py-3 border border-white text-sm font-semibold text-white hover:bg-gradient-to-r hover:from-[#21d397] hover:to-[#7450fe] rounded-full"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block px-4 py-3 border border-white text-sm font-semibold text-white hover:bg-gradient-to-r hover:from-[#21d397] hover:to-[#7450fe] rounded-full"
                  href="/about"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="active:text-blue-500 block px-4 py-3  text-sm font-semibold text-white hover:bg-gradient-to-r hover:from-[#21d397] hover:to-[#7450fe] rounded-full"
                  href="/pricing"
                >
                  Pricing
                </Link>
              </li>

              <li className="mb-1">
                <Link
                  className="block px-4 py-3 border border-white text-sm font-semibold text-white hover:bg-gradient-to-r hover:from-[#21d397] hover:to-[#7450fe] rounded-full"
                  href="/team"
                >
                  Team
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block px-4 py-3 border border-white text-sm font-semibold text-white hover:bg-gradient-to-r hover:from-[#21d397] hover:to-[#7450fe] rounded-full"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              {authState ? (
                <Link className=" more-btn w-full mt-4" href="/user">
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    className=" more-btn w-full mt-4"
                    href="/auth/login"
                  >
                    Sign in
                  </Link>
                  <Link className=" more-btn w-full mt-4" href="/auth/register">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © {new Date().getFullYear()}</span>
            </p>
          </div>
        </nav>
      </div>
      {/* ##### Header Area End ##### */}
    </>
  )
}

export default NavBar
