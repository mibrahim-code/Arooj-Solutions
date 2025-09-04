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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.8021974760704!2d46.72132870000001!3d24.6993255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03d08e30124d%3A0x31f91ca80d602b4!2z2YXZg9in2KrYqCDZhdik2KvYq9ipINmIINmF2KzZh9iy2KkgU3VwZXIgT2ZmaWNlIEFzIFN1bGltYW5peWFo!5e0!3m2!1sen!2s!4v1756973877060!5m2!1sen!2s"
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
