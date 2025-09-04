"use client"

import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoTopButton from '../components/GoTopButton'
import ContactBanner from '../components/contact/ContactBanner'
import OverviewArea from '../components/home/OverviewArea'
import TalkArea from '../components/home/TalkArea'
import Navbar2 from '../components/Navbar2'
import Navbar5 from '../components/Navbar5'

const page = () => {
  return (
    <div>
      <Navbar5 />
      {/* <Navbar /> */}

    <ContactBanner />
    <OverviewArea />
    <TalkArea />

  {/* Start Map Area */}
<div >
  <div className="map-location">
    <iframe
      src="https://www.google.com/maps?q=24.6218236,46.6246636&z=12&output=embed"
      width="100%"
      height={450}
     
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
</div>


  {/* End Map Area */}

      <Footer />
      <GoTopButton />
    </div>
  )
}

export default page
