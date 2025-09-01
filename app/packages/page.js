"use client"

import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoTopButton from '../components/GoTopButton'
import PageBanner from '../components/packages/PageBanner'
import Navbar3 from '../components/Navbar3'
import ExportedImage from 'next-image-export-optimizer';
const page = () => {
  return (
    <div>

      <Navbar3 />
      {/* <Navbar /> */}
      <PageBanner />
      <div class="text-center mt-5">
  <h3 class="text-2xl font-semibold mt-2">الباقات</h3>
  <h2 class="text-4xl font-bold mt-2">الجودة العالية بأفضل الأسعار</h2>
  <div class="mt-3">
    <p>يمكنك الآن طلب خدمات سلسلا واختيار الباقة المناسبة لك، واحصل على خدمة متكاملة تعزز نجاح عملك الرقمي.</p>
  </div>
</div>

<div class="p-10  ">
  <div class="flex gap-3  flex-wrap justify-around space-y-6 md:space-y-0">
     
    <div class="w-full border-2 border-white  md:w-5/12  rounded-lg shadow-lg p-6">
      <div class="flex flex-col items-center">
        <div class="w-12 h-12  flex justify-center items-center">
        <ExportedImage
                    src="/images/app-icon.png"
                    alt="Website Design"
                    width={250}
                    height={250}
                  />
        </div>
        <h2 class="text-xl font-semibold text-gray-800 my-4">تصميم الموقع</h2>
      </div>
    </div>

 
    <div class="w-full border-2 border-white  md:w-5/12  rounded-lg shadow-lg p-6">
      <div class="flex flex-col items-center">
        <div class="w-12 h-12  flex justify-center items-center">
        <ExportedImage
                    src="/images/graphic-design-icon.png"
                    alt="Graphic Design"
                    width={250}
                    height={250}
                  />
        </div>
        <h2 class="text-xl font-semibold text-gray-800 my-4">تصميم جرافيك</h2>
      </div>
    </div>

  
    <div class="w-full border-2 border-white  md:w-5/12  rounded-lg shadow-lg p-6 ">
      <div class="flex flex-col items-center">
        <div class="w-12 h-12  flex justify-center items-center">
        <ExportedImage
                    src="/images/social-icon.png"
                    alt="Social Media management"
                    width={250}
                    height={250}
                  />
        </div>
        <h2 class="text-xl font-semibold text-gray-800 my-4">إدارة صفحات السوشيال ميديا</h2>
      </div>
    </div>

   
    <div class="w-full md:w-5/12 border-2 border-white   rounded-lg shadow-lg p-6">
      <div class="flex flex-col items-center">
        <div class="w-12 h-12  flex justify-center items-center">
        <ExportedImage
                    src="/images/seo-icon.png"
                    alt="SEO Services"
                    width={250}
                    height={250}
                  />
        </div>
        <h2 class="text-xl font-semibold text-gray-800 my-4">خدمات السيو</h2>
      </div>
    </div>
  </div>
</div>


      <Footer />
      <GoTopButton />
    </div>
  )
}

export default page
