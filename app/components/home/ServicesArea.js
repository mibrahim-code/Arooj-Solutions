"use client";

import React from "react";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const ServicesArea = () => {
  return (
    <div className="services-area margin-zero ptb-100">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-4 col-md-12">
            <div
              className="services-section-content"
              data-aos="fade-down"
              data-aos-delay={80}
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="services-bg-text">خدمات</div>
              <span>خدمات</span>
              <h3>الخدمات التي نقدمها</h3>
              <p>ثق بنا لتقديم خدمات استثنائية تلبي متطلباتك الفريدة.</p>
              <div className="services-section-btn">
                <Link href="/services" className="default-btn">
                  استكشاف جميع الخدمات
                </Link>
              </div>
            </div>
          </div>

          {/* Right Swiper Slider */}
          <div className="col-lg-8 col-md-12">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              // slidesPerView={2}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            >
              {/* Example Slides */}
              {/* slide 1 */}
              <SwiperSlide>
              <div className="services-item">
                  <div className="services-image">
                    <Link href="/services">
                      <ExportedImage
                        width={500}
                        height={300}
                        src="images/services-1.jpg"
                        alt="image"
                      />
                    </Link>
                  </div>
                  <div className="services-content">
                    <h3>
                      <Link href="/services">خدمات التكنولوجيا</Link>
                    </h3>
                    <p>
                      تكون التكنولوجيا الخاصة بك جيدة بقدر جودة البنية التحتية
                      التي تقف خلفها. نحن هنا لنضمن أن البنية التحتية ذات كفاءة
                      عالية .
                    </p>
                    <Link href="/services" className="services-btn">
                      عرض التفاصيل
                    </Link>
                  </div>
                </div>
              </SwiperSlide>


              {/* slide 2 */}
              <SwiperSlide>
              <div className="services-item">
                  <div className="services-image">
                    <Link href="/services">
                      <ExportedImage
                        width={500}
                        height={300}
                        src="images/services-2.jpg"
                        alt="image"
                      />
                    </Link>
                  </div>
                  <div className="services-content">
                    <h3>
                      <Link href="/services">الخدمات السحابية والتقنية</Link>
                    </h3>
                    <p>
                      نقدم حلول لتطوير الويب وعمليات البيع بالتجزئة للتجارة
                      الإلكترونية الذي يضمن حصول عملائك على تجربة سلسة.
                    </p>
                    <Link href="/services" className="services-btn">
                      عرض التفاصيل
                    </Link>
                  </div>
                </div>
              </SwiperSlide>


              {/* slide 3 */}
              <SwiperSlide>
              <div className="services-item">
                  <div className="services-image">
                    <Link href="/services">
                      <ExportedImage
                        width={500}
                        height={300}
                        src="images/services-3.jpg"
                        alt="image"
                      />
                    </Link>
                  </div>
                  <div className="services-content">
                    <h3>
                      <Link href="/services">التنمية المخصصة</Link>
                    </h3>
                    <p> الطرق المختصرة في تطوير التطبيقات قد تكون مكلفة لاحقًا، لذا نقدم حلولًا مخصصة تضمن التنفيذ الصحيح من البداية. </p>
                    {/* <p>
                      يمكن أن تكون الطرق المختصرة لتطوير التطبيقات مكلفة على
                      المدى الطويل. إليك كيفية حصول سلسلا على التطوير المخصص
                      بشكل صحيح من المرة الأولى.
                    </p> */}
                    <Link href="/services" className="services-btn">
                      عرض التفاصيل
                    </Link>
                  </div>
                </div>
              </SwiperSlide>


                {/* slide 4 */}
              <SwiperSlide>
              <div className="services-item">
                  <div className="services-image">
                    <Link href="/services">
                      <ExportedImage
                        width={500}
                        height={300}
                        src="images/services-4.jpg"
                        alt="image"
                      />
                    </Link>
                  </div>
                  <div className="services-content">
                    <h3>
                      <Link href="/services">إدارة البيانات</Link>
                    </h3>
                    <p>
                      تهدف شركة سلسلا إلى إطلاق الإمكانات الكاملة لبيانات عملائها
                      وتحويل أعمالها من خلال رؤى وتحليلات قوية.
                    </p>
                    <Link href="/services" className="services-btn">
                      عرض التفاصيل
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              {/* Add more SwiperSlide components as needed */}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesArea;








// import React from "react";
// import Link from "next/link";
// import ExportedImage from "next-image-export-optimizer";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css"; // Import Swiper styles
// import SwiperCore, { Autoplay, Pagination } from 'swiper';

// // Install Swiper modules
// import "swiper/css";
// import "swiper/css/autoplay";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// const ServicesArea = () => {
//   return (
//     <div className="services-area margin-zero ptb-100">
//       <div className="container-fluid">
//         <div className="row align-items-center">
//           <div className="col-lg-4 col-md-12">
//             <div
//               className="services-section-content"
//               data-aos="fade-down"
//               data-aos-delay={80}
//               data-aos-duration={800}
//               data-aos-once="true"
//             >
//               <div className="services-bg-text">خدمات</div>
//               <span>خدمات</span>
//               <h3>الخدمات التي نقدمها</h3>
//               <p>ثق بنا لتقديم خدمات استثنائية تلبي متطلباتك الفريدة.</p>
//               <div className="services-section-btn">
//                 <Link href="/services" className="default-btn">
//                 استكشاف جميع الخدمات
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-8 col-md-12">
//             <Swiper
//               spaceBetween={30}  // Space between slides
//               slidesPerView={3}   // Show 3 slides at once
//               loop={true}         // Enable looping
//               autoplay={{ 
//                 delay: 300,       // Delay between slides in ms
//                 disableOnInteraction: false // Keeps autoplay running after interactions
//               }}  
//               // pagination={{ clickable: true }} // Pagination controls
//               breakpoints={{
//                 // Responsive breakpoints
//                 320: {
//                   slidesPerView: 1,
//                   spaceBetween: 10,
//                 },
//                 768: {
//                   slidesPerView: 2,
//                   spaceBetween: 20,
//                 },
//                 1024: {
//                   slidesPerView: 3,
//                   spaceBetween: 30,
//                 },
//               }}
//             >
//               {/* Slide 1 */}
              // <SwiperSlide>
              //   <div className="services-item">
              //     <div className="services-image">
              //       <Link href="/services">
              //         <ExportedImage
              //           width={500}
              //           height={300}
              //           src="images/services-1.jpg"
              //           alt="image"
              //         />
              //       </Link>
              //     </div>
              //     <div className="services-content">
              //       <h3>
              //         <Link href="/services">خدمات التكنولوجيا</Link>
              //       </h3>
              //       <p>
              //         تكون التكنولوجيا الخاصة بك جيدة بقدر جودة البنية التحتية
              //         التي تقف خلفها. نحن هنا لنضمن أن البنية التحتية ذات كفاءة
              //         عالية .
              //       </p>
              //       <Link href="/services" className="services-btn">
              //         عرض التفاصيل
              //       </Link>
              //     </div>
              //   </div>
              // </SwiperSlide>

              // {/* Slide 2 */}
              // <SwiperSlide>
              //   <div className="services-item">
              //     <div className="services-image">
              //       <Link href="/services">
              //         <ExportedImage
              //           width={500}
              //           height={300}
              //           src="images/services-2.jpg"
              //           alt="image"
              //         />
              //       </Link>
              //     </div>
              //     <div className="services-content">
              //       <h3>
              //         <Link href="/services">الخدمات السحابية والتقنية</Link>
              //       </h3>
              //       <p>
              //         نقدم حلول لتطوير الويب وعمليات البيع بالتجزئة للتجارة
              //         الإلكترونية الذي يضمن حصول عملائك على تجربة سلسة.
              //       </p>
              //       <Link href="/services" className="services-btn">
              //         عرض التفاصيل
              //       </Link>
              //     </div>
              //   </div>
              // </SwiperSlide>

              // {/* Slide 3 */}
              // <SwiperSlide>
              //   <div className="services-item">
              //     <div className="services-image">
              //       <Link href="/services">
              //         <ExportedImage
              //           width={500}
              //           height={300}
              //           src="images/services-3.jpg"
              //           alt="image"
              //         />
              //       </Link>
              //     </div>
              //     <div className="services-content">
              //       <h3>
              //         <Link href="/services">التنمية المخصصة</Link>
              //       </h3>
              //       <p>
              //         يمكن أن تكون الطرق المختصرة لتطوير التطبيقات مكلفة على
              //         المدى الطويل. إليك كيفية حصول سلسلا على التطوير المخصص
              //         بشكل صحيح من المرة الأولى.
              //       </p>
              //       <Link href="/services" className="services-btn">
              //         عرض التفاصيل
              //       </Link>
              //     </div>
              //   </div>
              // </SwiperSlide>

              // {/* Slide 4 */}
              // <SwiperSlide>
              //   <div className="services-item">
              //     <div className="services-image">
              //       <Link href="/services">
              //         <ExportedImage
              //           width={500}
              //           height={300}
              //           src="images/services-4.jpg"
              //           alt="image"
              //         />
              //       </Link>
              //     </div>
              //     <div className="services-content">
              //       <h3>
              //         <Link href="/services">إدارة البيانات</Link>
              //       </h3>
              //       <p>
              //         تهدف شركة سلسلا إلى إطلاق الإمكانات الكاملة لبيانات عملائها
              //         وتحويل أعمالها من خلال رؤى وتحليلات قوية.
              //       </p>
              //       <Link href="/services" className="services-btn">
              //         عرض التفاصيل
              //       </Link>
              //     </div>
              //   </div>
              // </SwiperSlide>

//               {/* Add more slides as needed */}
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesArea;
