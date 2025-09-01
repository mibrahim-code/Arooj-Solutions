"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";


const MainBanner = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 700,  // Set global duration for animations
      once: true,     // Ensure animations happen only once
    });
    
    // Reinitialize AOS on page navigation
    AOS.refresh();
  }, []);  // Run only on component mount

  return (
    <>
      {/* Start Main Banner Area */}
      <div className="main-banner-area">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="main-banner-content">
              <h1
                data-aos="fade-right"
                data-aos-delay={70}
                data-aos-duration={700}
                style={{ fontSize: "54px" }}
              >
                {/* أفضل شركة تقنية تتمحور حول البرمجة والتسويق */}
                اختيارك الأفضل لحلول البرمجة والتسويق
           
              </h1>
              <p
                data-aos="fade-right"
                data-aos-delay="70"
                data-aos-duration="700"
                style={{ fontSize: "24px" }}
              >
                نقوم بتطوير وتنفيذ ودعم حلول البرمجيات الهامة للأعمال.
              </p>
              <div
                className="banner-btn"
                data-aos="fade-right"
                data-aos-delay={70}
                data-aos-duration={700}
              >
                <Link href="/contact" className="default-btn">
                  ابدأ الآن
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="main-banner-image">
              <ExportedImage
                width={633}
                height={757}
                src="images/bannerT.png"
                alt="image"
                data-aos="fade-down"
                data-aos-delay={70}
                data-aos-duration={700}
              />
              <div className="banner-circle">
                <ExportedImage
                  width={533}
                  height={533}
                  src="images/banner-circle.png"
                  alt="image"
                  data-aos="fade-down"
                  data-aos-delay={100}
                  data-aos-duration={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-shape-1">
        <ExportedImage
          width={410}
          height={410}
          src="images/banner-shape-1.png"
          alt="image"
        />
      </div>
      <div className="banner-shape-2">
        <ExportedImage
          width={165}
          height={165}
          src="images/banner-shape-2.png"
          alt="image"
        />
      </div>
      <div className="banner-dot-shape-1">
        <ExportedImage
          width={17}
          height={17}
          src="images/dot-1.png"
          alt="image"
        />
      </div>
      <div className="banner-dot-shape-2">
        <ExportedImage
          width={13}
          height={13}
          src="images/dot-2.png"
          alt="image"
        />
      </div>
      <div className="banner-dot-shape-3">
        <ExportedImage
          width={10}
          height={10}
          src="images/dot-3.png"
          alt="image"
        />
      </div>
      <div className="banner-dot-shape-4">
        <ExportedImage
          width={4}
          height={4}
          src="images/dot-4.png"
          alt="image"
        />
      </div>
      <div className="banner-dot-shape-5">
        <ExportedImage
          width={6}
          height={6}
          src="images/dot-5.png"
          alt="image"
        />
      </div>
      <div className="lines">
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
    </div>
      {/* End Main Banner Area */}
    </>
  );
};

export default MainBanner;
