import React from 'react';
import HomeHero from './Home'; // Rename existing Home.jsx content to HomeHero component internally if needed, or just import directly
import MenuGrid from './Menu'; // Rename existing Menu.jsx content
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';

const MainPage = () => {
  return (
    <div className="relative">
      {/* MAIN CONTENT CONTAINER (Scrolls over the footer) */}
      {/* mb-[450px] is roughly the footer height. Adjust if needed */}
      <main className="relative z-10 bg-jha-cream shadow-2xl mb-[550px] md:mb-[400px]">
        <div id="home">
           <HomeHero />
        </div>
        <div id="about">
           <About />
        </div>
         {/* Menu Section needs padding to handle the sticky header inside it */}
        <div id="menu" className="pt-20"> 
           <MenuGrid />
        </div>
        <div id="contact">
           <Contact />
        </div>
      </main>

      {/* FIXED FOOTER (Reveals from behind) */}
      <div className="fixed bottom-0 left-0 w-full h-[550px] md:h-[400px] z-0">
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;