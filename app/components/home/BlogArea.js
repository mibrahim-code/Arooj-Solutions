"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import Link from 'next/link';

import ExportedImage from "next-image-export-optimizer";
// Configure Swiper to use modules
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

const BlogSwiper = () => {
  return (

    

    <div className="blog-area pt-100 pb-75">
      <div className="container">
        <div className="section-title">
          <span>شرط</span>
          <h2>
            اقرأ أحدث مدونتنا 
            {/* <span className="overlay" /> */}
          </h2>
        </div>
        <Swiper
          spaceBetween={30} // Space between slides
          slidesPerView={2} // Number of slides per view
          loop={true} // Enable looping
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto slide with 3 seconds delay
          // pagination={{ clickable: true }} // Enable pagination
          breakpoints={{
            640: {
              slidesPerView: 1, // 1 slide for mobile devices
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2, // 2 slides for tablets and above
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
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="blog-image">
                    <Link href="/blog1">
                      <ExportedImage 
                        width={261}
                        height={278}
                        src="/images/blog-1.jpg" 
                        alt="image" 
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6">


                <div className="blog-content">
  <div className="date">9 يوليو، 2024</div>
  <h3>
    <Link href="/blog1">
      كيف تهيمن التكنولوجيا على العالم الجديد عام 2024
    </Link>
  </h3>
  <p>
    في عام 2024، أصبحت البرمجيات تلعب دوراً محورياً في تعزيز الكفاءة وتبسيط العمليات اليومية للشركات.
</p>

  <Link href="/blog1" className="blog-btn">
    عرض المزيد
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
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="blog-image">
                    <Link href="/blog2">
                      <ExportedImage 
                        width={261}
                        height={278}
                        src="/images/blog-2.jpg" 
                        alt="image" 
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6">

                <div className="blog-content">
  <div className="date">7 يوليو، 2024</div>
  <h3>
    <Link href="/blog2">
      أهم 10 اتجاهات تكنولوجية مشهورة في عام 2024
    </Link>
  </h3>
  <p>
    مع تسارع تطور التكنولوجيا، تظهر توجهات جديدة تؤثر بشكل كبير على الابتكارات الرقمية.
</p>

  <Link href="/blog2" className="blog-btn">
    عرض المزيد
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
              data-aos-delay={80}
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="blog-image">
                    <Link href="/blog1">
                      <ExportedImage 
                        width={261}
                        height={278}
                        src="/images/blog-1.jpg" 
                        alt="image" 
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6">


                <div className="blog-content">
  <div className="date">9 يوليو، 2024</div>
  <h3>
    <Link href="/blog1">
      كيف تهيمن التكنولوجيا على العالم الجديد عام 2024
    </Link>
  </h3>
  <p>
    في عام 2024، أصبحت البرمجيات تلعب دوراً محورياً في تعزيز الكفاءة وتبسيط العمليات اليومية للشركات.
</p>

  <Link href="/blog1" className="blog-btn">
    عرض المزيد
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
              data-aos-delay={90}
              data-aos-duration={900}
              data-aos-once="true"
            >
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="blog-image">
                    <Link href="/blog2">
                      <ExportedImage 
                        width={261}
                        height={278}
                        src="/images/blog-2.jpg" 
                        alt="image" 
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6">


                <div className="blog-content">
  <div className="date">7 يوليو، 2024</div>
  <h3>
    <Link href="/blog2">
      أهم 10 اتجاهات تكنولوجية مشهورة في عام 2024
    </Link>
  </h3>
  <p>
    مع تسارع تطور التكنولوجيا، تظهر توجهات جديدة تؤثر بشكل كبير على الابتكارات الرقمية.
</p>

  <Link href="/blog2" className="blog-btn">
    عرض المزيد
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


