import React from "react";
import HomeHero from "./Home";
import MenuGrid from "./Menu";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

const MainPage = () => {
  return (
    <div className="relative">
      <main className="relative z-10 bg-jha-cream shadow-2xl mb-[550px] md:mb-[400px]">
        <div id="home">
          <HomeHero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="menu" className="pt-20">
          <MenuGrid />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>

      <div className="fixed bottom-0 left-0 w-full h-[550px] md:h-[400px] z-0">
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
