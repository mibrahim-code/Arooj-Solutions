"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

const BlogSwiper = () => {
  return (
    <div className="blog-area pt-100 pb-75">
      <div className="container">
        <div className="section-title text-center">
          <span>Cybersecurity & AI</span>
          <h2>Latest Industry Insights</h2>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            576: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <div
              className="blog-card"
              data-aos="fade-up"
              data-aos-delay={80}
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="row items-center text-center md:text-left">
                <div className="col-lg-6 col-md-6 col-sm-12 flex justify-center">
                  <div className="blog-image">
                    <Link href="#">
                      <ExportedImage
                        width={261}
                        height={278}
                        src="/images/blog-1.jpg"
                        alt="NCA Compliance"
                        className="mx-auto"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="blog-content text-center md:text-left">
                    <div className="date">July 9, 2024</div>
                    <h3>
                      <Link href="#">
                        Understanding NCA Essential Cybersecurity Controls
                      </Link>
                    </h3>
                    <p>
                      Learn how Saudi businesses can achieve compliance with NCA regulations while strengthening their security posture.
                    </p>
                    <Link href="#" className="blog-btn mx-auto md:mx-0">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="blog-card"
              data-aos="fade-up"
              data-aos-delay={890}
              data-aos-duration={900}
              data-aos-once="true"
            >
              <div className="row items-center text-center md:text-left">
                <div className="col-lg-6 col-md-6 col-sm-12 flex justify-center">
                  <div className="blog-image">
                    <Link href="#">
                      <ExportedImage
                        width={261}
                        height={278}
                        src="/images/blog-2.jpg"
                        alt="AI Trends"
                        className="mx-auto"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="blog-content text-center md:text-left">
                    <div className="date">July 7, 2024</div>
                    <h3>
                      <Link href="#">
                        AI Implementation Strategies for Saudi Vision 2030
                      </Link>
                    </h3>
                    <p>
                      Discover how artificial intelligence is transforming Saudi industries and creating new opportunities for growth.
                    </p>
                    <Link href="#" className="blog-btn mx-auto md:mx-0">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BlogSwiper;
