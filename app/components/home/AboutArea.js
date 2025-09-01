"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

const AboutArea = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="about-area pb-75">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-wrap-image" data-tilt="">
              <ExportedImage
                src="/images/aboutT1.png"
                alt="About Us"
                unoptimized={true}
                intrinsic="true"
                width={546}
                height={373}
                data-aos="fade-down"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div
              className="about-wrap-content"
              data-aos="fade-up"
              data-aos-delay="80"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="about-bg-text">About Us</div>
              <span>Who We Are</span>
              <h3>Your Trusted Partner for Comprehensive Cybersecurity & AI Solutions</h3>
              <p>
                Arooj Solutions provides end-to-end cybersecurity and artificial intelligence services to protect your digital assets, ensure compliance with Saudi regulations, and drive innovation in line with Vision 2030.
              </p>
            </div>
          </div>
        </div>

        <div className="about-inner-box">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="single-about-card"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <h3>Our Vision</h3>
                <p>
                  To be Saudi Arabia's leading cybersecurity and AI solutions provider, delivering innovative technologies that protect businesses and drive digital transformation.
                </p>
                <div className="about-btn">
                  <Link href="/about" className="default-btn">
                    Learn More About Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-about-card"
                data-aos="fade-down"
                data-aos-delay="70"
                data-aos-duration="700"
                data-aos-once="true"
              >
                <h3>Our Mission</h3>
                <p>
                  To empower Saudi businesses with comprehensive cybersecurity protection and AI-driven solutions that ensure compliance, enhance efficiency, and future-proof operations.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-about-card"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="card-image" data-tilt="">
                  <ExportedImage
                    src="/images/aboutT2.png"
                    alt="About Image"
                    unoptimized={true}
                    intrinsic="true"
                    width={356}
                    height={192}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-circle-shape">
        <ExportedImage
          src="/images/about-circle.png"
          alt="Circle Shape"
          unoptimized={true}
          intrinsic="true"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
};

export default AboutArea;