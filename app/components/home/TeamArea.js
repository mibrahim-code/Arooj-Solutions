"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TeamArea = () => {
  // Initialize AOS animation
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh(); // Refresh animation on component mount
  }, []);

  return (

    <div className="team-area pt-100 pb-75">
    <div className="container">
      <div className="section-title section-style-two">
        <div className="section-bg-text">فريق</div>
        <span>عضو فريق</span>
        <h2>
          مستشار تكنولوجيا المعلومات لدينا
          {/* <span className="overlay" /> */}
        </h2>
        <p>
          نحن نتصدر الحلول التكنولوجية التي تقدم الشركة في جميع أنحاء
          العالم لأكثر من 40 عامًا.
        </p>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-3 col-sm-6">
          <div className="single-team-card">
            <div className="team-image" datatilt="">
              <ExportedImage
                width={261}
                height={279}
                src="images/avatar-136.png"
                alt="image"
              />
              <ul className="team-social">
                <li>
                  <Link href="https://www.linkedin.com/company/selslatechnology/posts/?feedView=all" target="_blank">
                    <i className="ri-linkedin-fill" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="team-content">
              <h3> Manal Muhammad </h3>
              <span>President &amp; CEO</span>
            </div>
          </div>
        </div>
  
        <div className="col-lg-3 col-sm-6">
          <div className="single-team-card">
            <div className="team-image" datatilt="">
              <ExportedImage
                width={261}
                height={279}
                src="images/avatar-134.png"
                alt="image"
              />
              <ul className="team-social">
                <li>
                  <Link href="https://www.linkedin.com/company/selslatechnology/posts/?feedView=all" target="_blank">
                    <i className="ri-linkedin-fill" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="team-content">
              <h3>  Amira </h3>
              <span>Product Manager</span>
            </div>
          </div>
        </div>
  
        <div className="col-lg-3 col-sm-6">
          <div className="single-team-card">
            <div className="team-image" datatilt="">
              <ExportedImage
                width={261}
                height={279}
                src="images/avatar-135.png"
                alt="image"
              />
              <ul className="team-social">
                <li>
                  <Link href="https://www.linkedin.com/company/selslatechnology/posts/?feedView=all" target="_blank">
                    <i className="ri-linkedin-fill" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="team-content">
              <h3> Hannah </h3>
              <span>UI UX Designer</span>
            </div>
          </div>
        </div>
  
        <div className="col-lg-3 col-sm-6">
          <div className="single-team-card">
            <div className="team-image" datatilt="">
              <ExportedImage
                width={261}
                height={279}
                src="images/avatar-133.png"
                alt="image"
              />
              <ul className="team-social">
                <li>
                  <Link href="https://www.linkedin.com/company/selslatechnology/posts/?feedView=all" target="_blank">
                    <i className="ri-linkedin-fill" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="team-content">
              <h3> Asia </h3>
              <span>Web Developer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  );
};

export default TeamArea;
