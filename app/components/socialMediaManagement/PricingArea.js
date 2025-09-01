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
        <h2>الجودة العالية بأفضل الأسعار</h2>
        <p>يمكنك الان طلب خدمات سلسلا واختيار الباقة المناسبة لك واحصل خدمة متكاملة تعزز نجاح عملك الرقمي.</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div
            className="single-pricing-card"
            data-aos="fade-up"
            data-aos-delay="70"
          >
            <h3>الباقة الفضية</h3>
            {/* <div className="price">
              $19 <span>/ شهر</span>
            </div> */}
            <ul className="pricing-list">
              <li><i className="ri-check-fill"></i>تهيئة حساب السوشيال ميديا</li>
              <li><i className="ri-check-fill"></i>تهيئة الحساب الإعلاني</li>
              <li><i className="ri-check-fill"></i>إدارة حساب تويتر أو حساب واحد</li>
              <li><i className="ri-check-fill"></i>4 بوست محتوى + 4 تصميم</li>
              <li><i className="ri-check-fill"></i>خطة للسوشيال ميديا كل شهر</li>
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
            <h3>الباقة الذهبية</h3>
            {/* <div className="price">
              $49 <span>/ شهر</span>
            </div> */}
            <ul className="pricing-list">
              <li><i className="ri-check-fill"></i>تهيئة حسابات السوشيال ميديا</li>
              <li><i className="ri-check-fill"></i>تهيئة الحساب الإعلاني</li>
              <li><i className="ri-check-fill"></i>إدارة حسابين (تويتر - انستجرام)</li>
              <li><i className="ri-check-fill"></i>8 بوست محتوى + 8 تصميم</li>
              <li><i className="ri-check-fill"></i>۲ صورة متحركة</li>
              <li><i className="ri-check-fill"></i>خطة للسوشيال ميديا كل شهر</li>
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

        <div className="col-lg-4 col-md-6">
          <div
            className="single-pricing-card"
            data-aos="fade-up"
            data-aos-delay="90"
          >
            <h3>الباقة البلاتينيه</h3>
            {/* <div className="price">
              $79 <span>/ شهر</span>
            </div> */}
            <ul className="pricing-list">
              <li>
                <i className="ri-check-fill"></i> تهيئة حساب السوشيال ميديا
              </li>
              <li>
                <i className="ri-check-fill"></i> تهيئة الحساب الإعلاني
              </li>
              <li>
                <i className="ri-check-fill"></i> إدارة 3 حسابات للسوشيال ميديا
              </li>
              <li>
                <i className="ri-check-fill"></i> إدارة الحملات الإعلانية
              </li>
              <li>
                <i className="ri-check-fill"></i> تقرير شهري بالأداء الإعلاني
              </li>
              <li>
                <i className="ri-check-fill"></i> 15 بوست محتوى + 15 تصميم
              </li>
              <li>
                <i className="ri-check-fill"></i> المتابعة والرد على العملاء خلال ساعات العمل
              </li>
              <li>
                <i className="ri-check-fill"></i> خطة للسوشيال ميديا كل 3 شهور
              </li>
              <li>
                <i className="ri-check-fill"></i> فيديو لمدة 40 ثانية
              </li>
            </ul>
            <div className="pricing-btn">
              <Link href="/contact" passHref legacyBehavior>
                <a className="default-btn">طلب الخدمة</a>
              </Link>
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
