import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const Preloader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const percentageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

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

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 1.2,
            ease: "expo.inOut",
            delay: 0.2,
            onComplete: () => {
              if (onComplete) onComplete();
            },
          });

          return 100;
        }
        return Math.min(prev + Math.floor(Math.random() * 5) + 1, 100);
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-jha-cream z-[9999] flex flex-col items-center justify-center text-jha-maroon overflow-hidden"
    >
      <img
        src="../public/logo.png"
        alt="Logo"
        className="w-24 h-24 mb-6 object-contain animate-bounce"
      />

      <div className="overflow-hidden">
        <h1
          ref={textRef}
          className="text-4xl md:text-6xl font-serif font-bold tracking-tight opacity-0"
        >
          Mrs. Jha Kitchen
        </h1>
      </div>

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
