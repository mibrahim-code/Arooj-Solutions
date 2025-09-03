"use client";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsArea = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const testimonials = [
    {
      text: "Our new reports give us visibility and access to data in ways we never had before. Our data has been liberated and is now helping us make critical decisions faster.",
    },
    {
      text: "The Arooj Solutions team has been exceptional from the start. As a company, we began with a semi-clear idea of what we wanted and how to get it. They made it a reality.",
    },
    {
      text: "The Arooj Solutions team was highly professional and capable of handling a wide range of tasks. Their remote team also did an excellent job despite the time zone and cultural differences.",
    },
  ];

  return (
    <div className="testimonials-area pt-50 pb-100">
      <div className="container overflow-hidden">
        {/* Section Title */}
        <div className="section-title section-style-two text-center mb-8">
          <div className="section-bg-text">TESTIMONIALS</div>
          <span className="block text-sm text-gray-500">Testimonials</span>
          <h2 className="text-2xl font-bold">What Our Clients Say</h2>
        </div>

        {/* Slick Slider */}
        <div className="max-w-full overflow-hidden">
          <Slider {...settings}>
            {testimonials.map((t, index) => (
              <div key={index} className="px-3">
                <div className="single-testimonials-card p-6 rounded-2xl shadow-md bg-white text-center">
                  <p className="text-gray-700 text-sm sm:text-base">{t.text}</p>
                  <ul className="rating-list flex justify-center gap-1 text-yellow-500 text-sm mt-4">
                    <li>
                      <i className="ri-star-fill" />
                    </li>
                    <li>
                      <i className="ri-star-fill" />
                    </li>
                    <li>
                      <i className="ri-star-fill" />
                    </li>
                    <li>
                      <i className="ri-star-fill" />
                    </li>
                    <li>
                      <i className="ri-star-line" />
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsArea;
