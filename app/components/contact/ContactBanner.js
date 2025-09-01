"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import Link from 'next/link';

const ContactBanner = () => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  return (
    <div className="page-banner-area bg-4 jarallax" data-jarallax='{"speed": 0.3}' style={{position:"relative"}}>
      <div style={{
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: 'rgba(0, 0, 0, 0.5)',
        transition: 'opacity 0.5s ease',
        zIndex: 0,
      }} />
      <div className="container">
        <div
          className="page-banner-content"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-once="true"
        >
          <h2>تواصل</h2>
          <ul>
            <li>
              <Link href="/" passHref>
              الصفحة الرئيسية
              </Link>
            </li>
            <li>تواصل</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
