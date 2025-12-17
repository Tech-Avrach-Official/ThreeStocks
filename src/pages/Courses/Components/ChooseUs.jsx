import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import slider01 from "../../../assets/slider01.png";
import slider02 from "../../../assets/slider02.jpg";
import slider03 from "../../../assets/slider03.jpg";

const ChooseUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselData = [
    {
      id: 1,
      number: "01",
      title: "Structured Learning Path",
      description: "From technicals and forex mechanics to crypto, swing trading, and derivatives.",
      image: slider01
    },
    {
      id: 2,
      number: "02",
      title: "One-on-One Mentorship",
      description: "Personalized support to guide you step by step.",
      image: slider02
    },
    {
      id: 3,
      number: "03",
      title: "Real-Time Trading Signals",
      description: "Get live market insights and trading opportunities delivered directly to you.",
      image: slider03
    },
    {
      id: 4,
      number: "04",
      title: "Risk Management Mastery",
      description: "Learn proven strategies to protect your capital and maximize returns.",
      image: slider01
    },
    {
      id: 5,
      number: "05",
      title: "Advanced Analytics Tools",
      description: "Access professional-grade tools for technical analysis and market research.",
      image: slider02
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % carouselData.length;
      cards.push(carouselData[index]);
    }
    return cards;
  };

  // Auto-play every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="bg-black min-h-screen py-20 md:py-40 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-white text-2xl md:text-3xl font-bold underline mb-5 md:mb-8">
            Why choose us
          </h2>
          <p className="text-gray-300 text-base md:text-xl max-w-4xl mx-auto leading-relaxed">
            Unlike most trading courses, this isn't about copying signals—it's about 
            building you into an independent trader who knows exactly what to trade, 
            when to trade, and how to execute.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <AnimatePresence mode="wait">
              {getVisibleCards().map((card, index) => (
                <motion.div
                  key={`${card.id}-${currentIndex}-${index}`}
                  initial={{ opacity: 0, y: 0, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 0, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.15 }}
                  className="bg-black rounded-2xl overflow-hidden border border-orange-500/60 hover:border-orange-500 transition-all duration-300"
                >
                  <div className="flex w-full min-h-[20rem] group">
                    {/* Image Section */}
                    <div className="relative w-[45%] overflow-hidden">
                      <motion.img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6 flex-1 relative">
                      {/* Number Badge */}
                      <motion.div 
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="absolute top-3 right-6 bg-[#623C0740] border border-orange-500/60 text-white text-xl font-normal h-14 w-14 flex items-center justify-center rounded-full"
                      >
                        {card.number}
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-white text-xl font-semibold mb-10 mt-14 group-hover:text-orange-400 transition-colors duration-300">
                        {card.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4">
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1, rotate: -6 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gray-800 hover:bg-orange-500 text-white p-3 rounded-full transition-all duration-300 border border-gray-700 hover:border-orange-500"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1, rotate: 6 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gray-800 hover:bg-orange-500 text-white p-3 rounded-full transition-all duration-300 border border-gray-700 hover:border-orange-500"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-orange-500 w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
