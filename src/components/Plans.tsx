"use client"
import React from 'react'
import Link from "next/link"
  import  {usePathname} from 'next/navigation'

function Plans({ head, initialw, initiald, bonus }: {head: string, initiald: string, initialw: string, bonus:string}) {
  const pathname  = usePathname()
  const planLink = () => {
    if (pathname === '/pricing') {
      return '/login'
    } else if (pathname === '/user/plans') {
      return '/user/payments'
    } else {
      return '/pricing'
    }
  }
  return (
    <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2  w-full ">
      <div className="pricing-item ">
        <h4>{head}</h4>
        <label>
          <strong>{bonus} Bonus</strong>
        </label>
        <br />
        <span>Initial Deposite</span>
        <h3>
          <strong className="xzc-1-month">{initiald}</strong>
        </h3>
        <span>Initial Withdrawal</span>
        <div className="pricing">{initialw}</div>
        <Link className="more-btn mt-4" href={planLink()}>
          Get Plan
        </Link>
      </div>
    </div>
  )
}

export default Plans
