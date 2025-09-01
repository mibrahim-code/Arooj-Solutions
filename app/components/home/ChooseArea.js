"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ChooseArea = () => {
  // Initialize AOS animation
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh(); // Refresh animation on component mount
  }, []);

  return (


    <div className="choose-area pt-100 pb-75">
    <div className="container">
      <div className="section-title section-style-two">
        <div className="section-bg-text">عملية</div>
        <span>عملية العمل</span>
        <h2>
          الخدمات التي نقدمها
          {/* <span className="overlay"></span> */}
        </h2>
        <p>ثق بنا لتقديم خدمات استثنائية تلبي متطلباتك الفريدة.</p>
      </div>

      <div className="container">
        <div className="row g-lg-4 justify-content-center">
          {" "}
          {/* Add g-lg-4 class here */}
          {/* <div className="col-md-4 col-sm-6">
            <div
              className="single-choose-card"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="choose-image" datatilt="">
                <Link href="#">
                  <ExportedImage
                    src="/images/choose-1.png"
                    alt="Customized Development"
                    width={150}
                    height={160}
                  />
                </Link>
                <div className="number">١</div>
              </div>
              <div className="choose-content">
                <h3>
                  <Link href="#">التنمية المخصصة</Link>
                </h3>
                <p>
                  يمكن أن تكون الطرق المختصرة تطوير التطبيقات مكلفة على
                  المدى الطويل. إليك كيفية حصول سلسلا على التطوير المخصص
                  بشكل صحيح من المرة الأولى.
                </p>
              </div>
            </div>
          </div> */}
          <div className="col-md-4 col-sm-6">
            <div
              className="single-choose-card"
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="choose-image" datatilt="">
                <Link href="#">
                  <ExportedImage
                    src="/images/choose-2.png"
                    alt="Cloud and Technical Services"
                    width={150}
                    height={160}
                  />
                </Link>
                {/* <div className="number">٢</div> */}
                <div className="number">١</div>
              </div>
              <div className="choose-content">
                <h3>
                  <Link href="#">الخدمات السحابية والتقنية</Link>
                </h3>
                <p>
                  نقدم حلول لتطوير الويب وعمليات البيع بالتجزئة للتجارة
                  الإلكترونية الذي يضمن حصول عملائك على تجربة سلسة.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div
              className="single-choose-card"
              data-aos="fade-up"
              data-aos-delay="70"
              data-aos-duration="700"
              data-aos-once="true"
            >
              <div className="choose-image" datatilt="">
                <Link href="#">
                  <ExportedImage
                    src="/images/choose-3.png"
                    alt="Technology Services"
                    width={150}
                    height={160}
                  />
                </Link>
                <div className="number">٢</div>
              </div>
              <div className="choose-content">
                <h3>
                  <Link href="#">خدمات التكنولوجيا</Link>
                </h3>
                <p>
                  تكون التكنولوجيا الخاصة بك جيدة بقدر جودة البنية التحتية
                  التي تقف خلفها. نحن هنا لنضمن أن البنية التحتية ذات
                  كفاءة عالية .
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div
              className="single-choose-card"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="choose-image" datatilt="">
                <Link href="#">
                  <ExportedImage
                    src="/images/choose-1.png"
                    alt="App Solutions"
                    width={150}
                    height={160}
                  />
                </Link>
                <div className="number">٣</div>

              </div>
              <div className="choose-content">
                <h3>
                  <Link href="#">حلول التطبيقات</Link>
                </h3>
                <p>
                  من الإنتاجية إلى المبيعات، يؤثر الهاتف المحمول على كل
                  أعمالك. يمكن أن نقدم لك في سلسلا خدمات تطبيقات الهاتف
                  المحمول وتحسين موقع الويب للحصول على أفضل النتائج .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-lg-4 justify-content-center">
          {" "}
          {/* Add g-lg-4 class here */}
         
          <div className="col-md-4 col-sm-6">
            <div
              className="single-choose-card"
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="choose-image" datatilt="">
                <Link href="#">
                  <ExportedImage
                    src="/images/choose-2.png"
                    alt="Social Media Marketing"
                    width={150}
                    height={160}
                  />
                </Link>
                <div className="number">٤</div>

              </div>
              <div className="choose-content">
                <h3>
                  <Link href="#">تسويق وسائل الاعلام الاجتماعية</Link>
                </h3>
                <p>
                  قم بإنشاء محتوى مقنع، واستخدم التسويق الهادف، واستفد من
                  التقارير المستندة على البيانات لتطوير علامتك التجارية
                  وتحقيق أهداف عملك مع سلسلا.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div
              className="single-choose-card"
              data-aos="fade-up"
              data-aos-delay="70"
              data-aos-duration="700"
              data-aos-once="true"
            >
              

              <div className="choose-image" datatilt="">
                <Link href="#">
                  <ExportedImage
                    src="/images/choose-3.png"
                    alt="Data Management"
                    width={150}
                    height={160}
                  />
                </Link>
                <div className="number">٥</div>

              </div>


              <div className="choose-content">
                <h3>
                  <Link href="#">إدارة البيانات</Link>
                </h3>
                <p>
                  تهدف شركة سلسلا إلى إطلاق الإمكانات الكاملة لبيانات
                  عملائها وتحويل أعمالها من خلال رؤى وتحليلات قوية.
                </p>
              </div>


            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div
              className="single-choose-card"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >

                {/* *******************7********************** */}
              <div className="choose-image" datatilt="">
                <Link href="#">
                  <ExportedImage
                    src="/images/choose-1.png"
                    alt="App Solutions"
                    width={150}
                    height={160}
                  />
                </Link>
                <div className="number">٦</div>

              </div>



              <div className="choose-content">
                <h3>
                  <Link href="#"> تحسين محرك البحث</Link>
                </h3>
                <p>     ابحث عن الكلمات الرئيسية ذات الصلة وقم بدمجها بشكل استراتيجي في محتوى موقع الويب الخاص بك لزيادة ظهور محرك البحث إلى أقصى حد وجذب جمهورك المستهدف.           </p>
              </div>


            </div>

          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-lg-4 justify-content-center">
          {" "}
          {/* Add g-lg-4 class here */}
         
          <div className="col-md-6 col-sm-6">
            <div
              className="single-choose-card"
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="600"
              data-aos-once="true"
            >

{/* ********************************8************************* */}
              <div className="choose-image" datatilt="">
                <Link href="#">
                  <ExportedImage
                    src="/images/choose-2.png"
                    alt="Social Media Marketing"
                    width={150}
                    height={160}
                  />
                </Link>
                <div className="number">٧</div>

              </div>




              <div className="choose-content">
                <h3>
                  <Link href="#">   الويب والتجارة الإلكترونية  </Link>
                </h3>
                <p>
                الاستفادة من الخدمات السحابية أمر سهل، ولكن زيادة الفوائد أمر صعب. ما لم يكن لديك الشريك المناسب.                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div
              className="single-choose-card"
              data-aos="fade-up"
              data-aos-delay="70"
              data-aos-duration="700"
              data-aos-once="true"
            >
              <div className="choose-image" datatilt="">
                <Link href="#">
                  <ExportedImage
                    src="/images/choose-3.png"
                    alt="Data Management"
                    width={150}
                    height={160}
                  />
                </Link>
                {/* <div className="number">٩</div> */}
                <div className="number">٨</div>

              </div>
              <div className="choose-content">
                <h3>
                  <Link href="#"> إدارة وسائل التواصل الاجتماعي</Link>
                </h3>
                <p>
                قم بتبسيط استراتيجية المحتوى الخاصة بك، وتحسين جداول النشر، والتفاعل بشكل استباقي مع جمهورك لتأسيس تواجد قوي عبر الإنترنت وتعزيز العلاقات الدائمة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    // <div className="choose-area pt-100 pb-75">
    //   <div className="container">
    //     <div className="section-title section-style-two">
    //       <div className="section-bg-text">PROCESS</div>
    //       <span>WORK PROCESS</span>
    //       <h2>
    //         We Follow Four Simple Steps 
    //       </h2>
    //       <p>
    //         We are a leading technology solutions provider all over the world, with over 40 years of experience. Lorem ipsum dolor sit amet.
    //       </p>
    //     </div>

    //     <div className="row justify-content-center">
    //       {/* Step 1 */}
    //       <div className="col-lg-3 col-sm-6">
    //         <div
    //           className="single-choose-card"
    //           data-aos="fade-up"
    //           data-aos-delay="50"
    //           data-aos-duration="500"
    //         >
    //           <div className="choose-image" data-tilt="">
    //             <Link href="/services-details">
    //               <ExportedImage
    //                 src="/images/choose-1.png"
    //                 alt="Discussion Image"
    //                 width={140}
    //                 height={150}
    //                 unoptimized={true}
    //               />
    //             </Link>
    //             <div className="number">1</div>
    //           </div>
    //           <div className="choose-content">
    //             <h3>
    //               <Link href="#">Discussion</Link>
    //             </h3>
    //             <p>
    //               Lorem ipsum dolor sit amet consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Step 2 */}
    //       <div className="col-lg-3 col-sm-6">
    //         <div
    //           className="single-choose-card"
    //           data-aos="fade-up"
    //           data-aos-delay="60"
    //           data-aos-duration="600"
    //         >
    //           <div className="choose-image" data-tilt="">
    //             <Link href="/services-details">
    //               <ExportedImage
    //                 src="/images/choose-2.png"
    //                 alt="Testing Image"
    //                 width={140}
    //                 height={150}
    //                 unoptimized={true}
    //               />
    //             </Link>
    //             <div className="number">2</div>
    //           </div>
    //           <div className="choose-content">
    //             <h3>
    //               <Link href="#">Testing &amp; Trying</Link>
    //             </h3>
    //             <p>
    //               Lorem ipsum dolor sit amet consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Step 3 */}
    //       <div className="col-lg-3 col-sm-6">
    //         <div
    //           className="single-choose-card"
    //           data-aos="fade-up"
    //           data-aos-delay="70"
    //           data-aos-duration="700"
    //         >
    //           <div className="choose-image" data-tilt="">
    //             <Link href="/services-details">
    //               <ExportedImage
    //                 src="/images/choose-3.png"
    //                 alt="Ideas & Concept Image"
    //                 width={140}
    //                 height={150}
    //                 unoptimized={true}
    //               />
    //             </Link>
    //             <div className="number">3</div>
    //           </div>
    //           <div className="choose-content">
    //             <h3>
    //               <Link href="#">Ideas &amp; Concept</Link>
    //             </h3>
    //             <p>
    //               Lorem ipsum dolor sit amet consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Step 4 */}
    //       <div className="col-lg-3 col-sm-6">
    //         <div
    //           className="single-choose-card"
    //           data-aos="fade-up"
    //           data-aos-delay="80"
    //           data-aos-duration="800"
    //         >
    //           <div className="choose-image" data-tilt="">
    //             <Link href="/services-details">
    //               <ExportedImage
    //                 src="/images/choose-4.png"
    //                 alt="Execute & Install Image"
    //                 width={140}
    //                 height={150}
    //                 unoptimized={true}
    //               />
    //             </Link>
    //             <div className="number">4</div>
    //           </div>
    //           <div className="choose-content">
    //             <h3>
    //               <Link href="#">Execute &amp; Install</Link>
    //             </h3>
    //             <p>
    //               Lorem ipsum dolor sit amet consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>


  );
};

export default ChooseArea;
