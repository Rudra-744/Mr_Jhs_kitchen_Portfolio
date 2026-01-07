import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Animation variants for floating tags
  const floatAnimation = (duration) => ({
    y: [-10, 10, -10],
    rotate: [-2, 2, -2],
    transition: { repeat: Infinity, duration: duration, ease: "easeInOut" }
  });

  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 overflow-hidden pt-28 md:pt-0 bg-[#FDFBF7]">
      
      {/* --- MODERN BACKGROUND (Blobs & Pattern) --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
         {/* 1. Subtle Grid Pattern */}
         <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#800000 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }}></div>
         
         {/* 2. Soft Gradient Blobs (Modern Look) */}
         <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-yellow-200/30 rounded-full blur-[100px] animate-pulse"></div>
         <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-red-100/40 rounded-full blur-[80px]"></div>
         <div className="absolute bottom-[-10%] right-[20%] w-[300px] h-[300px] bg-orange-100/40 rounded-full blur-[60px]"></div>
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 pb-12 lg:pb-0">
        
        {/* --- LEFT SIDE: TEXT CONTENT --- */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center lg:text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-jha-maroon/10 px-4 py-2 rounded-full shadow-sm mb-2 mx-auto lg:mx-0">
            <MapPin size={14} className="text-jha-maroon" />
            <span className="text-jha-maroon font-bold text-xs uppercase tracking-widest">Shivalik Platinum, Ahmedabad</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-jha-maroon leading-[1.1]">
            Taste the <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-jha-yellow to-orange-400 relative">
              Himalayan Soul
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
            Your cozy corner for authentic <span className="text-jha-maroon font-bold">Laphing, Ramen & Momos.</span> 
            Come for the food, stay for the vibe! 
            <span className="block mt-3 text-sm font-bold bg-yellow-100 text-yellow-800 inline-block px-3 py-1 rounded-lg">🐶 Pet Friendly Cafe</span>
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <button 
              onClick={() => scrollToSection('menu')}
              className="bg-jha-yellow text-jha-maroon px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-yellow-200/50 hover:bg-yellow-400 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              Order Now <ArrowRight size={20}/>
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white/80 backdrop-blur text-jha-maroon border border-jha-maroon/10 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:shadow-lg transition-all"
            >
              Visit Cafe
            </button>
          </div>

          {/* Trust Badges */}
          <div className="pt-8 flex gap-8 justify-center lg:justify-start border-t border-gray-200/40 mt-6 opacity-80">
            <div><h4 className="text-2xl font-bold text-jha-maroon">4.8★</h4><p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">On Google</p></div>
            <div><h4 className="text-2xl font-bold text-jha-maroon">100%</h4><p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Fresh Food</p></div>
            <div><h4 className="text-2xl font-bold text-jha-maroon">15yr</h4><p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Legacy</p></div>
          </div>
        </motion.div>


        {/* --- RIGHT SIDE: EMOJI & FLOATING TAGS --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center"
        >
          {/* Main Circle Background (Glassmorphism) */}
          <div className="absolute w-[280px] h-[280px] md:w-[480px] md:h-[480px] bg-gradient-to-b from-white to-[#FFF8E7] rounded-full border border-white shadow-2xl shadow-orange-100/50"></div>
          
          {/* --- MAIN HERO EMOJI (Huge Momo) --- */}
          <motion.div 
             animate={{ y: [-15, 15, -15] }} 
             transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
             className="relative z-10 text-[10rem] md:text-[14rem] leading-none drop-shadow-2xl filter select-none cursor-default hover:scale-110 transition-transform duration-300"
          >
             🥟
          </motion.div>

          {/* --- FLOATING TAG 1: LAPHING --- */}
          <motion.div 
            animate={floatAnimation(5)} 
            className="absolute top-0 right-4 md:top-20 md:right-10 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-lg border border-white/50 z-20 flex items-center gap-3 hover:scale-110 transition-transform cursor-pointer"
          >
            <span className="text-2xl md:text-4xl bg-yellow-100 p-2 rounded-xl">🥣</span>
            <div>
               <p className="text-[10px] font-bold text-gray-400 uppercase">Spicy</p>
               <h4 className="text-sm md:text-lg font-bold text-jha-maroon">Laphing</h4>
            </div>
          </motion.div>

          {/* --- FLOATING TAG 2: NOODLES --- */}
          <motion.div 
            animate={floatAnimation(6)} 
            className="absolute bottom-10 left-0 md:bottom-32 md:left-0 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-lg border border-white/50 z-20 flex items-center gap-3 hover:scale-110 transition-transform cursor-pointer"
          >
            <span className="text-2xl md:text-4xl bg-red-100 p-2 rounded-xl">🍜</span>
            <div>
               <p className="text-[10px] font-bold text-gray-400 uppercase">Hot</p>
               <h4 className="text-sm md:text-lg font-bold text-jha-maroon">Ramen</h4>
            </div>
          </motion.div>

          {/* --- FLOATING TAG 3: SIDES --- */}
          <motion.div 
            animate={floatAnimation(7)} 
            className="absolute top-10 left-4 md:top-16 md:left-10 bg-white/90 backdrop-blur-md p-2 md:p-3 rounded-2xl shadow-lg border border-white/50 z-20 flex items-center gap-2 hover:scale-110 transition-transform cursor-pointer"
          >
             <span className="text-xl md:text-2xl">🍟</span>
             <span className="text-xs md:text-sm font-bold text-jha-maroon">Crispy Sides</span>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Home;