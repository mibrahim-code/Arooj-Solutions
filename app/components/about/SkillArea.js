// components/SkillArea.js
"use client"
import { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ExportedImage from 'next-image-export-optimizer';

const SkillArea = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="skill-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="skill-content">
              <span>SKILLSET</span>
              <h3>
                We Have A Set Of Skill With High Quality
              
              </h3>
            </div>

            <div
              className="skill-bar"
              data-percentage="92%"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <p className="progress-title-holder">
                <span className="progress-title">Software Development</span>
                <span className="progress-number-wrapper">
                  <span className="progress-number-mark">
                    <span className="percent"></span>
                    <span className="down-arrow"></span>
                  </span>
                </span>
              </p>
              <div className="progress-content-outter">
                <div className="progress-content"></div>
              </div>
            </div>

            <div
              className="skill-bar"
              data-percentage="80%"
              data-aos="fade-up"
              data-aos-delay="60"
            >
              <p className="progress-title-holder">
                <span className="progress-title">App Development</span>
                <span className="progress-number-wrapper">
                  <span className="progress-number-mark">
                    <span className="percent"></span>
                    <span className="down-arrow"></span>
                  </span>
                </span>
              </p>
              <div className="progress-content-outter bg-D5158F">
                <div className="progress-content bg-D5158F"></div>
              </div>
            </div>

            <div
              className="skill-bar"
              data-percentage="70%"
              data-aos="fade-up"
              data-aos-delay="70"
            >
              <p className="progress-title-holder">
                <span className="progress-title">Artificial Intelligence</span>
                <span className="progress-number-wrapper">
                  <span className="progress-number-mark">
                    <span className="percent"></span>
                    <span className="down-arrow"></span>
                  </span>
                </span>
              </p>
              <div className="progress-content-outter bg-FEB302">
                <div className="progress-content bg-FEB302"></div>
              </div>
            </div>

            <div
              className="skill-bar"
              data-percentage="45%"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              <p className="progress-title-holder">
                <span className="progress-title">Cyber Security</span>
                <span className="progress-number-wrapper">
                  <span className="progress-number-mark">
                    <span className="percent"></span>
                    <span className="down-arrow"></span>
                  </span>
                </span>
              </p>
              <div className="progress-content-outter bg-A66BFF">
                <div className="progress-content bg-A66BFF"></div>
              </div>
            </div>

            <div
              className="skill-bar-btn"
              data-aos="fade-up"
              data-aos-delay="90"
            >
              <Link href="#" legacyBehavior>
                <a className="default-btn">Explore More</a>
              </Link>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div
              className="skill-image"
              data-aos="fade-left"
              data-aos-delay="80"
            >
              <ExportedImage
                src="/images/skill-1.png"
                alt="Skill Image"
                width={500}
                height={500}
                unoptimized={true}
              />
              <div className="skill-shape-1">
                <ExportedImage
                  src="/images/skill-shape-1.png"
                  alt="Skill Shape 1"
                  width={150}
                  height={150}
                  unoptimized={true}
                />
              </div>
              <div className="skill-shape-2">
                <ExportedImage
                  src="/images/skill-shape-2.png"
                  alt="Skill Shape 2"
                  width={150}
                  height={150}
                  unoptimized={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="skill-bg-shape">
        <ExportedImage
          src="/images/skill-bg-shape.png"
          alt="Skill Background Shape"
          width={1920}
          height={1080}
          unoptimized={true}
        />
      </div>
    </div>
  );
};

export default SkillArea;
