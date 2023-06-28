"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useGetCurrentUser } from './hooks/GetCurrentUser'
import Preloader from './Preloader'


function Protected({children}:{children: React.ReactNode}) {
    const router = useRouter()
  
    
    const [user, loading, error] = useGetCurrentUser()
   
     useEffect(() => {
        if(!loading){
            if(!user){
             
             router.push("/auth/login")
            }
           

        }
        
     }, [router, loading, user])

     if(loading && !user){
         return  <Preloader />
      
     }
   
    return children
}

export default Protected
