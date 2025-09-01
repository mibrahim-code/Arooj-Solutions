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
          <div className="col-lg-3 col-md-6">
            <div
              className="overview-card"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="500"
            >
              <h3>Call Us</h3>
              <span>
                <Link href="#">+966 54 699 691 566</Link>
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

          <div className="col-lg-3 col-md-6">
            <div
              className="overview-card"
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="600"
            >
              <h3>Email Us</h3>
              <span>
<<<<<<< HEAD
                <Link href="#">info@arooj.sa</Link>
=======
                <Link href="mailto:info@aroojsolutions.com">info@arooj.sa</Link>
>>>>>>> 937a094cdcab12c4f49d5d15400611448040e07e
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

          <div className="col-lg-3 col-md-6">
            <div
              className="overview-card"
              data-aos="fade-up"
              data-aos-delay="70"
              data-aos-duration="700"
            >
              <h3>Visit Us</h3>
              <span>Riyadh, Saudi Arabia</span>
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