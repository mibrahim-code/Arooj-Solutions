// components/GoTopButton.js

"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GoTopButton = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="go-top"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="500"
      data-aos-once="true"
      onClick={handleScrollToTop}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        cursor: 'pointer',
        zIndex: 1000
      }}
    >
      <i className="ri-arrow-up-s-line"></i>
    </div>
  );
};

export default GoTopButton;
