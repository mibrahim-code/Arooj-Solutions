"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TeamArea = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
    <div className="team-area pt-100 pb-75">
      <div className="container">
        <div className="section-title section-style-two">
          <div className="section-bg-text">TEAM</div>
          <span>Team Members</span>
          <h2>Our IT Consultants</h2>
          <p>
            We lead the technological solutions that the company provides worldwide for over 40 years.
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
                    <Link href="https://www.linkedin.com/company/aroojsolutions" target="_blank">
                      <i className="ri-linkedin-fill" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="team-content">
                <h3>Manal Muhammad</h3>
                <span>President & CEO</span>
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
                    <Link href="https://www.linkedin.com/company/aroojsolutions" target="_blank">
                      <i className="ri-linkedin-fill" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="team-content">
                <h3>Amira</h3>
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
                    <Link href="https://www.linkedin.com/company/aroojsolutions" target="_blank">
                      <i className="ri-linkedin-fill" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="team-content">
                <h3>Hannah</h3>
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
                    <Link href="https://www.linkedin.com/company/aroojsolutions" target="_blank">
                      <i className="ri-linkedin-fill" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="team-content">
                <h3>Asia</h3>
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