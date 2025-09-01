"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";


const AboutArea = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 700,  // Set global duration for animations
      once: true,     // Ensure animations happen only once
    });
    
    // Reinitialize AOS on page navigation
    AOS.refresh();
  }, []);  // Run only on component mount

  return (


    <div className="about-area pb-75">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="about-wrap-image" data-tilt="">
            <ExportedImage
              src="/images/aboutT1.png"
              alt="معلومات عنا"
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
            <div className="about-bg-text">معلومات عنا</div>
            <span>من نحن</span>
            <h3>
              شريكك الموثوق لجميع حلول تكنولوجيا المعلومات
            </h3>
            <p>
              نحن شركة رائدة في تقديم حلول التكنولوجيا حول العالم لأكثر من 40 عامًا. نركز على الابتكار وتقديم خدمات متكاملة تلبي احتياجات عملائنا.
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
              <h3>رؤيتنا</h3>
              <p>
                رؤيتنا هي أن نكون الشركة الرائدة في مجال تكنولوجيا المعلومات، مع تقديم حلول مبتكرة تساهم في تعزيز الكفاءة والفعالية.
              </p>
  
              <div className="about-btn">
                <Link
                 href="/about" className="default-btn">
                  اعرف المزيد عنا
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
              <h3>مهمتنا</h3>
              <p>
                مهمتنا هي تقديم خدمات تكنولوجيا المعلومات المتكاملة، مما يساعد الشركات على تحقيق أهدافها من خلال حلول تقنية متطورة ومخصصة.
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
                  alt="صورة عن"
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
        alt="شكل دائري"
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
