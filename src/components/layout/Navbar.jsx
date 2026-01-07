import React, { useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF7]/80 backdrop-blur-lg border-b border-jha-maroon/5 py-4 px-6 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a
            href="#home"
            onClick={() => handleScroll("home")}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-jha-yellow rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <img
                src="../public/logo.png"
                alt="Mrs. Jha Kitchen"
                className="relative h-14 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8 font-serif font-medium text-jha-brown">
            {["Home", "About", "Menu", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => handleScroll(item.toLowerCase())}
                className="relative group hover:text-jha-maroon transition-colors"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-jha-yellow transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden bg-white p-2 rounded-full shadow-sm text-jha-maroon active:scale-95 transition-transform border border-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[80px] left-0 right-0 bg-[#FDFBF7] border-b border-jha-maroon/10 shadow-xl z-40 p-6 md:hidden rounded-b-3xl"
          >
            <div className="flex flex-col gap-4 text-center">
              {["Home", "About", "Menu", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleScroll(item.toLowerCase())}
                  className="text-xl font-serif font-medium text-jha-maroon py-2 border-b border-gray-100 last:border-none hover:text-jha-yellow transition-colors"
                >
                  {item}
                </button>
              ))}
              <button className="bg-jha-yellow text-jha-maroon w-full py-4 rounded-xl font-bold mt-2 shadow-sm">
                Book a Table 📞
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
