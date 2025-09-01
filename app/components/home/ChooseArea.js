"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ChooseArea = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
    <div className="choose-area pt-100 pb-75">
      <div className="container">
        <div className="section-title section-style-two">
          <div className="section-bg-text">Services</div>
          <span>Our Services</span>
          <h2>Comprehensive Cybersecurity & AI Solutions</h2>
          <p>Trust Arooj Solutions to deliver exceptional services that meet your unique requirements.</p>
        </div>

        <div className="container">
          <div className="row g-lg-4 justify-content-center">
            <div className="col-md-4 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <div className="choose-image" datatilt="">
                  <Link href="#">
                    <ExportedImage
                      src="/images/choose-2.png"
                      alt="Governance, Risk & Compliance"
                      width={150}
                      height={160}
                    />
                  </Link>
                  <div className="number">1</div>
                </div>
                <div className="choose-content">
                  <h3>
                    <Link href="#">Governance, Risk & Compliance</Link>
                  </h3>
                  <p>
                    NCA ECC & CCC compliance, SAMA framework alignment, risk management, and policy development for Saudi regulations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="700"
                data-aos-once="true"
              >
                <div className="choose-image" datatilt="">
                  <Link href="#">
                    <ExportedImage
                      src="/images/choose-3.png"
                      alt="Security Operations"
                      width={150}
                      height={160}
                    />
                  </Link>
                  <div className="number">2</div>
                </div>
                <div className="choose-content">
                  <h3>
                    <Link href="#">Security Operations & Threat Intelligence</Link>
                  </h3>
                  <p>
                    24/7 SOC monitoring, SIEM management, threat hunting, and real-time incident response for comprehensive protection.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="choose-image" datatilt="">
                  <Link href="#">
                    <ExportedImage
                      src="/images/choose-1.png"
                      alt="Network Security"
                      width={150}
                      height={160}
                    />
                  </Link>
                  <div className="number">3</div>
                </div>
                <div className="choose-content">
                  <h3>
                    <Link href="#">Network & Infrastructure Security</Link>
                  </h3>
                  <p>
                    Firewall management, secure architecture design, endpoint protection, and Zero Trust implementation for robust security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-lg-4 justify-content-center">
            <div className="col-md-4 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <div className="choose-image" datatilt="">
                  <Link href="#">
                    <ExportedImage
                      src="/images/choose-2.png"
                      alt="Cloud Security"
                      width={150}
                      height={160}
                    />
                  </Link>
                  <div className="number">4</div>
                </div>
                <div className="choose-content">
                  <h3>
                    <Link href="#">Cloud & Application Security</Link>
                  </h3>
                  <p>
                    Secure cloud migration, application testing, API security, and data loss prevention for cloud environments.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="700"
                data-aos-once="true"
              >
                <div className="choose-image" datatilt="">
                  <Link href="#">
                    <ExportedImage
                      src="/images/choose-3.png"
                      alt="AI Strategy"
                      width={150}
                      height={160}
                    />
                  </Link>
                  <div className="number">5</div>
                </div>
                <div className="choose-content">
                  <h3>
                    <Link href="#">AI Strategy & Consulting</Link>
                  </h3>
                  <p>
                    AI readiness assessments, business case development, and Vision 2030-aligned adoption roadmaps for Saudi organizations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="choose-image" datatilt="">
                  <Link href="#">
                    <ExportedImage
                      src="/images/choose-1.png"
                      alt="Predictive Analytics"
                      width={150}
                      height={160}
                    />
                  </Link>
                  <div className="number">6</div>
                </div>
                <div className="choose-content">
                  <h3>
                    <Link href="#">Predictive Analytics & Data Intelligence</Link>
                  </h3>
                  <p>
                    Customer behavior prediction, demand forecasting, predictive maintenance, and risk modeling using advanced AI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseArea;
