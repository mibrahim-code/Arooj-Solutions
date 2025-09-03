"use client";
import React, { useEffect } from "react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesArea = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="services-area margin-zero ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div
              className="services-section-content text-center text-md-start"
              data-aos="fade-down"
              data-aos-delay={80}
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="services-bg-text">SERVICES</div>
              <span>Our Offerings</span>
              <h3>Cybersecurity & AI Solutions</h3>
              <p>Comprehensive services to protect your business and drive innovation through AI technology.</p>
              <div className="services-section-btn">
                <Link href="#" className="default-btn">
                  Explore All Services
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="row justify-content-center">
              {/* Cybersecurity Services */}
              <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                <div
                  className="services-item h-100 text-center text-md-start"
                  data-aos="fade-up"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <div className="services-image">
                    <Link href="#">
                      <ExportedImage
                        width={500}
                        height={300}
                        src="/images/services-1.jpg"
                        alt="Cybersecurity Services"
                        style={{width: '100%', height: 'auto'}}
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="services-content">
                    <h3>
                      <Link href="#">Cybersecurity Services</Link>
                    </h3>
                    <p>
                      End-to-end cybersecurity solutions to protect your digital assets, ensure compliance with NCA and SAMA regulations, and build trust with your stakeholders.
                    </p>
                    <Link href="#" className="services-btn">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>

              {/* AI Services */}
              <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                <div
                  className="services-item h-100 text-center text-md-start"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration={1000}
                  data-aos-once="true"
                >
                  <div className="services-image">
                    <Link href="#">
                      <ExportedImage
                        width={500}
                        height={300}
                        src="/images/services-3.jpg"
                        alt="AI Services"
                        style={{width: '100%', height: 'auto'}}
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="services-content">
                    <h3>
                      <Link href="#">AI Services</Link>
                    </h3>
                    <p>
                      AI-driven solutions to optimize operations, improve decision-making, and unlock new opportunities in line with Saudi Vision 2030.
                    </p>
                    <Link href="#" className="services-btn">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesArea;