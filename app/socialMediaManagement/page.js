
"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoTopButton from '../components/GoTopButton'
import PageBanner from '../components/socialMediaManagement/PageBanner'
import PricingArea from '../components/socialMediaManagement/PricingArea'
import TalkArea from '../components/home/TalkArea'
import OverviewArea from '../components/home/OverviewArea'
import Navbar3 from '../components/Navbar3'

const page = () => {
  return (
    <div>
      <Navbar3 />
      {/* <Navbar /> */}
      <PageBanner />
      <PricingArea />
      <TalkArea />
      <OverviewArea />
      

      <Footer />
      <GoTopButton />
    </div>
  )
}

export default page
