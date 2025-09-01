// components/Footer.js
"use client"
import React, { useEffect } from 'react';
import ExportedImage from 'next-image-export-optimizer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

const Footer = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (

    <footer className="footer-area with-black-background margin-zero pt-100">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-3 col-md-6">
        <div
          className="single-footer-widget"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-once="true"
        >
          <div className="widget-logo">
            <Link href="/"><ExportedImage src="/images/logoff.webp" alt="Logo" width={150} height={50} /></Link>
          </div>
          <p> Transforming your ideas into digital reality -
          Your trusted partner for app and web development. </p>

          <ul className="widget-social">
  <li>
    <Link href="https://www.facebook.com/Selsla.net" target="_blank" rel="noopener noreferrer">
      <i className="ri-facebook-fill"></i>
    </Link>
  </li>
  <li>
    <Link href="https://www.instagram.com/selsla_net?igsh=MWh5a3RnNnE1eWkzMg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
      <i className="ri-instagram-line"></i>
    </Link>
  </li>
  <li>
    <Link href="https://www.linkedin.com/company/selslatechnology/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
      <i className="ri-linkedin-fill"></i>
    </Link>
  </li>
</ul>




        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div
          className="single-footer-widget ps-5"
          data-aos="fade-up"
          data-aos-delay="60"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <h3>Company</h3>


          <ul className="quick-links">
            <li><Link href="/"> Home </Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/services">Our Services</Link></li>
            {/* <li><Link href="/projects">Projects</Link></li> */}
          </ul>


        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div
          className="single-footer-widget ps-5"
          data-aos="fade-up"
          data-aos-delay="70"
          data-aos-duration="700"
          data-aos-once="true"
        >
          <h3>Packages</h3>


          <ul className="quick-links">
            <li><Link href="/websiteDesign"> Website Design </Link></li>
            <li><Link href="/graphicDesign"> Graphic Design  </Link></li>

            <li><Link href="/socialMediaManagement"> Social Media Management  </Link></li>
            <li><Link href="/seoServices"> SEO Services</Link></li>

            {/* <li><Link href="/privacy-policy">Privacy Policy</Link></li> */}
          </ul>


        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div
          className="single-footer-widget"
          data-aos="fade-up"
          data-aos-delay="80"
          data-aos-duration="800"
          data-aos-once="true"
        >
          <h3>Subscribe to our newsletter</h3>
          <form className="newsletter-form" data-bs-toggle="validator">
            <input type="email" className="input-newsletter" placeholder="Enter your email" name="EMAIL" required="" autoComplete="off" />
            <button type="submit" className="default-btn">Subscribe</button>
            <div id="validator-newsletter" className="form-result"></div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div className="copyright-area">
    <div className="container">
      <div className="copyright-area-content">
      <b style={{ color: "#a561ac" }}>
      Selsla Technology 2023   &nbsp;
            <ExportedImage
              src="/images/copyrightlogo.png"
              alt="Logo"
              width={30} // Adjust the size as needed
              height={30} // Adjust the size as needed
              style={{ verticalAlign: "middle", marginRight: "5px" }}
            />
            &nbsp;
            <Link href="https://www.selsla.net/" target="_new" title="child oasis">
              <b style={{ color: "#a561ac" }}>&nbsp; © Copyright  </b>
            </Link>
          </b>
      </div>
    </div>
  </div>

  <div className="footer-shape-1">
    <ExportedImage src="/images/footer-shape-1.png" alt="Footer Shape 1" width={140} height={125} />
  </div>
  <div className="footer-shape-2">
    <ExportedImage src="/images/footer-shape-2.png" alt="Footer Shape 2" width={124} height={124} />
  </div>
  <div className="footer-shape-3">
    <ExportedImage src="/images/footer-shape-3.png" alt="Footer Shape 3" width={40} height={40} />
  </div>
</footer>




  );
};

export default Footer;