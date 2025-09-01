"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

import ExportedImage from "next-image-export-optimizer";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const PartnerSwiper = () => {
  return (
    <div className="partner-area ptb-100">
      <div className="container">
        <Swiper
          spaceBetween={30}
          slidesPerView={3} // Number of slides to show at a time
          loop={true} // Enable looping
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto scroll with 3 seconds delay
          pagination={{ clickable: true }} // Enable pagination
          navigation={true} // Enable navigation arrows
          breakpoints={{
            640: {
              slidesPerView: 1, // 1 slide for mobile devices
            },
            768: {
              slidesPerView: 2, // 2 slides for tablets
            },
            1024: {
              slidesPerView: 5, // 3 slides for larger devices
            },
          }}
        >
          <SwiperSlide>
            <div
              className="partner-card"
              data-aos="fade-up"
              data-aos-delay={80}
              data-aos-duration={800}
              data-aos-once="true"
            >
              <Link href="#">
                <ExportedImage
                  width={150}
                  height={150}
                  src="/images/partner-1.png"
                  alt="partner"
                />
                <ExportedImage
                  width={150}
                  height={150}
                  src="/images/partner-hover-1.png"
                  alt="partner"
                />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="partner-card"
              data-aos="fade-up"
              data-aos-delay={80}
              data-aos-duration={800}
              data-aos-once="true"
            >
              <Link href="#">
                <ExportedImage
                  width={150}
                  height={150}
                  src="/images/partner-2.png"
                  alt="partner"
                />
                <ExportedImage
                  width={150}
                  height={150}
                  src="/images/partner-hover-2.png"
                  alt="partner"
                />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="partner-card"
              data-aos="fade-up"
              data-aos-delay={80}
              data-aos-duration={800}
              data-aos-once="true"
            >
              <Link href="#">
                <ExportedImage
                  width={150}
                  height={150}
                  src="/images/partner-3.png"
                  alt="partner"
                />
                <ExportedImage
                  width={150}
                  height={150}
                  src="/images/partner-hover-3.png"
                  alt="partner"
                />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="partner-card"
              data-aos="fade-up"
              data-aos-delay={80}
              data-aos-duration={800}
              data-aos-once="true"
            >
              <Link href="#">
                <ExportedImage
                  width={150}
                  height={150}
                  src="/images/partner-4.png"
                  alt="partner"
                />
                <ExportedImage
                  width={150}
                  height={150}
                  src="/images/partner-hover-4.png"
                  alt="partner"
                />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="partner-card"
              data-aos="fade-up"
              data-aos-delay={80}
              data-aos-duration={800}
              data-aos-once="true"
            >
              <Link href="#">
                <ExportedImage
                  width={150}
                  height={150}
                  src="/images/partner-5.png"
                  alt="partner"
                />
                <ExportedImage
                  width={150}
                  height={150}
                  src="/images/partner-hover-5.png"
                  alt="partner"
                />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="partner-card"
              data-aos="fade-up"
              data-aos-delay={80}
              data-aos-duration={800}
              data-aos-once="true"
            >
              <Link href="#">
                <ExportedImage
                  width={150}
                  height={150}
                  src="/images/partner-6.png"
                  alt="partner"
                />
                <ExportedImage
                  width={150}
                  height={150}
                  src="/images/partner-hover-6.png"
                  alt="partner"
                />
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PartnerSwiper;
