"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";

const AboutArea = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="about-area border-none pt-100">
      <div className="container">
        <div className="row align-items-center">
          {/* About Image */}
          <div className="col-lg-6 col-md-12">
            <div className="about-image" data-tilt="">
              <ExportedImage
                src="/images/about.png"
                alt="About Image"
                width={556}
                height={477}
                unoptimized={true}
                data-aos="fade-down"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="col-lg-6 col-md-12">
            <div
              className="about-content"
              data-aos="fade-up"
              data-aos-delay="80"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <span>من نحن</span>
              <h3>
              القصة الرائعة تبدأ بفريق ودود
              
              </h3>
              <p>
              </p>
              <p>
              يتمتع فريقنا في سلسلا من خبراء الويب المتمرسين بخبرة تكاملية واسعة النطاق، مما يضمن نتائج رفيعة المستوى لعملائنا.
              لقد دفعنا التزامنا بالتميز وتقديم خدمات ذات جودة إلى آفاق جديدة في مجال تصميم وتطوير الويب والتسويق في الرياض، المملكة العربية السعودية. تمكننا خبرة محترفي الويب لدينا من تقديم حلول مبتكرة ومخصصة تحقق توقعات العملاء.              </p>

              {/* About Button */}
              <div className="about-btn">
                <Link href="#" passHref legacyBehavior>
                  <a className="default-btn">تعرف على المزيد عنا</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Shape */}
      <div className="about-shape-1">
        <ExportedImage
          src="/images/about-shape.png"
          alt="About Shape"
          width={1349}
          height={430}
          unoptimized={true}
        />
      </div>
    </div>
  );
};

export default AboutArea;
