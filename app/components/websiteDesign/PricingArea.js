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
          <span className="text-green-500 font-bold text-3xl">الباقات</span>
          <h2 className="text-gray-500 text-3xl lg:text-4xl font-bold">الجودة العالية بأفضل الأسعار</h2>
          <p className="text-gray-700 mt-4">يمكنك الان طلب خدمات سلسلا واختيار الباقة المناسبة لك واحصل خدمة متكاملة تعزز نجاح عملك الرقمي.</p>
        </div>
 
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div
              className="single-pricing-card"
              data-aos="fade-up"
              data-aos-delay="70"
            >
              <h3>  الباقة الأساسية </h3>
              {/* <div className="price">
                $19 <span>/ شهر</span>
              </div> */}
              <ul className="pricing-list">
                <li><i className="ri-check-fill"></i>موقع متجاوب مع جميع الأجهزة</li>
                <li><i className="ri-check-fill"></i>استضافة مجانية لمدة عام</li>
                <li><i className="ri-check-fill"></i>دعم فني لمدة 3 شهور</li>
                <li><i className="ri-check-fill"></i>موقع بلغتين اللغة العربية والانجليزية</li>
                <li><i className="ri-check-fill"></i>دومين مجاني</li>
                <li><i className="ri-check-fill"></i>انشاء صفحات الموقع كالآتي: الرئيسية، سياسة الاستخدام، الشروط والأحكام، من نحن، اتصل بنا، مشاريعنا</li>
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
              <h3>باقة المتجر الالكتروني</h3>
              {/* <div className="price">
                $49 <span>/ شهر</span>
              </div> */}
              <ul className="pricing-list">
                <li><i className="ri-check-fill"></i>نموذج عصري ومتجاوب مع جميع الأجهزة</li>
                <li><i className="ri-check-fill"></i>متجر بعدد غير محدود من المنتجات</li>
                <li><i className="ri-check-fill"></i>استضافة مجانية لمدة عام كامل</li>
                <li><i className="ri-check-fill"></i>دعم فني لمدة 3 شهور</li>
                <li><i className="ri-check-fill"></i>المتجر بلغتين اللغة العربية والانجليزية</li>
                <li><i className="ri-check-fill"></i>الربط مع شركة الشحن وبوابة الدفع</li>
                <li><i className="ri-check-fill"></i>دومين مجاني</li>
                <li><i className="ri-check-fill"></i>رفع 100 منتج (الوصف – السعر – عدد القطع – صور المنتج)</li>
                <li><i className="ri-check-fill"></i>اضافة أقسام رئيسية للمنتجات وأقسام فرعية</li>
                <li><i className="ri-check-fill"></i>تصنيف المنتجات (الأكثر مبيعاَ – الأحدث – العروض)</li>
                <li><i className="ri-check-fill"></i>الصفحات (سياسة الاستخدام – الشروط والأحكام – من نحن – تواصل معنا)</li>
                <li><i className="ri-check-fill"></i>اضافة الجزء الخاص بالتواصل مع خدمة العملاء من خلال الشات أو الواتساب</li>
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
              <h3>صفحة الهبوط</h3>
              {/* <div className="price">
                $79 <span>/ شهر</span>
              </div> */}
              <ul className="pricing-list">
                <li><i className="ri-check-fill"></i>تصميم احترافي للصفحة</li>
                <li><i className="ri-check-fill"></i>لوجو مجاني</li>
                <li><i className="ri-check-fill"></i>كتابة المحتوى الخاص بالصفحة</li>
                <li><i className="ri-check-fill"></i>دومين مجاني</li>
                <li><i className="ri-check-fill"></i>استضافة لمدة عام مجاناَ</li>
                <li><i className="ri-check-fill"></i>۳ إيميلات رسمية</li>
                <li><i className="ri-check-fill"></i>دعم تصفح الهاتف</li>
                <li><i className="ri-check-fill"></i>دعم فني لمدة ۳ أشهر</li>
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
