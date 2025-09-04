"use client";
import React, { useEffect } from "react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const OverviewArea = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
    <div className="overview-area pt-100 pb-75">
      <div className="container">
        <div className="row justify-content-center">
          
          {/* Call Us */}
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div
              className="overview-card"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="500"
            >
              <h3>Call Us</h3>
              <span>
                <Link href="tel:+96654699691566">+966 54 699 691 566</Link>
              </span>
              <div className="overview-shape">
                <ExportedImage
                  src="/images/overview-shape.png"
                  alt="Phone Icon"
                  width={40}
                  height={40}
                  unoptimized={true}
                />
              </div>
            </div>
          </div>

          {/* Email Us */}
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div
              className="overview-card"
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="600"
            >
              <h3>Email Us</h3>
              <span>
                <Link href="mailto:info@arooj.sa">info@arooj.sa</Link>
              </span>
              <div className="overview-shape">
                <ExportedImage
                  src="/images/overview-shape.png"
                  alt="Email Icon"
                  width={40}
                  height={40}
                  unoptimized={true}
                />
              </div>
            </div>
          </div>

          {/* Visit Us */}
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div
              className="overview-card"
              data-aos="fade-up"
              data-aos-delay="70"
              data-aos-duration="700"
            >
              <h3>Visit Us</h3>
              <span>Arooj Solutions,  2nd Floor, Super Office, As Sulimaniyah, Riyadh 13334</span>
              <div className="overview-shape">
                <ExportedImage
                  src="/images/overview-shape.png"
                  alt="Location Icon"
                  width={40}
                  height={40}
                  unoptimized={true}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OverviewArea;