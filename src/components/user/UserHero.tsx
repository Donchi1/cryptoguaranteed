"use client"
import Link from 'next/link'
import React from 'react'
import {useRouter} from "next/navigation"

function UserHero({title }: {title: string}) {
    const router = useRouter()
  return (
    <div className="h-2/4  mt-10 " >
      <div className='flex justify-between items-center '>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <div className='text-white'>
            <button className='hover:opacity-70 text-[#7450fe]' onClick={() => router.back()}>Go Back</button>
           {" "} {"/"} {" "}<span>{title}</span>
        </div>
      </div>
    </div>
  )
}

export default UserHero