"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

const MainBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="main-banner-area">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="main-banner-content">
              <h1
                data-aos="fade-right"
                data-aos-delay={70}
                data-aos-duration={700}
                style={{ fontSize: "clamp(32px, 5vw, 54px)" }}
              >
                Comprehensive Cybersecurity & AI Solutions for Saudi Businesses
              </h1>
              <p
                data-aos="fade-right"
                data-aos-delay="70"
                data-aos-duration={700}
                style={{ fontSize: "clamp(18px, 2.5vw, 24px)" }}
              >
                Protecting your digital assets and driving innovation in alignment with Saudi Vision 2030
              </p>
              <div
                className="banner-btn"
                data-aos="fade-right"
                data-aos-delay={70}
                data-aos-duration={700}
              >
                <Link href="#" className="default-btn">
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="main-banner-image">
              <ExportedImage
                width={633}
                height={757}
                src="images/bannerT.png"
                alt="Cybersecurity and AI Solutions"
                data-aos="fade-down"
                data-aos-delay={70}
                data-aos-duration={700}
                style={{ width: '100%', height: 'auto', maxWidth: '633px' }}
              />
              <div className="banner-circle">
                <ExportedImage
                  width={533}
                  height={533}
                  src="images/banner-circle.png"
                  alt="Circle Background"
                  data-aos="fade-down"
                  data-aos-delay={100}
                  data-aos-duration={1000}
                  style={{ width: '100%', height: 'auto', maxWidth: '533px' }}
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
          alt="Background Shape"
          style={{ width: '100%', height: 'auto', maxWidth: '410px' }}
        />
      </div>
      <div className="banner-shape-2">
        <ExportedImage
          width={165}
          height={165}
          src="images/banner-shape-2.png"
          alt="Background Shape"
          style={{ width: '100%', height: 'auto', maxWidth: '165px' }}
        />
      </div>
      <div className="banner-dot-shape-1">
        <ExportedImage
          width={17}
          height={17}
          src="images/dot-1.png"
          alt="Decoration Dot"
        />
      </div>
      <div className="banner-dot-shape-2">
        <ExportedImage
          width={13}
          height={13}
          src="images/dot-2.png"
          alt="Decoration Dot"
        />
      </div>
      <div className="banner-dot-shape-3">
        <ExportedImage
          width={10}
          height={10}
          src="images/dot-3.png"
          alt="Decoration Dot"
        />
      </div>
      <div className="banner-dot-shape-4">
        <ExportedImage
          width={4}
          height={4}
          src="images/dot-4.png"
          alt="Decoration Dot"
        />
      </div>
      <div className="banner-dot-shape-5">
        <ExportedImage
          width={6}
          height={6}
          src="images/dot-5.png"
          alt="Decoration Dot"
        />
      </div>
      <div className="lines">
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
    </div>
  );
};

export default MainBanner;