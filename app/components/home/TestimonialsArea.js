"use client"
import React from "react";
import ExportedImage from "next-image-export-optimizer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
const TestimonialsArea = () => {
  return (
    <div className="testimonials-area pt-50 pb-100">
      <div className="container-fluid">
        <div className="section-title section-style-two">
          <div className="section-bg-text">تعليق</div>
          <span>الشهادات</span>
          <h2>
            ماذا يقول العملاء
          </h2>
        </div>

        {/* Swiper for Testimonials */}
        <Swiper
          spaceBetween={30}  // Space between slides
          slidesPerView={1}   // Default to 1 slide on small screens
          loop={true}         // Enable looping
          autoplay={{ delay: 3000, disableOnInteraction: false }}  // Autoplay every 3 seconds
          // pagination={{ clickable: true }}  // Enable pagination (dots)
          // navigation         // Enable navigation arrows
          breakpoints={{     // Set responsive breakpoints
            768: {
              slidesPerView: 2,  // 2 slides on screens >= 768px
            },
            1024: {
              slidesPerView: 3,  // 3 slides on screens >= 1024px
            },
            1280: {
              slidesPerView: 4,  // 4 slides on screens >= 1280px
            },
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div
              className="single-testimonials-card"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={500}
              data-aos-once="true"
            >
              <p>
                تمنحنا تقاريرنا الجديدة إمكانية رؤية البيانات والوصول إليها
                بطرق لم تكن لدينا من قبل. لقد تم تحرير بياناتنا وهي تساعدنا
                الآن على اتخاذ قرارات حاسمة بشكل أسرع.
              </p>
              <div className="info-item-box">
                <ExportedImage
                  src="/images/CL1.jpg"
                  className="rounded-circle"
                  alt="image"
                  width={60}
                  height={60}
                />
                <h4>المدير التنفيذي</h4>
                <ul className="rating-list">
                  <li><i className="ri-star-fill" /></li>
                  <li><i className="ri-star-fill" /></li>
                  <li><i className="ri-star-fill" /></li>
                  <li><i className="ri-star-fill" /></li>
                  <li><i className="ri-star-line" /></li>
                </ul>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div
              className="single-testimonials-card"
              data-aos="fade-up"
              data-aos-delay={80}
              data-aos-duration={800}
              data-aos-once="true"
            >
              <p>
                لقد كان فريق سلسلا استثنائيًا منذ البداية. كشركة، بدأنا بفكرة
                شبه واضحة عما أردناه وكيفية الحصول عليه. لقد جعلوها حقيقة.
              </p>
              <div className="info-item-box">
                <ExportedImage
                  src="/images/CL2.jpeg"
                  className="rounded-circle"
                  alt="image"
                  width={60}
                  height={60}
                />
                <h4>المدير التنفيذي</h4>
                <ul className="rating-list">
                  <li><i className="ri-star-fill" /></li>
                  <li><i className="ri-star-fill" /></li>
                  <li><i className="ri-star-fill" /></li>
                  <li><i className="ri-star-fill" /></li>
                  <li><i className="ri-star-line" /></li>
                </ul>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div
              className="single-testimonials-card"
              data-aos="fade-up"
              data-aos-delay={60}
              data-aos-duration={600}
              data-aos-once="true"
            >
              <p>
                كان فريق سلسلا محترفًا للغاية وقادرًا على التعامل مع مجموعة
                واسعة من المهام. قام فريقهم البعيد أيضًا بعمل رائع على الرغم
                من اختلاف المنطقة الزمنية والثقافية.
              </p>
              <div className="info-item-box">
                <ExportedImage
                  src="/images/CL3.jpg"
                  className="rounded-circle"
                  alt="image"
                  width={60}
                  height={60}
                />
                <h4>المدير التنفيذي</h4>
                <ul className="rating-list">
                  <li><i className="ri-star-fill" /></li>
                  <li><i className="ri-star-fill" /></li>
                  <li><i className="ri-star-fill" /></li>
                  <li><i className="ri-star-fill" /></li>
                  <li><i className="ri-star-line" /></li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          
          {/* Additional slides as needed */}
          <SwiperSlide>
            <div
              className="single-testimonials-card"
              data-aos="fade-up"
              data-aos-delay={70}
              data-aos-duration={700}
              data-aos-once="true"
            >
              <p>
                لقد كان فريق سلسلا استثنائيًا منذ البداية. كشركة، بدأنا بفكرة
                شبه واضحة عما أردناه وكيفية الحصول عليه. لقد جعلوها حقيقة.
              </p>
              <div className="info-item-box">
                <ExportedImage
                  src="/images/CL1.jpg"
                  className="rounded-circle"
                  alt="image"
                  width={60}
                  height={60}
                />
                <h4>المدير التنفيذي</h4>
                <ul className="rating-list">
                  <li><i className="ri-star-fill" /></li>
                  <li><i className="ri-star-fill" /></li>
                  <li><i className="ri-star-fill" /></li>
                  <li><i className="ri-star-fill" /></li>
                  <li><i className="ri-star-line" /></li>
                </ul>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="single-testimonials-card"
              data-aos="fade-up"
              data-aos-delay={90}
              data-aos-duration={900}
              data-aos-once="true"
            >
              <p>
                تمنحنا تقاريرنا الجديدة إمكانية رؤية البيانات والوصول إليها
                بطرق لم تكن لدينا من قبل. لقد تم تحرير بياناتنا وهي تساعدنا
                الآن على اتخاذ قرارات حاسمة بشكل أسرع.
              </p>
              <div className="info-item-box">
                <ExportedImage
                  src="/images/CL2.jpeg"
                  className="rounded-circle"
                  alt="image"
                  width={60}
                  height={60}
                />
                <h4>المدير التنفيذي</h4>

                <ul className="rating-list">
                  <li><i className="ri-star-fill" /></li>
                  <li><i className="ri-star-fill" /></li>
                  <li><i className="ri-star-fill" /></li>
                  <li><i className="ri-star-fill" /></li>
                  <li><i className="ri-star-line" /></li>
                </ul>

              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          display: none !important; /* Hide the navigation arrows */
        }
      `}</style>
    </div>
  );
};

export default TestimonialsArea;
