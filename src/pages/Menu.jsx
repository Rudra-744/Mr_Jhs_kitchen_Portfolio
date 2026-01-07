import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
// useStore import HATA DIYA
import { menuData } from '../data/menuData'; // Data file import

const categories = [
  { id: "All", label: "All", emoji: "✨" },
  { id: "Laphing", label: "Laphing", emoji: "🥣" },
  { id: "Noodles", label: "Noodles", emoji: "🍜" },
  { id: "Momos", label: "Momos", emoji: "🥟" },
  { id: "Sides", label: "Sides", emoji: "🍟" },
  { id: "Desserts", label: "Desserts", emoji: "🍰" },
  { id: "Beverages", label: "Beverages", emoji: "🥤" },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  // const { addToCart } = useStore(); // <-- YE LINE HATA DI
  
  const [shuffledProducts, setShuffledProducts] = useState([]);
  
  useEffect(() => {
    setShuffledProducts([...menuData].sort(() => 0.5 - Math.random()));
  }, []);

  const filteredProducts = useMemo(() => {
    const sourceList = activeCategory === "All" ? shuffledProducts : menuData;
    if (activeCategory === "All") return sourceList;
    return sourceList.filter(p => p.category === activeCategory);
  }, [shuffledProducts, activeCategory]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-10 pb-20">
      
      <div className="text-center mb-10 px-4">
        <h5 className="text-jha-yellow font-bold uppercase tracking-widest text-xs mb-3">Our Menu</h5>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-jha-maroon">
          Discover Our <span className="text-jha-yellow">Delicious</span> Dishes
        </h1>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
           From traditional momos to refreshing beverages, explore our carefully curated menu of authentic Korean and Tibetan delicacies.
        </p>
      </div>

      <div className="sticky top-[70px] z-30 bg-[#FDFBF7]/95 backdrop-blur-sm py-3 mb-8 border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide md:justify-center pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap border
                  ${activeCategory === cat.id 
                    ? 'bg-jha-yellow text-jha-maroon border-jha-yellow shadow-md scale-105' 
                    : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                  }
                `}
              >
                <span>{cat.emoji}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((item) => (
          // onAdd prop hata diya
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// ProductCard waisa hi rahega jaisa pichle code me tha (No Add Button)
const ProductCard = React.memo(({ item }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group flex flex-col h-full rounded-[2rem] overflow-hidden border border-gray-100 bg-white hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-52 w-full bg-[#F9F4E8] overflow-hidden">
        <span className="absolute top-3 left-3 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-gray-600 shadow-sm z-20 uppercase tracking-wider">
          {item.category}
        </span>
        <div className="w-full h-full">
          {item.image ? (
            <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-110" />
          ) : (
             <div className="w-full h-full flex items-center justify-center text-4xl">🥟</div>
          )}
        </div>
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-serif font-bold text-xl text-jha-maroon mb-1 leading-tight line-clamp-1">{item.name}</h3>
        <p className="text-xs text-gray-500 font-medium mb-4 line-clamp-2 min-h-[2.5em]">{item.description}</p>
        <div className="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between">
          <span className="text-xl font-bold text-jha-yellow font-sans">₹{item.price}</span>
          <div className="w-4 h-4 border border-green-600 p-[2px] flex items-center justify-center rounded-sm">
            <div className="w-full h-full bg-green-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export default Menu;