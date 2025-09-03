"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

const FeaturesArea = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="features-area pb-75">
      <div className="container">
        <div className="features-inner-box">
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              data-aos="fade-down"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div className="single-features-card" datatilt="">
                <div className="features-image" datatilt="">
                  <Link href="#">
                    <ExportedImage
                      src="/images/features-1.png"
                      alt="Cybersecurity Training"
                      width={90}
                      height={96}
                      unoptimized={true}
                    />
                  </Link>
                </div>
                <div className="content">
                  <h3>
                    <Link href="#">Cybersecurity Training</Link>
                  </h3>
                  <p>
                    Customized training programs, phishing simulations, and role-based security awareness for your workforce.
                  </p>
                </div>
                <div className="hover-content">
                  <h3>
                    <Link href="#">Cybersecurity Training</Link>
                  </h3>
                  <Link href="#" className="features-btn">
                    View More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div className="single-features-card" datatilt="">
                <div className="features-image" datatilt="">
                  <Link href="#">
                    <ExportedImage
                      src="/images/features-2.png"
                      alt="Penetration Testing"
                      width={90}
                      height={96}
                      unoptimized={true}
                    />
                  </Link>
                </div>
                <div className="content">
                  <h3>
                    <Link href="#">Penetration Testing</Link>
                  </h3>
                  <p>
                    Comprehensive vulnerability assessments and simulated attacks to identify and remediate security weaknesses.
                  </p>
                </div>
                <div className="hover-content">
                  <h3>
                    <Link href="#">Penetration Testing</Link>
                  </h3>
                  <Link href="#" className="features-btn">
                    View More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              data-aos="fade-down"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div className="single-features-card" datatilt="">
                <div className="features-image" datatilt="">
                  <Link href="#">
                    <ExportedImage
                      src="/images/features-3.png"
                      alt="AI-Powered Security"
                      width={90}
                      height={96}
                      unoptimized={true}
                    />
                  </Link>
                </div>
                <div className="content">
                  <h3>
                    <Link href="#">AI-Powered Security</Link>
                  </h3>
                  <p>
                    Advanced threat detection, automated incident response, and behavioral analytics using artificial intelligence.
                  </p>
                </div>
                <div className="hover-content">
                  <h3>
                    <Link href="#">AI-Powered Security</Link>
                  </h3>
                  <Link href="#" className="features-btn">
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesArea;