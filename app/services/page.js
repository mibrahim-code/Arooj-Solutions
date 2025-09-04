
"use client"
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GoTopButton from "../components/GoTopButton";
import ChooseArea from "../components/home/ChooseArea";
import TalkArea from "../components/home/TalkArea";
import OverviewArea from "../components/home/OverviewArea";
import ServicesBanner from "../components/services/ServicesBanner";
import Navbar2 from "../components/Navbar2";
import Navbar5 from "../components/Navbar5";

const page = () => {
  return (
    <div>

      <Navbar5 />
      {/* <Navbar /> */}
      <ServicesBanner />
      <ChooseArea />



      <TalkArea />
      <OverviewArea />

      <Footer />
      <GoTopButton />
    </div>
  );
};

export default page;
