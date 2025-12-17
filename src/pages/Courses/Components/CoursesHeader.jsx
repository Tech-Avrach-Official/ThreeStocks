import React from "react";
import gridimg from "../../../assets/gridimg.svg";
import { Play } from "lucide-react";
import courseright from "../../../assets/course-right-effect.png";
import mobile from "../../../assets/mobile.png";
import coursemobileeffect from "../../../assets/course-mobile-effect.svg";

const CoursesHeader = () => {
  // Add keyframes for float animation in a style tag
  const floatAnimation = `
    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
    }
  `;
  return (
    <div className="relative w-full pt-10 pb-20 md:pt-0 md:pb-0 md:min-h-screen bg-black overflow-hidden">
      {/* Add style tag for animation */}
      <style>{floatAnimation}</style>
      
      <img src={gridimg} className="hidden lg:block w-full absolute top-0" alt="" />
      
      <div className="relative pt-20 sm:pt-28 md:pt-32 lg:pt-40 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 w-full h-full">
        <div>
          <img 
            src={courseright} 
            className="hidden lg:block absolute h-[55rem] top-0 right-0" 
            alt="" 
          />
        </div>

        {/* Text Content Section */}
        <div className="max-w-full sm:max-w-lg md:max-w-xl lg:max-w-xl mb-8 sm:mb-10 md:mb-12">
          <p className="text-white text-sm sm:text-base md:text-lg font-thin leading-relaxed">
            Unlike most trading courses, this isn't about copying signals—it's about building you into an independent trader who knows exactly what to trade, when to trade, and how to execute.
          </p>
          <p className="text-white mt-6 sm:mt-8 md:mt-10 text-xs sm:text-sm md:text-base font-thin leading-relaxed">
            We've mentored 1,500+ students, many of whom now trade profitably and have even cleared professional funding challenges. With our guidance and your dedication, you can do the same.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {/* Mobile Image Section */}
          <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:max-w-full">
            <img 
              src={mobile} 
              className="w-full z-20 absolute top-0" 
              alt="" 
              style={{
                animation: 'float 3s ease-in-out infinite'
              }}
            />
            <img 
              src={coursemobileeffect} 
              className="w-full" 
              alt="" 
            />
          </div>

          {/* Content Section */}
          <div className="w-full">
            <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Small Label */}
              <div className="bg-[#623C0740] px-1 py-1.5 sm:py-2 mb-3 sm:mb-4 md:mb-5 rounded-full">
                <span className="border-2 border-orange-500/60 text-white text-xs sm:text-sm md:text-md px-2 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-full relative z-10">
                  Independent Trader Program
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight mb-4 sm:mb-6 md:mb-8 relative z-10 px-4 sm:px-0">
                Learn to Trade. Earn Independently. Build Freedom.
              </h1>

              {/* CTA Buttons */}
              <div className="flex flex-row items-center gap-3 md:gap-4 relative z-10 w-full sm:w-auto justify-center lg:justify-start">
                {/* Start Now Button */}
                <button className="relative border border-[#FFCF11] bg-gradient-to-r from-[#FE9502] to-[#FF6A00] text-white text-sm sm:text-base md:text-lg font-semibold px-5 sm:px-4 md:px-6 py-2.5 sm:py-2 md:py-3 rounded-full w-full sm:w-auto max-w-[200px] sm:max-w-none">
                  {/* Outer Glow under Play Btn */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 sm:w-24 md:w-32 h-2 md:h-3 bg-orange-500 blur-lg rounded-full"></span>
                  Start Now!
                </button>

                {/* Play Button */}
                <button className="relative w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-orange-500 flex items-center justify-center bg-[#ffa15a5d] transition-all duration-200">
                  {/* Play Icon */}
                  <span className="flex items-center justify-center p-1.5 md:p-2 bg-[#ff904188] border border-orange-500 rounded-full">
                    <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white ml-0.5" fill="white" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesHeader;