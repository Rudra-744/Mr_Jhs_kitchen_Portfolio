import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram, ArrowRight } from "lucide-react";

const Contact = () => {
  // Google Maps Link (Jab user card par click karega tab full map khulega)
  const openMap = () => {
    const address =
      "Mrs Jha Kitchen, B-117, Shivalik Platinum, Judge Bunglow Rd, Bodakdev, Ahmedabad, Gujarat";
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
    window.open(mapUrl, "_blank");
  };

  const openInsta = () => {
    window.open("https://www.instagram.com/mrsjhakitchen_", "_blank");
  };

  // Scroll to Menu Section
  const scrollToMenu = () => {
    const element = document.getElementById("menu");
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Live Map Embed URL (Ahmedabad Address)
  const mapEmbedUrl = `https://maps.google.com/maps?q=Mrs%20Jha%20Kitchen%2C%20B-117%2C%20Shivalik%20Platinum%2C%20Judge%20Bunglow%20Rd%2C%20Bodakdev%2C%20Ahmedabad%2C%20Gujarat&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="py-20 px-6 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* --- LEFT COLUMN: Contact Details (Same as before) --- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-jha-yellow font-bold uppercase tracking-widest text-xs mb-2 block">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-jha-maroon mb-6 leading-tight">
            Visit <span className="text-jha-yellow">Mrs Jha Kitchen</span>
          </h2>
          <p className="text-gray-500 mb-10 max-w-md leading-relaxed">
            A cozy Korean & Tibetan cafe in your town. Come for the food, stay
            for the books, games, and vibes!
            <span className="block mt-2 font-bold text-jha-maroon">
              🐶 Yes, we are Pet Friendly!
            </span>
          </p>

          <div className="space-y-8">
            {/* Location */}
            <div
              className="flex gap-5 items-start group cursor-pointer"
              onClick={openMap}
            >
              <div className="bg-[#FFF4D6] p-3 rounded-full text-jha-yellow shrink-0 group-hover:bg-jha-yellow group-hover:text-white transition">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-serif font-bold text-jha-maroon text-lg group-hover:text-jha-yellow transition">
                  Our Location
                </h4>
                <p className="text-gray-500 text-sm">
                  B-117, Shivalik Platinum,
                </p>
                <p className="text-gray-500 text-sm">Bodakdev, Ahmedabad</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-5 items-start">
              <div className="bg-[#FFF4D6] p-3 rounded-full text-jha-yellow shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-serif font-bold text-jha-maroon text-lg">
                  Call Us
                </h4>
                <p className="text-gray-500 text-sm">+91 93166 16879</p>
                <p className="text-gray-500 text-sm">For Orders & Enquiry</p>
              </div>
            </div>

            {/* Instagram */}
            <div
              className="flex gap-5 items-start group cursor-pointer"
              onClick={openInsta}
            >
              <div className="bg-[#FFF4D6] p-3 rounded-full text-jha-yellow shrink-0 group-hover:bg-pink-600 group-hover:text-white transition">
                <Instagram size={24} />
              </div>
              <div>
                <h4 className="font-serif font-bold text-jha-maroon text-lg group-hover:text-pink-600 transition">
                  Follow Us
                </h4>
                <p className="text-gray-500 text-sm font-bold">
                  @mrsjhakitchen_
                </p>
                <p className="text-xs text-gray-400">DM for collaborations</p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex gap-5 items-start">
              <div className="bg-[#FFF4D6] p-3 rounded-full text-jha-yellow shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-serif font-bold text-jha-maroon text-lg">
                  Opening Hours
                </h4>
                <p className="text-gray-500 text-sm">Tuesday - Sunday</p>
                <p className="text-jha-maroon font-bold text-sm">
                  01:00 PM - 11:00 PM
                </p>
                <p className="text-xs text-red-400 mt-1">Closed on Mondays</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- RIGHT COLUMN: LIVE MAP --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-xl"
        >
          {/* 1. LIVE GOOGLE MAP IFRAME (Background) */}
          <iframe
            title="Mrs Jha Kitchen Location"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src={mapEmbedUrl}
            className="absolute inset-0 z-0 filter grayscale-[20%] hover:grayscale-0 transition-all duration-700"
          ></iframe>

          {/* 2. OVERLAY CARD (Emoji & Text) */}
          {/* Map ke upar ek semi-transparent card taaki text padha ja sake */}
          <div
            onClick={openMap} // Card pe click karne se full map khulega
            className="absolute inset-0 z-10 flex items-center justify-center p-8 bg-black/10 hover:bg-black/5 transition-colors cursor-pointer group"
          >
            <div className="bg-[#FDFBF7]/90 backdrop-blur-md p-8 rounded-3xl shadow-lg text-center relative top-[-20px] hover:scale-105 transition-transform duration-300">
              {/* EMOJI (Image hata di) */}
              <div className="text-7xl mb-4 drop-shadow-md group-hover:-translate-y-2 transition-transform animate-bounce-slow">
                📍
              </div>

              <h3 className="font-serif font-bold text-2xl text-jha-maroon mb-2">
                Locate Us
              </h3>
              <p className="text-gray-600 text-sm max-w-xs mx-auto leading-relaxed">
                Shivalik Platinum, Bodakdev. <br />
                Ahmedabad's coziest spot!
              </p>
              <p className="mt-4 text-xs font-bold text-jha-yellow uppercase tracking-widest border-b border-jha-yellow pb-1 inline-block group-hover:text-orange-500 transition-colors">
                Click to expand Map
              </p>
            </div>
          </div>

          {/* 3. FLOATING MENU BUTTON */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[90%] md:w-auto md:left-auto md:right-0 md:translate-x-0 bg-[#3E2C22] p-5 md:p-6 rounded-3xl shadow-2xl flex items-center justify-between gap-6 z-30 m-4">
            <div>
              <h4 className="text-white font-serif font-bold text-lg mb-1">
                Craving Korean?
              </h4>
              <p className="text-white/60 text-xs">Explore our full menu!</p>
            </div>
            <button
              onClick={scrollToMenu}
              className="bg-jha-yellow text-jha-maroon px-5 py-3 rounded-xl font-bold text-sm hover:bg-yellow-400 transition shadow-lg flex items-center gap-2 whitespace-nowrap"
            >
              View Menu <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
