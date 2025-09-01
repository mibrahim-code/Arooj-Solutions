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
            <Link href="/"><ExportedImage src="/images/logoff.webp" alt="الشعار" width={150} height={50} /></Link>
          </div>
          <p> تحويل أفكارك إلى واقع رقمي -
          شريكك الموثوق لتطوير التطبيقات والويب. </p>

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
          <h3>الشركة</h3>


          <ul className="quick-links">
            <li><Link href="/"> الصفحة الرئيسية </Link></li>
            <li><Link href="/about">من نحن</Link></li>
            <li><Link href="/contact">الاتصال</Link></li>
            <li><Link href="/services">خدماتنا</Link></li>
            {/* <li><Link href="/projects">المشاريع</Link></li> */}
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
          <h3>الباقات</h3>


          <ul className="quick-links">
            <li><Link href="/websiteDesign"> تصميم مواقع </Link></li>
            <li><Link href="/graphicDesign"> تصميم مواقع  </Link></li>

            <li><Link href="/socialMediaManagement"> إدارة صفحات السوشيال ميديا  </Link></li>
            <li><Link href="/seoServices"> خدمات السيو</Link></li>

            {/* <li><Link href="/privacy-policy">سياسة الخصوصية</Link></li> */}
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
          <h3>اشترك في النشرة الإخبارية</h3>
          <form className="newsletter-form" data-bs-toggle="validator">
            <input type="email" className="input-newsletter" placeholder="أدخل بريدك الإلكتروني" name="EMAIL" required="" autoComplete="off" />
            <button type="submit" className="default-btn">اشترك</button>
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
    <ExportedImage src="/images/footer-shape-1.png" alt="شكل القدم 1" width={140} height={125} />
  </div>
  <div className="footer-shape-2">
    <ExportedImage src="/images/footer-shape-2.png" alt="شكل القدم 2" width={124} height={124} />
  </div>
  <div className="footer-shape-3">
    <ExportedImage src="/images/footer-shape-3.png" alt="شكل القدم 3" width={40} height={40} />
  </div>
</footer>


    // <footer className="footer-area with-black-background margin-zero pt-100">
    //   <div className="container">
    //     <div className="row justify-content-center">
    //       <div className="col-lg-3 col-md-6">
    //         <div
    //           className="single-footer-widget"
    //           data-aos="fade-up"
    //           data-aos-delay="50"
    //           data-aos-duration="500"
    //           data-aos-once="true"
    //         >
    //           <div className="widget-logo">
    //             <Link href="/"><ExportedImage src="/images/logo.png" alt="Logo" width={150} height={50} /></Link>
    //           </div>
    //           <p>Lorem ipsum dolor sit amet consetetur sadi scing elitr sed diam nonumy.</p>

    //           <ul className="widget-social">
    //             <li>
    //               <Link href="https://www.facebook.com/EnvyTheme" target="_blank" rel="noopener noreferrer">
    //                 <i className="ri-facebook-fill"></i>
    //               </Link>
    //             </li>
    //             <li>
    //               <Link href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
    //                 <i className="ri-twitter-fill"></i>
    //               </Link>
    //             </li>
    //             <li>
    //               <Link href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
    //                 <i className="ri-youtube-fill"></i>
    //               </Link>
    //             </li>
    //             <li>
    //               <Link href="https://vimeo.com/" target="_blank" rel="noopener noreferrer">
    //                 <i className="ri-vimeo-fill"></i>
    //               </Link>
    //             </li>
    //             <li>
    //               <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
    //                 <i className="ri-instagram-line"></i>
    //               </Link>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>

    //       <div className="col-lg-3 col-md-6">
    //         <div
    //           className="single-footer-widget ps-5"
    //           data-aos="fade-up"
    //           data-aos-delay="60"
    //           data-aos-duration="600"
    //           data-aos-once="true"
    //         >
    //           <h3>Links</h3>
    //           <ul className="quick-links">
    //             <li><Link href="/about-style-1">About Us</Link></li>
    //             <li><Link href="/services-style-2">Services</Link></li>
    //             <li><Link href="/blog-style-1">News</Link></li>
    //             <li><Link href="/pricing">Pricing</Link></li>
    //             <li><Link href="/projects">Projects</Link></li>
    //           </ul>
    //         </div>
    //       </div>

    //       <div className="col-lg-3 col-md-6">
    //         <div
    //           className="single-footer-widget ps-5"
    //           data-aos="fade-up"
    //           data-aos-delay="70"
    //           data-aos-duration="700"
    //           data-aos-once="true"
    //         >
    //           <h3>Pages</h3>
    //           <ul className="quick-links">
    //             <li><Link href="/contact">Contact Us</Link></li>
    //             <li><Link href="/purchase-guide">Purchase Guide</Link></li>
    //             <li><Link href="/faq">FAQ's</Link></li>
    //             <li><Link href="/terms-of-service">Terms of Service</Link></li>
    //             <li><Link href="/privacy-policy">Privacy Policy</Link></li>
    //           </ul>
    //         </div>
    //       </div>

    //       <div className="col-lg-3 col-md-6">
    //         <div
    //           className="single-footer-widget"
    //           data-aos="fade-up"
    //           data-aos-delay="80"
    //           data-aos-duration="800"
    //           data-aos-once="true"
    //         >
    //           <h3>Subscribe Newsletter</h3>
    //           <form className="newsletter-form" data-bs-toggle="validator">
    //             <input type="email" className="input-newsletter" placeholder="Enter your email" name="EMAIL" required="" autoComplete="off" />
    //             <button type="submit" className="default-btn">Subscribe</button>
    //             <div id="validator-newsletter" className="form-result"></div>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="copyright-area">
    //     <div className="container">
    //       <div className="copyright-area-content">
    //         <p>
    //           Copyright <strong>Coze</strong> All Rights Reserved by <Link href="https://envytheme.com/" target="_blank" rel="noopener noreferrer">EnvyTheme</Link>
    //         </p>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="footer-shape-1">
    //     <ExportedImage src="/images/footer-shape-1.png" alt="Footer Shape 1" width={140} height={125} />
    //   </div>
    //   <div className="footer-shape-2">
    //     <ExportedImage src="/images/footer-shape-2.png" alt="Footer Shape 2" width={124} height={124} />
    //   </div>
    //   <div className="footer-shape-3">
    //     <ExportedImage src="/images/footer-shape-3.png" alt="Footer Shape 3" width={40} height={40} />
    //   </div>
    // </footer>



  );
};

export default Footer;
