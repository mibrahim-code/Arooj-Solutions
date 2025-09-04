import Footer from "./components/Footer";
import GoTopButton from "./components/GoTopButton";
import AboutArea from "./components/home/AboutArea";
import AIServices from "./components/home/AIServices";
import BlogArea from "./components/home/BlogArea";
import ChooseArea from "./components/home/ChooseArea";
import CybersecurityServices from "./components/home/CybersecurityServices";
import FeaturesArea from "./components/home/FeaturesArea";
import MainBanner from "./components/home/MainBanner";
import OverviewArea from "./components/home/OverviewArea";
import ServicesArea from "./components/home/ServicesArea";

import TalkArea from "./components/home/TalkArea";
import TeamArea from "./components/home/TeamArea";
import TestimonialsArea from "./components/home/TestimonialsArea";

import Navbar2 from "./components/Navbar2";

/* In globals.css or _app.js */

export default function Home() {
  return (
    <>
    <Navbar2 />
   

      <MainBanner />
      <FeaturesArea />
      <AboutArea />
      <ServicesArea />

      {/* <ChooseArea /> */}
      <CybersecurityServices/>
      <AIServices/>
      <TestimonialsArea />

      <TalkArea />

      {/* <TeamArea /> */}
      <OverviewArea />
      
      <BlogArea />

      <Footer />
      <GoTopButton />
    </>
  );
}
