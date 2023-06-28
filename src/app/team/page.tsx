import React from 'react'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Teams from '@/components/Teams'
import NavBar from '@/components/NavBar'

export default function MyTeams() {
  return (
    <>
     <NavBar/>
      <Hero pageName="Our Team" />
      <Teams />
      <Footer />
    </>
  )
}
