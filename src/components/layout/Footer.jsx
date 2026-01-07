import React from 'react';
import { Instagram, MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-jha-maroon text-jha-cream pt-20 pb-10 px-6 relative z-0">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        
        {/* Brand Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
             <img src="/logo.png" className="w-14 h-14 object-contain bg-jha-cream rounded-full p-1" alt="Logo"/>
             <div>
                <span className="text-2xl font-serif font-bold block leading-none">Mrs. Jha</span>
                <span className="text-sm text-jha-yellow font-sans tracking-widest">KITCHEN</span>
             </div>
          </div>
          <p className="opacity-80 max-w-sm text-sm leading-relaxed">
            Ahmedabad's favorite spot for Korean & Tibetan flavors. 
            Enjoy Ramen, Laphing, and Momos in a cozy, pet-friendly space with books and games. 🍜📚🐶
          </p>
          <a 
            href="https://www.instagram.com/mrsjhakitchen_" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-jha-yellow font-bold hover:text-white transition mt-2"
          >
            <Instagram size={20} /> Follow us on Instagram
          </a>
        </div>

        {/* Quick Links */}
        <div className="md:pl-10">
          <h3 className="text-lg font-bold text-jha-yellow mb-6 font-serif">Explore</h3>
          <ul className="space-y-3 opacity-90 text-sm">
            <li><a href="#home" className="hover:text-jha-yellow hover:translate-x-1 transition-all inline-block">Home</a></li>
            <li><a href="#about" className="hover:text-jha-yellow hover:translate-x-1 transition-all inline-block">Our Story</a></li>
            <li><a href="#menu" className="hover:text-jha-yellow hover:translate-x-1 transition-all inline-block">Full Menu</a></li>
            <li><a href="#contact" className="hover:text-jha-yellow hover:translate-x-1 transition-all inline-block">Visit Us</a></li>
          </ul>
        </div>

        {/* Visit Us */}
        <div>
          <h3 className="text-lg font-bold text-jha-yellow mb-6 font-serif">Visit Us</h3>
          <div className="space-y-4 opacity-90 text-sm">
             <p className="flex items-start gap-3">
               <MapPin size={18} className="mt-1 text-jha-yellow"/> 
               <span>B-117, Shivalik Platinum,<br/>Judge Bunglow Rd, Ahmedabad</span>
             </p>
             <p className="flex items-center gap-3">
               <Phone size={18} className="text-jha-yellow"/> 
               +91 93166 16879
             </p>
             <p className="flex items-center gap-3">
               <Clock size={18} className="text-jha-yellow"/> 
               Tue - Sun: 01:00 PM - 11:00 PM
             </p>
             <p className="flex items-center gap-3 text-white/50 text-xs">
               (Closed on Mondays)
             </p>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-xs opacity-40">
        <p>© 2026 Mrs Jha Kitchen. All rights reserved.</p>
        <p>Made with ❤️ for Korean Food Lovers</p>
      </div>
    </footer>
  );
};

export default Footer;