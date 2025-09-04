"use client"

import React from 'react'
// import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoTopButton from '../components/GoTopButton'
import AboutBanner from '../components/about/AboutBanner'
// import AboutArea from '../components/about/AboutArea'
import AboutArea from '../components/home/AboutArea'
import ChooseArea from '../components/home/ChooseArea'
// import SkillArea from '../components/about/SkillArea'
import TestimonialsArea from '../components/about/TestimonialsArea'

import TalkArea from '../components/home/TalkArea'
// import Navbar3 from '../components/Navbar3'
import Navbar2 from '../components/Navbar2'

const page = () => {
  return (
    <div>
      <Navbar2 />
      {/* <Navbar /> */}
      <AboutBanner />
      <AboutArea />
      <ChooseArea />
     
      {/* <SkillArea /> */}
      {/* <TestimonialsArea /> */}
      <TalkArea />




      <Footer />
      <GoTopButton />
    </div>
  )
}

export default page
