"use client"
import React from 'react'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Testimonial from '@/components/Testimonial'
import manager from '/assets/img/manager.jpg'
import Teams from '@/components/Teams'
import Link  from "next/link"
import NavBar from '@/components/NavBar'
import Features from '@/components/Features'


export default function About() {
  return (
    <>
    <NavBar />
      <Hero pageName="About-Us" />
      <Features />
      <Teams />
      <Testimonial />
      <Footer />
    </>
  )
}
