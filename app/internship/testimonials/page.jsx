"use client";
import React from "react";
import Slider from "react-slick";
import ExportedImage from "next-image-export-optimizer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsPage = () => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {/* Testimonials */}
    

     <section className="pb-10 md:pb-24 bg-white md:-mt-16">
  <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-12 mt-8">
      Employee Stories
    </h2>

            <div className="testimonials-slider">
              <Slider {...settings}>
                {/* Testimonial 1 */}
                <div className="px-2">
                  <div className="bg-blue-50 p-6 rounded-lg h-full">
                    <p className="italic mb-6">
                      At Selsla Technology, I’ve had the opportunity to grow
                      alongside a dynamic and passionate team. As General
                      Manager, I’m proud to lead operations, support innovation,
                      and help build impactful digital solutions for our
                      clients. Every day here is a step forward in creating
                      value, nurturing talent, and shaping the future of
                      technology.
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <ExportedImage
                          unoptimized={true}
                          src="images/avatar-134.png"
                          alt="General Manager"
                          width={48}
                          height={48}
                        />
                      </div>
                      <div>
                        <div className="font-semibold">Sawaira Urooj </div>
                        <div className="text-sm text-gray-500">
                          General Manager
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="px-2">
                  <div className="bg-blue-50 p-6 rounded-lg h-full">
                    <p className="italic mb-6">
                      I began my journey at Selsla Technology as a Next.js
                      Intern, eager to learn and grow. Working on real projects
                      with a supportive team helped me build skills and
                      confidence. Now, with 1.5 years of experience as a
                      Developer, I’m grateful for the growth and support I’ve
                      received. To aspiring developers: stay curious, keep
                      learning, and believe in your journey.
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <ExportedImage
                          unoptimized={true}
                          src="images/asia.jpg"
                          alt="Team Leader"
                          width={48}
                          height={48}
                        />
                      </div>
                      <div>
                        <div className="font-semibold">Asia Rasheed</div>
                        <div className="text-sm text-gray-500">
                          Developers Team Leader
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="px-2">
                  <div className="bg-blue-50 p-6 rounded-lg h-full">
                    <p className="italic mb-6">
                      I started my career at Selsla Technology as a Next.js
                      Intern, eager to apply my skills to real projects. From
                      day one, I was given tasks that challenged me and helped
                      me grow. Over time, I transitioned into a full-time role,
                      working across frontend and backend. Every project pushed
                      me to write cleaner code, improve system understanding,
                      and collaborate effectively.
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <ExportedImage
                          unoptimized={true}
                          src="images/talha3.jpg"
                          alt="Full Stack Developer"
                          width={48}
                          height={48}
                        />
                      </div>
                      <div>
                        <div className="font-semibold">Muhammad Talha</div>
                        <div className="text-sm text-gray-500">
                          Full Stack Developer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 4 */}
                <div className="px-2">
                  <div className="bg-blue-50 p-6 rounded-lg h-full">
                    <p className="italic mb-6">
                      Joining Selsla Technology was a turning point in my
                      career. From day one, I’ve been part of a talented team
                      that values innovation, collaboration, and continuous
                      growth. Each project pushes me to learn new skills and
                      contribute meaningfully. I’m proud to be part of a company
                      that’s shaping future technology while genuinely investing
                      in its people.
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <ExportedImage
                          unoptimized={true}
                          src="images/yamman.jpeg"
                          alt="Developer"
                          width={48}
                          height={48}
                        />
                      </div>
                      <div>
                        <div className="font-semibold">Yamman Arif</div>
                        <div className="text-sm text-gray-500">
                          Full Stack Developer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 5 */}
                <div className="px-2">
                  <div className="bg-blue-50 p-6 rounded-lg h-full">
                    <p className="italic mb-6">
                      Joining Selsla Technology as a Graphic Designer has been a
                      rewarding journey. From day one, I’ve worked on real
                      projects that challenged my creativity and helped me grow.
                      The supportive team and open environment have made my
                      learning experience meaningful. I'm proud to contribute to
                      a company that values design and innovation.
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <ExportedImage
                          unoptimized={true}
                          src="images/avatar-135.png"
                          alt="Graphic Designer"
                          width={48}
                          height={48}
                        />
                      </div>
                      <div>
                        <div className="font-semibold">Maida Naeem</div>
                        <div className="text-sm text-gray-500">
                          Graphic Designer Team Lead
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 6 */}

                <div className="px-2">
                  <div className="bg-blue-50 p-6 rounded-lg h-full">
                    <p className="italic mb-6">
                      Joining Selsla Technology was a turning point in my
                      career. As a Full Stack Developer, I’ve worked on
                      real-world projects that strengthened my front-end and
                      back-end skills. The culture here encourages innovation,
                      teamwork, and continuous growth. Every challenge has
                      pushed me to become a better developer and contribute
                      meaningfully.
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <ExportedImage
                          src="images/zain.jpg"
                          alt="Full Stack Developer"
                          width={48}
                          height={48}
                        />
                      </div>
                      <div>
                        <div className="font-semibold">Zain Ali</div>
                        <div className="text-sm text-gray-500">
                          Full Stack Developer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>
      </div> 

  );
};

export default TestimonialsPage;
