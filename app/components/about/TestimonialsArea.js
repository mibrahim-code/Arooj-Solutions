// components/TestimonialsArea.js
"use client"
import { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ExportedImage from 'next-image-export-optimizer';

const TestimonialsArea = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="testimonials-area pt-75 pb-100">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 col-md-12"
            data-aos="fade-right"
            data-aos-delay="80"
          >
            <div className="testimonials-section-content">
              <span>الشهادات</span>
              <h3>
                بعض <b>الكلمات الطيبة</b> من عملائنا السعداء{' '}
              </h3>
              <p>
                نحن شركة رائدة في تقديم حلول تكنولوجيا المعلومات في جميع أنحاء
                العالم لأكثر من 40 عامًا.
              </p>
              <p>
                نحن نوفر حلول تقنية مبتكرة على المستوى العالمي، مع خبرة تتجاوز 40 عامًا
                في هذا المجال.
              </p>
              <div className="testimonials-btn">
                <Link href="/about" legacyBehavior>
                  <a className="default-btn">تعرف على المزيد عنا</a>
                </Link>
              </div>
            </div>
          </div>

          <div
            className="col-lg-6 col-md-12"
            data-aos="fade-left"
            data-aos-delay="80"
          >
            <div className="testimonials-item">
              <div className="item-box">
                <ExportedImage
                  src="/images/testimonials-1.jpg"
                  className="rounded-circle"
                  alt="علي محمد"
                  width={100}
                  height={100}
                  unoptimized={true}
                />
                <p>
                  خدمة رائعة، ساعدتنا الشركة في تطوير نظام معقد بكل سلاسة ودقة.
                </p>
                <h4>
                  علي محمد, <span>فريق سوليت</span>
                </h4>
              </div>

              <div className="item-box">
                <ExportedImage
                  src="/images/testimonials-2.jpg"
                  className="rounded-circle"
                  alt="عبد الرحمن أحمد"
                  width={100}
                  height={100}
                  unoptimized={true}
                />
                <p>
                  لقد ساعدنا فريق الدعم في الشركة بشكل كبير في حل مشكلاتنا التقنية بسرعة.
                </p>
                <h4>
                  عبد الرحمن أحمد, <span>فريق سبيكس</span>
                </h4>
              </div>

              <div className="item-box">
                <ExportedImage
                  src="/images/testimonials-3.jpg"
                  className="rounded-circle"
                  alt="زينب"
                  width={100}
                  height={100}
                  unoptimized={true}
                />
                <p>
                  تجربة ممتازة، الشركة تقدم حلول برمجية متقدمة وموثوقة.
                </p>
                <h4>
                  زينب, <span>فريق كوز</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonialsbg-shape">
        <ExportedImage
          src="/images/testimonials-shape.png"
          alt="شكل الشهادات"
          width={1351}
          height={431}
          unoptimized={true}
        />
      </div>
    </div>
  );
};

export default TestimonialsArea;
