"use client";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
          <p>
            يمكنك الان طلب خدمات سلسلا واختيار الباقة المناسبة لك واحصل خدمة
            متكاملة تعزز نجاح عملك الرقمي.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div
              className="single-pricing-card"
              data-aos="fade-up"
              data-aos-delay="70"
            >
              <h3> الباقة الأساسية </h3>

              <ul className="pricing-list">
                <li>
                  <i className="ri-check-fill"></i> فكرتين مبدئيتين للشعار{" "}
                </li>

                <li>
                  <i className="ri-check-fill"></i> صور عالية الدقة (PNG & JPEG){" "}
                </li>

                <li>
                  <i className="ri-check-fill"></i> إرشادات أساسية للعلامة
                  التجارية{" "}
                </li>
              </ul>

              <h3 className="pt-2"> الباقة المميزة </h3>

              <ul className="pricing-list">
                <li>
                  <i className="ri-check-fill"></i> ٤ أفكار مبدئية للشعار{" "}
                </li>

                <li>
                  <i className="ri-check-fill"></i> جميع الملفات المصدرية (AI,
                  EPS, SVG, PNG, JPEG){" "}
                </li>

                <li>
                  <i className="ri-check-fill"></i> إرشادات كاملة للعلامة
                  التجارية (الخطوط، لوحة الألوان، استخدام الشعار )
                </li>
              </ul>

              <h3 className="pt-2"> الباقة الاحترافية </h3>

              <ul className="pricing-list">
                <li>
                  <i className="ri-check-fill"></i> ٦ أفكار مبدئية للشعار{" "}
                </li>

                <li>
                  <i className="ri-check-fill"></i> جميع الملفات المصدرية{" "}
                </li>

                <li>
                  <i className="ri-check-fill"></i> إرشادات كاملة للعلامة
                  التجارية{" "}
                </li>

                <li>
                  <i className="ri-check-fill"></i> حزمة وسائل التواصل الاجتماعي
                  (صورة الملف الشخصي، بانر، علامة مائية ){" "}
                </li>

                <li>
                  <i className="ri-check-fill"></i> باقة تصميم وسائل التواصل
                  الاجتماعي{" "}
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
              <h3 className="test" >باقة تصميم وسائل التواصل الاجتماعي</h3>
              <h3> الباقة الأساسية </h3>

              <ul className="pricing-list">
                <li>
                  <i className="ri-check-fill"></i> ١٠ منشورات لوسائل التواصل
                  الاجتماعي تصاميم ثابتة{" "}
                </li>
                <li>
                  <i className="ri-check-fill"></i> ٣ قصص{" "}
                </li>
                <li>
                  <i className="ri-check-fill"></i> المنصات: إنستغرام، فيسبوك{" "}
                </li>
              </ul>

              <h3 className="pt-2"> الباقة المميزة </h3>
              <ul className="pricing-list">
                <li>
                  <i className="ri-check-fill"></i> ٢٠ منشورا لوسائل التواصل
                  الاجتماعي (كاروسيل، ٥ قصص){" "}
                </li>
                <li>
                  <i className="ri-check-fill"></i> تصميم غلاف لوسائل التواصل
                  الاجتماعي (فيسبوك، تويتر){" "}
                </li>
                {/* <li><i className="ri-check-fill"></i> المنصات: إنستغرام، فيسبوك </li> */}
              </ul>

              <h3 className="pt-2"> الباقة الاحترافية </h3>
              <ul className="pricing-list">
                <li>
                  <i className="ri-check-fill"></i> ٣٠ منشو ًرا لوسائل التواصل
                  الاجتماعي (كاروسيل، ريلز، قصص 10){" "}
                </li>
                <li>
                  <i className="ri-check-fill"></i> تصميم أغلفة لوسائل التواصل
                  الاجتماعي، صور الملف الشخصي، تصميم أبرز القصص تقويم محتوى شهري
                  كامل{" "}
                </li>
                {/* <li><i className="ri-check-fill"></i> المنصات: إنستغرام، فيسبوك </li> */}
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
               <h3 className="test" > باقة الهوية البصرية  </h3>

              <h3> الباقة الأساسية </h3>

              <ul className="pricing-list">
                <li>
                  <i className="ri-check-fill"></i> تصميم الشعار{" "}
                </li>
                <li>
                  <i className="ri-check-fill"></i> اختيار لوحة الألوان{" "}
                </li>
                <li>
                  <i className="ri-check-fill"></i> تنسيق الخطوط{" "}
                </li>
                <li>
                  <i className="ri-check-fill"></i> تصميم بطاقة عمل واحدة{" "}
                </li>
              </ul>

              <h3 className="pt-2"> الباقة المميزة </h3>
              <ul className="pricing-list">
                <li>
                  <i className="ri-check-fill"></i> تصميم الشعار + دليل العلامة
                  التجارية{" "}
                </li>
                <li>
                  <i className="ri-check-fill"></i> إرشادات لوحة الألوان،
                  الطباعة، والصور{" "}
                </li>
                <li>
                  <i className="ri-check-fill"></i> تصميم بطاقتين للعمل{" "}
                </li>
                <li>
                  <i className="ri-check-fill"></i> تصميم ورقة رسمية + ظرف{" "}
                </li>
              </ul>

              <h3 className="pt-2"> الباقة الاحترافية </h3>
              <ul className="pricing-list">
                <li>
                  <i className="ri-check-fill"></i> )تصميم هوية العلامة التجارية
                  بالكامل (الشعار، الخطوط، لوحة الألوان، الصور{" "}
                </li>
                <li>
                  <i className="ri-check-fill"></i> بطاقات العمل، الورقة
                  الرسمية، الأظرف، وقوالب العروض التقديمية{" "}
                </li>
                <li>
                  <i className="ri-check-fill"></i> باقة الملف الشخصي لوسائل
                  التواصل الاجتماعي + أغلفة أبرز القصص نماذج ثلاثية الأبعاد
                  لمواد العلامة التجارية{" "}
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
