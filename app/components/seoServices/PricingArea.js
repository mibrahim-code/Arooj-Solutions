"use client"
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PricingArea = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (

     
<div className="pricing-area with-black-background margin-zero pt-100 pb-75">
      <div className="container">
        <div className="section-title">
          <span>الباقات</span>
          <h2>
            الجودة العالية بأفضل الأسعار
          </h2>
          <p>
            يمكنك الان طلب خدمات سلسلا واختيار الباقة المناسبة لك واحصل خدمة متكاملة تعزز نجاح عملك الرقمي.
          </p>
        </div>
 
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div
              className="single-pricing-card"
              data-aos="fade-up"
              data-aos-delay="70"
            >
              <h3>باقة انشاء الموقع</h3>
              {/* <div className="price">
                $19 <span>/ month</span>
              </div> */}
              <ul className="pricing-list">
                <li>
                  <i className="ri-check-fill"></i> تحليل كامل لموقعك
                </li>
                <li>
                  <i className="ri-check-fill"></i> تحليل الكلمات الرئيسية
                </li>
                <li>
                  <i className="ri-check-fill"></i> تحسين الصور
                </li>
                <li>
                  <i className="ri-check-fill"></i> تحسين ميتا
                </li>
                <li>
                  <i className="ri-check-fill"></i> رفع خريطة الموقع
                </li>
                <li>
                  <i className="ri-check-fill"></i> إنشاء تحليلات الحساب لمتابعة أداء الموقع
                </li>
                <li>
                  <i className="ri-check-fill"></i> إنشاء حساب وحدة تحكم البحث
                </li>
 
              </ul>
              <div className="pricing-btn">
                <Link href="/contact" passHref legacyBehavior>
                  <a className="default-btn">طلب الخدمة</a>
                </Link>
              </div>
            </div>
          </div>
 
          <div className="col-lg-4 col-md-6">
            <div
              className="single-pricing-card"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              <h3>باقة الأعمال</h3>
              {/* <div className="price">
                $49 <span>/ month</span>
              </div> */}
              <ul className="pricing-list">
                <li>
                  <i className="ri-check-fill"></i> تحليل المنافسين وإيجاد نقاط القوة والضعف والإستفادة منها.
                </li>
                <li>
                  <i className="ri-check-fill"></i> إدارة موقعك في محركات البحث.
                </li>
                <li>
                  <i className="ri-check-fill"></i> عمل خطة للكلمات المفتاحية.
                </li>
                <li>
                  <i className="ri-check-fill"></i> إضافة موقعك لمشرفي المواقع
                </li>
                <li>
                  <i className="ri-check-fill"></i> رفع خريطة الموقع الخاصة بالموقع.
                </li>
                <li>
                  <i className="ri-check-fill"></i> إضافة جوجل تاج مانجر إلى موقعك.
                </li>
                <li>
                  <i className="ri-check-fill"></i> تهيئة الموقع داخليا.
                </li>
                <li>
                  <i className="ri-check-fill"></i> تهيئة الموقع خارجيا روابط خلفية عالية الجودة ذات صلة بموقعك.
                </li>
                <li>
                  <i className="ri-check-fill"></i> إضافة محتوى لصفحات الأقسام.
                </li>
                <li>
                  <i className="ri-check-fill"></i> عدد الكلمات 6/8 كلمات.
                </li>
                <li>
                  <i className="ri-check-fill"></i> إضافة تحليلات جوجل لموقعك. .
                </li>
                <li>
                  <i className="ri-check-fill"></i> تقديم التقارير شهرياَ بأداء الموقع.
                </li>
                <li>
                  <i className="ri-check-fill"></i> خطة عمل كل 3 شهور.
                </li>
              </ul>
              <div className="pricing-btn">
                <Link href="/contact" passHref legacyBehavior>
                  <a className="default-btn">طلب الخدمة</a>
                </Link>
              </div>
              <div className="most-popular">
                <span>الأكثر شعبية</span>
              </div>
            </div>
          </div>
 
 
        </div>
      </div>
 
      <div className="pricing-bg-shape-1">
        <ExportedImage
          src="/images/pricing-bg-shape.png"
          alt="Pricing Background Shape"
          unoptimized={true}
          layout="responsive"
          width={1351}
          height={431}
        />
      </div>
      <div className="pricing-shape-1">
        <ExportedImage
          src="/images/pricing-shape-1.png"
          alt="Pricing Shape 1"
          unoptimized={true}
          layout="responsive"
          width={40}
          height={40}
        />
      </div>
      <div className="pricing-shape-2">
        <ExportedImage
          src="/images/pricing-shape-2.png"
          alt="Pricing Shape 2"
          unoptimized={true}
          layout="responsive"
          width={140}
          height={125}
        />
      </div>
    </div>

  );
};

export default PricingArea;
