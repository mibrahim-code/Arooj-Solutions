"use client";

import React from "react";
import ExportedImage from "next-image-export-optimizer";
import Navbar3 from "../components/Navbar3";

import Link from "next/link";
import Footer from "../components/Footer";
import GoTopButton from "../components/GoTopButton";
import Navbar2 from "../components/Navbar2";

const Page = () => {
  return (
    <div>
      <Navbar3 />
      {/* <Navbar2 /> */}
      <div
        className="page-banner-area jarallax"
        data-jarallax='{"speed": 0.3}'
        style={{ position: "relative" }}
      >
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
          <div
            className="page-banner-content "
            data-aos="fade-right"
            data-aos-delay="50"
          >
            <h2>مَلَفّ</h2>
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
      {/* Page banner end */}
      {/* Page content start */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "50px",
            maxWidth: "1000px",
          }}
        >
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="gallery-item"
              style={
                {
                  // width: 'calc(25% - 10px)',
                  // height: '400px',
                  // marginBottom: '35px',
                  // overflow: 'hidden',
                  // borderRadius: '15px',
                  // boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  // transition: 'transform 0.3s ease-in-out',
                  // cursor: 'pointer',
                }
              }
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <ExportedImage
                src={`/images/web${index + 1}.jpg`}
                alt={`Web ${index + 1}`}
                width={180}
                height={180}
                layout="responsive"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Page content end */}
      <Footer />
      <GoTopButton />
    </div>
  );
};

export default Page;
