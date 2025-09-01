
"use client"
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GoTopButton from "../components/GoTopButton";
import PageBanner from "../components/websiteDesign/PageBanner";
import TalkArea from "../components/home/TalkArea";
import OverviewArea from "../components/home/OverviewArea";
import PricingArea from "../components/websiteDesign/PricingArea";
import Navbar3 from "../components/Navbar3";

const page = () => {
  return (
    <div>
      <Navbar3 />
      {/* <Navbar /> */}
      <PageBanner />
      <PricingArea />
      <TalkArea />
      <OverviewArea />

      <Footer />
      <GoTopButton />
    </div>
  );
};

export default page;
