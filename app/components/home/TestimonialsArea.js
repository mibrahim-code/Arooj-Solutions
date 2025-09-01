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
          <div className="section-bg-text">TESTIMONIALS</div>
          <span>Testimonials</span>
          <h2>What Our Clients Say</h2>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }} // Added pagination configuration
          navigation={true} // Enabled navigation
          modules={[Autoplay, Pagination, Navigation]} // Added modules prop
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <div
              className="single-testimonials-card"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={500}
              data-aos-once="true"
            >
              <p>
                Our new reports give us visibility and access to data in ways we never had before. Our data has been liberated and is now helping us make critical decisions faster.
              </p>
              <div className="info-item-box">
                <ExportedImage
                  src="/images/CL1.jpg"
                  className="rounded-circle"
                  alt="image"
                  width={60}
                  height={60}
                />
                <h4>CEO</h4>
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
              data-aos-delay={80}
              data-aos-duration={800}
              data-aos-once="true"
            >
              <p>
                The Arooj Solutions team has been exceptional from the start. As a company, we began with a semi-clear idea of what we wanted and how to get it. They made it a reality.
              </p>
              <div className="info-item-box">
                <ExportedImage
                  src="/images/CL2.jpeg"
                  className="rounded-circle"
                  alt="image"
                  width={60}
                  height={60}
                />
                <h4>CEO</h4>
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
              data-aos-delay={60}
              data-aos-duration={600}
              data-aos-once="true"
            >
              <p>
                The Arooj Solutions team was highly professional and capable of handling a wide range of tasks. Their remote team also did an excellent job despite the time zone and cultural differences.
              </p>
              <div className="info-item-box">
                <ExportedImage
                  src="/images/CL3.jpg"
                  className="rounded-circle"
                  alt="image"
                  width={60}
                  height={60}
                />
                <h4>CEO</h4>
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
              data-aos-delay={70}
              data-aos-duration={700}
              data-aos-once="true"
            >
              <p>
                The Arooj Solutions team has been exceptional from the start. As a company, we began with a semi-clear idea of what we wanted and how to get it. They made it a reality.
              </p>
              <div className="info-item-box">
                <ExportedImage
                  src="/images/CL1.jpg"
                  className="rounded-circle"
                  alt="image"
                  width={60}
                  height={60}
                />
                <h4>CEO</h4>
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
                Our new reports give us visibility and access to data in ways we never had before. Our data has been liberated and is now helping us make critical decisions faster.
              </p>
              <div className="info-item-box">
                <ExportedImage
                  src="/images/CL2.jpeg"
                  className="rounded-circle"
                  alt="image"
                  width={60}
                  height={60}
                />
                <h4>CEO</h4>
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
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsArea;