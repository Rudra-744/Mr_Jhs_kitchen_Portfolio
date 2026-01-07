import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const Preloader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const percentageRef = useRef(null);

  useEffect(() => {
    // 1. Initial Setup (Ensure visible immediately to avoid flicker)
    const tl = gsap.timeline();

    // Reveal Text & Logo smoothly
    tl.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    ).fromTo(
      percentageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 },
      "-=0.5"
    );

    // 2. Counter Logic (Using setInterval for consistent speed)
    const interval = setInterval(() => {
      setCount((prev) => {
        // Agar 100 ho gaya, to interval roko aur exit animation chalao
        if (prev >= 100) {
          clearInterval(interval);
          
          // EXIT ANIMATION (Slide Up)
          gsap.to(containerRef.current, {
            yPercent: -100, // Pura screen upar
            duration: 1.2,
            ease: "expo.inOut",
            delay: 0.2,
            onComplete: () => {
              // React state update baad mein taaki jerk na aaye
              if (onComplete) onComplete(); 
            },
          });
          
          return 100;
        }
        // Random speed increment (Natural feel)
        return Math.min(prev + Math.floor(Math.random() * 5) + 1, 100);
      });
    }, 50); // Speed adjust karein (50ms)

    return () => clearInterval(interval);
  }, []); // Empty dependency array = Sirf ek baar chalega

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-jha-cream z-[9999] flex flex-col items-center justify-center text-jha-maroon overflow-hidden"
    >
      {/* Logo Image */}
      <img
        src="../public/logo.png"
        alt="Logo"
        className="w-24 h-24 mb-6 object-contain animate-bounce"
      />

      {/* Main Text */}
      <div className="overflow-hidden">
        <h1
          ref={textRef}
          className="text-4xl md:text-6xl font-serif font-bold tracking-tight opacity-0" // Shuru mein hidden taaki GSAP reveal kare
        >
          Mrs. Jha Kitchen
        </h1>
      </div>

      {/* Counter */}
      <div ref={percentageRef} className="mt-4 flex items-start opacity-0">
        <span className="text-8xl md:text-9xl font-bold font-sans text-jha-yellow leading-none">
          {count}
        </span>
        <span className="text-2xl font-bold text-jha-yellow mt-2">%</span>
      </div>
    </div>
  );
};

export default Preloader;