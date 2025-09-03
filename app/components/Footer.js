// components/Footer.js
"use client"
import React, { useEffect } from "react";
import ExportedImage from "next-image-export-optimizer";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Footer = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
    <footer className="footer-area with-black-background margin-zero pt-100">
      <div className="container">
        <div className="row justify-content-center">
          {/* Logo + Social */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div
              className="single-footer-widget"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="widget-logo">
                <Link href="#">
                  <ExportedImage
                    src="/images/asFooterLogo.png"
                    alt="Logo"
                    width={150}
                    height={50}
                  />
                </Link>
              </div>
              <p className="font-sans text-gray-300 leading-relaxed">
                Transforming your ideas into digital reality - Your trusted
                partner for cybersecurity and AI solutions in Saudi Arabia.
              </p>

              <ul className="widget-social">
                <li>
                  <Link href="#"><i className="ri-facebook-fill"></i></Link>
                </li>
                <li>
                  <Link href="#"><i className="ri-instagram-line"></i></Link>
                </li>
                <li>
                  <Link href="#"><i className="ri-linkedin-fill"></i></Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Company */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div
              className="single-footer-widget ps-lg-5 ps-md-5 ps-sm-0"
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <h3 className="font-sans font-semibold text-white mb-4">
                Company
              </h3>
              <ul className="quick-links">
                <li><Link href="#" className="font-sans text-gray-300 hover:text-purple-400 transition-colors">Home</Link></li>
                <li><Link href="#" className="font-sans text-gray-300 hover:text-purple-400 transition-colors">About Us</Link></li>
                <li><Link href="#" className="font-sans text-gray-300 hover:text-purple-400 transition-colors">Contact</Link></li>
                <li><Link href="#" className="font-sans text-gray-300 hover:text-purple-400 transition-colors">Our Services</Link></li>
              </ul>
            </div>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div
              className="single-footer-widget ps-lg-5 ps-md-5 ps-sm-0"
              data-aos="fade-up"
              data-aos-delay="70"
              data-aos-duration="700"
              data-aos-once="true"
            >
              <h3 className="font-sans font-semibold text-white mb-4">
                Services
              </h3>
              <ul className="quick-links">
                <li><Link href="#" className="font-sans text-gray-300 hover:text-purple-400 transition-colors">Cybersecurity</Link></li>
                <li><Link href="#" className="font-sans text-gray-300 hover:text-purple-400 transition-colors">AI Solutions</Link></li>
                <li><Link href="#" className="font-sans text-gray-300 hover:text-purple-400 transition-colors">Compliance</Link></li>
                <li><Link href="#" className="font-sans text-gray-300 hover:text-purple-400 transition-colors">Training</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div
              className="single-footer-widget"
              data-aos="fade-up"
              data-aos-delay="80"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <h3 className="font-sans font-semibold text-white mb-4">
                Subscribe to our newsletter
              </h3>
              <form className="newsletter-form" data-bs-toggle="validator">
                <input
                  type="email"
                  className="input-newsletter font-sans"
                  placeholder="Enter your email"
                  name="EMAIL"
                  required
                  autoComplete="off"
                />
                <button type="submit" className="default-btn font-sans font-medium">
                  Subscribe
                </button>
                <div id="validator-newsletter" className="form-result"></div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright-area">
        <div className="container">
          <div className="copyright-area-content text-center">
            <p className="font-sans text-gray-300">
              Copyright © Arooj Solutions © 2024
            </p>
            <p className="font-sans text-gray-300 flex items-center justify-center gap-2 mt-2">
              Developed By
              <ExportedImage
                src="/images/copyrightlogo.png"
                alt="Copyright Logo"
                width={18}
                height={18}
                unoptimized={true}
                className="inline-block"
              />
              <Link href="#" className="hover:text-purple-400 transition-colors">
                Selsla Technology
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Shapes */}
      <div className="footer-shape-1">
        <ExportedImage
          src="/images/footer-shape-1.png"
          alt="Footer Shape 1"
          width={140}
          height={125}
        />
      </div>
      <div className="footer-shape-2">
        <ExportedImage
          src="/images/footer-shape-2.png"
          alt="Footer Shape 2"
          width={124}
          height={124}
        />
      </div>
      <div className="footer-shape-3">
        <ExportedImage
          src="/images/footer-shape-3.png"
          alt="Footer Shape 3"
          width={40}
          height={40}
        />
      </div>
    </footer>
  );
};

export default Footer;
