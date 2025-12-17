import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img01 from "../../../assets/mobile-mockups/img01.png";
import img02 from "../../../assets/mobile-mockups/img02.png";
import img03 from "../../../assets/mobile-mockups/img03.png";
import img04 from "../../../assets/mobile-mockups/img04.png";
import img05 from "../../../assets/mobile-mockups/img05.png";
import img06 from "../../../assets/mobile-mockups/img06.png";
import img07 from "../../../assets/mobile-mockups/img07.png";
import img08 from "../../../assets/mobile-mockups/img08.png";
import img09 from "../../../assets/mobile-mockups/img09.png";
import img10 from "../../../assets/mobile-mockups/img10.png";
import img11 from "../../../assets/mobile-mockups/img11.png";

const CoverflowSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const destinations = [
    { id: 1, city: "New York", nights: "5 Nights", description: "The city that never sleeps.", image: img01 },
    { id: 2, city: "Paris", nights: "7 Nights", description: "The city of lights and love.", image: img02 },
    { id: 3, city: "Tokyo", nights: "6 Nights", description: "A blend of tradition and futurism.", image: img03 },
    { id: 4, city: "London", nights: "4 Nights", description: "The city of dreams and history.", image: img04 },
    { id: 5, city: "Rome", nights: "6 Nights", description: "The city of art and culture.", image: img05 },
    { id: 6, city: "Sydney", nights: "5 Nights", description: "The city of stunning beaches.", image: img06 },
    { id: 7, city: "Dubai", nights: "4 Nights", description: "The city of luxury and innovation.", image: img07 },
    { id: 8, city: "Barcelona", nights: "5 Nights", description: "The city of vibrant life.", image: img08 },
    { id: 9, city: "Amsterdam", nights: "4 Nights", description: "The city of canals and art.", image: img09 },
    { id: 10, city: "Istanbul", nights: "6 Nights", description: "The city of two continents.", image: img10 },
    { id: 11, city: "Cape Town", nights: "5 Nights", description: "The city of breathtaking landscapes.", image: img11 }
  ];

  const handlePrevious = () => {
    setActiveIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setActiveIndex((prev) => prev + 1);
  };

  const getCardStyle = (position) => {
    if (position === 0) {
      return {
        x: 0,
        z: 0,
        scale: 1.15,
        opacity: 1,
        rotateY: 0,
        zIndex: 50
      };
    } else if (position === -1) {
      return {
        x: -280,
        z: -200,
        scale: 0.85,
        opacity: 0.7,
        rotateY: 35,
        zIndex: 40
      };
    } else if (position === 1) {
      return {
        x: 280,
        z: -200,
        scale: 0.85,
        opacity: 0.7,
        rotateY: -35,
        zIndex: 40
      };
    } else if (position === -2) {
      return {
        x: -480,
        z: -300,
        scale: 0.7,
        opacity: 0.4,
        rotateY: 45,
        zIndex: 30
      };
    } else if (position === 2) {
      return {
        x: 480,
        z: -300,
        scale: 0.7,
        opacity: 0.4,
        rotateY: -45,
        zIndex: 30
      };
    } else {
      return {
        x: position < 0 ? -600 : 600,
        z: -400,
        scale: 0.6,
        opacity: 0,
        rotateY: position < 0 ? 50 : -50,
        zIndex: 20
      };
    }
  };

  // Create an extended array with cards repeated multiple times for seamless infinite loop
  const extendedDestinations = [];
  const copies = 5; // Number of copies on each side
  
  for (let i = -copies; i <= copies; i++) {
    destinations.forEach((dest, idx) => {
      extendedDestinations.push({
        ...dest,
        virtualIndex: i * destinations.length + idx,
        originalIndex: idx
      });
    });
  }

  const normalizedActiveIndex = ((activeIndex % destinations.length) + destinations.length) % destinations.length;

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&display=swap');
        
        body {
          perspective: 2000px;
        }
      `}</style>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrevious}
        className="absolute left-8 z-[100] w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
      >
        <ChevronLeft className="w-7 h-7 text-gray-700 group-hover:text-gray-900" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-8 z-[100] w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
      >
        <ChevronRight className="w-7 h-7 text-gray-700 group-hover:text-gray-900" />
      </button>

      {/* Cards Container */}
      <div className="relative w-full h-[600px] flex items-center justify-center" style={{ perspective: '2000px' }}>
        {extendedDestinations.map((destination, idx) => {
          const position = destination.virtualIndex - activeIndex;
          
          // Only render cards that are close to the active position for performance
          if (Math.abs(position) > 3) return null;
          
          const style = getCardStyle(position);
          
          return (
            <motion.div
              key={`${destination.id}-${destination.virtualIndex}`}
              className="absolute w-[15rem] md:w-[20rem] rounded-2xl overflow-hidden cursor-pointer"
              style={{
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden'
              }}
              animate={{
                x: style.x,
                z: style.z,
                scale: style.scale,
                opacity: style.opacity,
                rotateY: style.rotateY,
                zIndex: style.zIndex
              }}
              transition={{
                type: 'spring',
                stiffness: 120,
                damping: 20,
                mass: 1
              }}
              onClick={() => {
                if (Math.abs(position) <= 2) {
                  setActiveIndex(destination.virtualIndex);
                }
              }}
            >
              {/* Card Image */}
              <div className="relative w-full h-full">
                <img
                  src={destination.image}
                  alt={destination.city}
                  className="w-full h-full "
                />
                
                {/* Overlay Gradient */}
                
                
                {/* Content */}
                {/* <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h2 
                    className="text-4xl font-extrabold mb-3 tracking-tight"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {destination.city}
                  </h2>
                  <p className="text-sm font-semibold mb-4 tracking-widest opacity-90">
                    {destination.nights}
                  </p>
                  <p className="text-sm mb-5 opacity-80">
                    {destination.description}
                  </p>
                  <button className="bg-white text-gray-900 px-6 py-2.5 rounded-md text-sm font-bold hover:bg-gray-100 transition-colors duration-300">
                    VIEW MORE
                  </button>
                </div> */}
              </div>
              
              {/* Card Shadow */}
              <div 
                className="absolute inset-0 rounded-2xl shadow-2xl pointer-events-none"
                style={{ boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)' }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Dots Indicator */}
      <div className="hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 md:flex gap-2 z-[100]">
        {destinations.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              normalizedActiveIndex === index
                ? 'w-6 h-3 bg-white'
                : 'w-2 h-2 bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CoverflowSlider;