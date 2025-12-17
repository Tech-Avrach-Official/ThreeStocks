import React, { useState } from "react";
import { Play, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import heroimage from "../../../assets/hero-image.png";
import image01  from "../../../assets/image01.png";
import image02  from "../../../assets/image02.png";
import SideGlow from "../../../assets/SideGlow.png";
// import image03  from "../../../assets/image03.png";

const Hero = () => {

   const [currentSlide, setCurrentSlide] = useState(2); // Starting at index 2 (middle)
  const totalSlides = 5;

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  return (
    <section className="relative bg-black text-white pt-6 md:pt-8 lg:pt-10 overflow-hidden">
      {/* Gradient Background Effect */}
      <div 
        className="absolute w-[200px] h-[164px] md:w-[250px] md:h-[204px] lg:w-[300px] lg:h-[244px] opacity-97"
        style={{
          top: '20%',
          left: '15%',
          background: 'linear-gradient(142.36deg, #FF6A00 0%, #FE9502 100%)',
          filter: 'blur(80px)',
          transform: 'rotate(142.36deg)',
          zIndex: 1
        }}
      ></div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-3 md:gap-4 lg:gap-5 relative z-10 px-4 md:px-6 lg:px-0">
        
        {/* Left Image */}
        <div className="w-full lg:w-[40%] flex justify-center relative order-1 lg:order-1">
          {/* Additional localized gradient behind the image */}
          <div 
            className="absolute inset-0 w-full h-full opacity-60"
            style={{
              background: 'radial-gradient(circle at center, rgba(255, 106, 0, 0.3) 0%, rgba(254, 149, 2, 0.2) 40%, transparent 70%)',
              filter: 'blur(50px) md:blur(60px) lg:blur(80px)',
              zIndex: -1
            }}
          ></div>
          
          <img
            src={heroimage}
            alt="Crypto Trade"
            className="max-w-[300px] md:max-w-[400px] lg:max-w-[600px] w-full object-contain relative z-10"
          />
        </div>

        {/* Right Content */}
       <div className="w-full lg:w-[60%] flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
      {/* Small Label - exact match */}
      <div className="bg-[#623C0740] px-1 py-2 mb-4 md:mb-5 rounded-full">
        <span className="border-2 border-orange-500/60 text-white text-sm md:text-md px-2 md:px-3 py-1 rounded-full relative z-10">
        Trade Crypto.
      </span>
      </div>

      {/* Heading - exact match */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold leading-tight mb-6 md:mb-8 relative z-10">
        Trade with Confidence,
        <br />
        Profit with Ease.
      </h1>

      {/* CTA Buttons - exact match */}
       <div className="flex flex-row items-center gap-3 md:gap-4 relative z-10">
     

      <button className="relative border border-[#FFCF11] bg-gradient-to-r from-[#FE9502] to-[#FF6A00] text-white text-base md:text-lg font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full">
        {/* Outer Glow under Play Btn */}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-2 md:h-3 bg-orange-500 blur-lg rounded-full"></span>

        {/* Play Icon */}
        Trade Now!
        {/* <Play className="w-6 h-6 text-white ml-0.5" fill="white" /> */}
      </button>

      {/* Play Button */}
      <button className="relative w-12 h-12 md:w-14 md:h-14 rounded-full border border-orange-500 flex items-center justify-center bg-[#ffa15a5d] transition-all duration-200">

        {/* Play Icon */}
        <span className="flex items-center justify-center p-1.5 md:p-2 bg-[#ff904188] border border-orange-500 rounded-full bg-">
          <Play className="w-4 h-4 md:w-5 md:h-5 text-white ml-0.5" fill="white" />
        </span>
      </button>
    </div>
    </div>
      </div>


      <div className="relative w-full flex flex-col lg:flex-row items-center justify-center px-4 md:px-6 lg:px-0">
        {/* Navigation Section */}
        <div className="hidden lg:flex w-full lg:w-[40%] items-center justify-center lg:justify-start py-6 md:py-8 lg:pl-32 order-2 lg:order-1">
      <div className="flex lg:flex-col items-center lg:items-center space-x-6 lg:space-x-0 lg:space-y-6">
        
        {/* Up Arrow - Hidden on mobile, shown as left arrow on tablet, up arrow on desktop */}
        <button
          onClick={goToPrevious}
          className="text-gray-400 hover:text-white transition-colors duration-200 p-2 lg:block"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} strokeWidth={1.5} className="lg:hidden" />
          <ChevronUp size={24} strokeWidth={1.5} className="hidden lg:block" />
        </button>

        {/* Bullet Points Container */}
        <div className=" flex lg:flex-col items-center space-x-2 lg:space-x-0 lg:space-y-2">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative transition-all duration-300 ease-in-out ${
                index === currentSlide
                  ? 'w-3 h-3 md:w-4 md:h-4'
                  : 'w-2 h-2 md:w-3 md:h-3 hover:w-2.5 hover:h-2.5 md:hover:w-3.5 md:hover:h-3.5'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {/* Outer ring for active state */}
              {index === currentSlide && (
                <div className="absolute inset-0 rounded-full border-2 border-white animate-pulse"></div>
              )}
              
              {/* Main bullet */}
              <div
                className={`w-full h-full rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-75'
                    : 'bg-gray-500 hover:bg-gray-400'
                }`}
              ></div>
            </button>
          ))}
        </div>

        {/* Down Arrow - Hidden on mobile, shown as right arrow on tablet, down arrow on desktop */}
        <button
          onClick={goToNext}
          className="text-gray-400 hover:text-white transition-colors duration-200 p-2"
          aria-label="Next slide"
        >
          <ChevronRight size={20} strokeWidth={1.5} className="lg:hidden" />
          <ChevronDown size={24} strokeWidth={1.5} className="hidden lg:block" />
        </button>

        {/* Optional: Display current slide info - Hidden on mobile */}
       
      </div>

      {/* Demo content area (optional) - Hidden on small screens */}
      <div className="ml-6 md:ml-8 lg:ml-12 text-white hidden md:block">
        <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">265k+</h2>
        <p className="text-gray-300 text-sm md:text-base">
          Happy {currentSlide + 1}.
        </p>
      </div>

        </div>

        {/* Bottom Section */}
        <div className="w-full lg:w-[60%] bg-black text-white flex items-center justify-center py-6 md:py-8 px-4 md:px-6 order-1 lg:order-2">
      <div className="w-full flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-0">
        {/* Left side - 3 images */}
        <div className="flex relative mb-4 md:mb-0">
  <img
    src={image01}
    alt="bull1"
    className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover relative z-10"
  />
  <img
    src={image02}
    alt="bull2"
    className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover relative -left-4 md:-left-6 z-20"
  />
  <img
    src={image01}
    alt="bull3"
    className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover relative -left-8 md:-left-10 z-30"
  />
</div>


        {/* Center text */}
        <div className="text-center md:text-left md:pr-8 lg:pr-16 mb-4 md:mb-0">
          <h2 className="text-lg md:text-xl leading-5 md:leading-6">
            UNLOCK THE <br /> FUTURE OF <br /> FINANCE.
          </h2>
        </div>

        {/* Divider - Hidden on mobile */}
        <div className="hidden md:block h-16 lg:h-20 w-[2px] bg-gradient-to-b from-orange-700 to-orange-500"></div>

        {/* Right side text */}
        <div className="max-w-sm text-center md:text-left md:pl-8 lg:pl-16">
          <p className="text-base md:text-lg leading-5 md:leading-6 text-gray-300">
            Begin your trading journey <br className="hidden md:block" /> with a platform designed <br className="hidden md:block" /> for growth and
            security.
          </p>
        </div>
      </div>
    </div>

{/* <div className="absolute right-0 hidden lg:block">
  <img src={SideGlow} className="h-[50rem]" alt="" />
</div> */}

      </div>
     
      
      {/* <div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 opacity-15"
        style={{
          background: 'radial-gradient(circle, #FE9502 0%, transparent 70%)',
          filter: 'blur(120px)',
          zIndex: 0
        }}
      ></div> */}
    </section>
  );
};

export default Hero;