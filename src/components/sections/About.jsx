import React from "react";
import { motion } from "framer-motion";
import { Leaf, Users, Zap, Heart } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-jha-cream relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-[#F3E3D3] rounded-[3rem] h-[500px] flex flex-col items-center justify-center text-center relative z-10 shadow-sm border border-white/40">
            <img
              src="../public/logo.png"
              alt="Mrs. Jha"
              className="w-56 h-56 object-contain mb-4 drop-shadow-2xl hover:scale-110 transition-transform duration-500"
            />
            <h3 className="font-serif font-bold text-3xl text-jha-maroon">
              Mrs. Jha
            </h3>
            <p className="text-gray-500 font-medium">Head Chef & Founder</p>
          </div>

          <div className="absolute -bottom-6 -right-4 md:-right-8 z-20 bg-jha-yellow text-jha-maroon p-6 rounded-3xl shadow-xl border-4 border-jha-cream">
            <h4 className="text-4xl font-bold font-serif leading-none">15+</h4>
            <p className="text-xs font-bold uppercase tracking-widest mt-1">
              Years Experience
            </p>
          </div>

          <div className="absolute top-10 -left-10 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-30 -z-10"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-jha-yellow font-bold uppercase tracking-widest text-sm mb-3 block">
            Our Story
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-jha-maroon mb-6 leading-[1.1]">
            From Home Kitchen to{" "}
            <span className="text-jha-yellow">Your Heart</span>
          </h2>

          <p className="text-jha-brown mb-6 leading-relaxed text-lg opacity-90">
            Mrs. Jha Kitchen started with a simple dream — to share the
            authentic flavors of Tibet and Nepal with our community. What began
            as cooking for family and friends has blossomed into a beloved local
            eatery.
          </p>

          <p className="text-jha-brown mb-10 leading-relaxed text-lg opacity-90">
            Every dish we serve is prepared with the same love and care that
            Mrs. Jha puts into her family meals. From hand-folded momos to
            perfectly spiced thukpa, each recipe has been passed down through
            generations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4">
            <div className="flex gap-4 items-start group">
              <div className="bg-green-100 p-3 rounded-2xl text-2xl group-hover:scale-110 transition-transform">
                🌿
              </div>
              <div>
                <h4 className="font-bold text-jha-maroon text-lg">
                  Fresh Ingredients
                </h4>
                <p className="text-sm text-gray-500">Locally sourced daily</p>
              </div>
            </div>

            <div className="flex gap-4 items-start group">
              <div className="bg-orange-100 p-3 rounded-2xl text-2xl group-hover:scale-110 transition-transform">
                👨‍👩‍👧‍👦
              </div>
              <div>
                <h4 className="font-bold text-jha-maroon text-lg">
                  Family Recipes
                </h4>
                <p className="text-sm text-gray-500">Passed down generations</p>
              </div>
            </div>

            <div className="flex gap-4 items-start group">
              <div className="bg-yellow-100 p-3 rounded-2xl text-2xl group-hover:scale-110 transition-transform">
                ⚡
              </div>
              <div>
                <h4 className="font-bold text-jha-maroon text-lg">
                  Fast Delivery
                </h4>
                <p className="text-sm text-gray-500">
                  Hot & fresh to your door
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start group">
              <div className="bg-red-100 p-3 rounded-2xl text-2xl group-hover:scale-110 transition-transform">
                ❤️
              </div>
              <div>
                <h4 className="font-bold text-jha-maroon text-lg">
                  Made with Love
                </h4>
                <p className="text-sm text-gray-500">In every dish we serve</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
