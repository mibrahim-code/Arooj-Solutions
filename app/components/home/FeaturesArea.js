"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

const FeaturesArea = () => {
  useEffect(() => {
    // Initialize AOS
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
          className="col-lg-4 col-md-6"
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
                  alt="Product Design"
                  width={90}
                  height={96}
                  unoptimized={true}
                />
              </Link>
            </div>
            <div className="content">
              <h3>
                <Link href="#">تصميم المنتج</Link>
              </h3>
              <p>
                نركز على تصميمات مبتكرة تعزز من تجربة المستخدم وتلبي احتياجات العملاء.
              </p>
            </div>
            <div className="hover-content">
              <h3>
                <Link href="#">تصميم المنتج</Link>
              </h3>
              <Link href="#" className="features-btn">
                عرض المزيد
              </Link>
            </div>
          </div>
        </div>

        <div
          className="col-lg-4 col-md-6"
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
                  alt="Development"
                  width={90}
                  height={96}
                  unoptimized={true}
                />
              </Link>
            </div>
            <div className="content">
              <h3>
                <Link href="#">تطوير</Link>
              </h3>
              <p>
                نقدم حلول تطوير مخصصة لتطبيقات الويب والمحمول، لتحويل أفكارك إلى واقع.
              </p>
            </div>
            <div className="hover-content">
              <h3>
                <Link href="#">تطوير</Link>
              </h3>
              <Link href="#" className="features-btn">
                عرض المزيد
              </Link>
            </div>
          </div>
        </div>

        <div
          className="col-lg-4 col-md-6"
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
                  alt="Data Analysis"
                  width={90} 
                  height={96} 
                  unoptimized={true}
                />
              </Link>
            </div>

            <div className="content">
  <h3>
    <Link href="#">التسويق</Link>
  </h3>
  <p>
    نقدم حلول التسويق الشاملة لتعزيز تواجدك الرقمي وزيادة تفاعل العملاء.
  </p>
</div>



            <div className="hover-content">
              <h3>
                <Link href="#">تحليل البيانات</Link>
              </h3>
              <Link href="#" className="features-btn">
                عرض المزيد
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
