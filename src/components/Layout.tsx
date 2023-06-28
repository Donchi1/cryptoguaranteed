import React from 'react'

function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex-[3]   ">
     {children}
    </div> 
  )
}

export default Layout