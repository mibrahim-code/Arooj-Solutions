"use client"
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PageBanner = () => {
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
        <div className="page-banner-content" data-aos="fade-right" data-aos-delay="50">
          <h2>خدمات تحسين محركات البحث </h2>
          <ul>
            <li>
              <Link href="/" passHref>
              الرئيسية
              </Link>
            </li>
            <li>خدمات تحسين محركات البحث </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
