"use client";
import React, { useEffect } from "react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const OverviewArea = () => {
  // Initialize AOS animation
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh(); // Refresh animation on component mount
  }, []);

  return (
    <div className="overview-area pt-100 pb-75">
      <div className="container">
        <div className="row justify-content-center">
          {/* Call Us */}
          <div className="col-lg-3 col-md-6">
            <div
              className="overview-card"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="500"
            >
              <h3>اتصل بنا</h3>
              <span>
                <Link href="tel:9901234567">۰٥٤۹۹٦۹۱٥٦٦</Link>
              </span>

              <div className="overview-shape">
                <ExportedImage
                  src="/images/overview-shape.png"
                  alt="Overview Shape"
                  width={40}
                  height={40}
                  unoptimized={true}
                />
              </div>
            </div>
          </div>

          {/* Email Us */}
          <div className="col-lg-3 col-md-6">
            <div
              className="overview-card"
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="600"
            >
              {/* <h3>راسلنا عبر البريد الإلكتروني</h3> */}
              <h3>بريد إلكتروني</h3>
              <span>
                <Link href="#">info@selsla.net</Link>
              </span>

              <div className="overview-shape">
                <ExportedImage
                  src="/images/overview-shape.png"
                  alt="Overview Shape"
                  width={40}
                  height={40}
                  unoptimized={true}
                />
              </div>
            </div>
          </div>

          {/* Tech Support */}
          <div className="col-lg-3 col-md-6">
            <div
              className="overview-card"
              data-aos="fade-up"
              data-aos-delay="70"
              data-aos-duration="700"
            >
              <h3>قم بزيارتنا</h3>
              <span> <Link href= "https://maps.app.goo.gl/R3MN1mx1jc7jvxhc7"> Street Sayda 7036 District Al Suwaidi Riyadh </Link> </span>

              <div className="overview-shape">
                <ExportedImage
                  src="/images/overview-shape.png"
                  alt="Overview Shape"
                  width={40}
                  height={40}
                  unoptimized={true}
                />
              </div>
            </div>
          </div>

          {/* Visit Us */}
          {/* <div className="col-lg-3 col-md-6">
            <div
              className="overview-card"
              data-aos="fade-up"
              data-aos-delay="80"
              data-aos-duration="800"
            >
              <h3>زرنا</h3>
              <span>٤١٣ شمال لاس فيغاس، نيفادا ٨٩٠٣٢</span>
 
              <div className="overview-shape">
                <ExportedImage
                  src="/images/overview-shape.png"
                  alt="Overview Shape"
                  width={40}
                  height={40}
                  unoptimized={true}
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default OverviewArea;
