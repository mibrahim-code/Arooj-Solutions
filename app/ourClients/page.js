"use client"
import React from 'react'
import Navbar3 from '../components/Navbar3'
import Footer from '../components/Footer'
import GoTopButton from '../components/GoTopButton'
import Link from 'next/link'
import ExportedImage from 'next-image-export-optimizer'

const page = () => {
  return (
    <div>
      <Navbar3 />

      <div className="page-banner-area bg-3 jarallax" data-jarallax='{"speed": 0.3}'   style={{ position: "relative" }}>
      <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            background: "rgba(0, 0, 0, 0.5)",
            transition: "opacity 0.5s ease",
            zIndex: 0,
          }}
        />
                <div className="container">
                    <div className="page-banner-content" data-aos="fade-right" data-aos-delay="50">
                        <h2>عملاؤنا وشركاء نجاحنا</h2>
                        <ul>
                            <li>
                                <Link href="/" passHref>
                                    الصفحة الرئيسية
                                </Link>
                            </li>
                            <li>مَلَفّ</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center pt-12 pb-12 px-4 mx-14 md:mx-28">
  <h2 className="text-4xl font-bold mb-4">آراء عملاؤنا</h2>
  <p className="mb-6 text-2xl">تستخدم الشركات من مختلف المناطق خدماتنا للمساعدة في إدارة أعمالها.</p>

  {/* First group of 4 images */}
  <div className="flex flex-wrap justify-around gap-4 mb-10">
    <div className="w-24 md:w-32 lg:w-40">
      <ExportedImage width={100} height={100} src="/images/CL1.jpg" alt="Client" className="w-full h-auto" />
    </div>
    <div className="w-24 md:w-32 lg:w-40">
      <ExportedImage width={100} height={100} src="/images/CL2.jpeg" alt="Client" className="w-full h-auto" />
    </div>
    <div className="w-24 md:w-32 lg:w-40">
      <ExportedImage width={100} height={100} src="/images/CL3.jpg" alt="Client" className="w-full h-auto" />
    </div>
    <div className="w-24 md:w-32 lg:w-40">
      <ExportedImage width={100} height={100} src="/images/1.1.jpeg" alt="Client" className="w-full h-auto mt-5" />
    </div>
  </div>

  {/* Second group of 4 images */}
  <div className="flex flex-wrap justify-around gap-4">
    <div className="w-24 md:w-32 lg:w-40">
      <ExportedImage width={100} height={100} src="/images/1.2.png" alt="Client" className="w-full h-auto mt-5" />
    </div>
    <div className="w-24 md:w-32 lg:w-40">
      <ExportedImage width={100} height={100} src="/images/1.6.png" alt="Client" className="w-full h-auto mt-5" />
    </div>
    <div className="w-24 md:w-32 lg:w-40">
      <ExportedImage width={100} height={100} src="/images/5.png" alt="Client" className="w-full h-auto" />
    </div>
    <div className="w-24 md:w-32 lg:w-40">
      <ExportedImage width={100} height={100} src="/images/8.png" alt="Client" className="w-full h-auto" />
    </div>
  </div>


  
 {/* Third group of 4 images */}
  {/* <div className="flex flex-wrap justify-around gap-4 mb-10">
    <div className="w-24 md:w-32 lg:w-40">
      <ExportedImage width={100} height={100} src="/images/1.1.png" alt="Client" className="w-full h-auto" />
    </div>
    <div className="w-24 md:w-32 lg:w-40">
      <ExportedImage width={100} height={100} src="/images/1.2.png" alt="Client" className="w-full h-auto" />
    </div>
    <div className="w-24 md:w-32 lg:w-40">
      <ExportedImage width={100} height={100} src="/images/3.png" alt="Client" className="w-full h-auto" />
    </div>
    <div className="w-24 md:w-32 lg:w-40">
      <ExportedImage width={100} height={100} src="/images/4.png" alt="Client" className="w-full h-auto" />
    </div>
  </div> */}



</div>


      <Footer />
      <GoTopButton />
    </div>
  )
}

export default page
