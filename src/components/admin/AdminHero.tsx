"use client"
import React from 'react'
import {useRouter, usePathname} from "next/navigation"

function AdminHero({title}: {title: string}) {
    const router = useRouter()
    const pathname = usePathname()
  return (
    <div className={`h-2/4 mb-4 mt-10 ${pathname === "/user/profile" && "mx-2"}`} >
      <div className='flex justify-between items-center '>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <div>
            <button className='hover:opacity-70 text-[#7450fe] ' onClick={() => router.back()}>Go Back</button>
           {" "} {"/"} {" "}<span className="text-white">{title}</span>
        </div>
      </div>
    </div>
  )
}

export default AdminHero