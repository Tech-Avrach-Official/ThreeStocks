import { ArrowBigDown } from "lucide-react";
import React from "react";
import gridcard01 from "../../../assets/gridcard01.png";
import gridcard02 from "../../../assets/gridcard02.png";

const CardGrid = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16">
      <div className="max-w-6xl w-full">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 sm:gap-8 md:gap-10 mb-10 sm:mb-14 md:mb-16 lg:mb-20">
          {/* Left side content */}
          <div className="flex-1 max-w-full lg:max-w-xs text-center lg:text-left">
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4 sm:mb-6">
              Unlock the full potential of cryptocurrency trading with our
              complete suite of services
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs sm:text-sm text-gray-300 underline cursor-pointer hover:text-white transition-colors">
                The Principles That Guide Every Trade and Decision
              </span>
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <ArrowBigDown size={16} className="sm:w-5 sm:h-5" />
              </div>
            </div>
          </div>

          {/* Center divider line - hidden on mobile */}
          <div className="hidden lg:block mx-12">
            <div className="w-px h-32 bg-gray-700"></div>
          </div>

          {/* Right side main heading */}
          <div className="flex-1 max-w-full lg:max-w-2xl text-center lg:text-left">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-light leading-tight">
              The Principles That Guide Every{" "}
              <span className="block">Trade and Decision.</span>
            </h1>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
          {/* Card 1 - Transparency (Left) */}
          <div className="md:col-span-2 lg:col-span-5">
            <div className="bg-[#221400] rounded-2xl sm:rounded-3xl w-full text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="p-6 sm:p-8 md:p-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-4 sm:mb-6">Transparency</h2>

                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10 sm:mb-12 md:mb-16">
                    Real results, real lessons, <br className="hidden sm:block" /> no sugar-coating.
                  </p>

                  {/* Get Started button */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FF6A00] rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm sm:text-base md:text-lg underline cursor-pointer hover:text-white transition-colors">
                      Get Started
                    </span>
                  </div>
                </div>
                <div>
                  <img src={gridcard01} className="w-full" alt="" />
                </div>
              </div>

              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full bg-gradient-to-tr from-transparent via-amber-800 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Card 2 - Transparency (Center) */}
          <div className="md:col-span-2 lg:col-span-4">
            <div className="bg-[#221400] rounded-2xl sm:rounded-3xl w-full text-white relative overflow-hidden">
              <div className="relative z-10">
                <div>
                  <img src={gridcard02} className="w-full" alt="" />
                </div>
                <div className="py-4 px-6 sm:py-5 sm:px-8 md:px-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-4 sm:mb-6">Transparency</h2>

                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10 sm:mb-12 md:mb-16">
                    Real results, real lessons, <br className="hidden sm:block" /> no sugar-coating.
                  </p>

                  {/* Get Started button */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FF6A00] rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm sm:text-base md:text-lg underline cursor-pointer hover:text-white transition-colors">
                      Get Started
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full bg-gradient-to-tr from-transparent via-amber-800 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Two Cards */}
          <div className="md:col-span-2 lg:col-span-3">
            <div className="w-full h-full flex flex-col gap-4 sm:gap-5">
              {/* Independence Card */}
              <div className="bg-[#221400] min-h-[280px] sm:min-h-[320px] lg:h-[60%] rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
                {/* Get Started button at top */}
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <span className="text-orange-500 underline text-sm sm:text-base md:text-lg cursor-pointer hover:text-orange-400 transition-colors">
                    Get Started
                  </span>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors">
                    <svg 
                      className="w-3 h-3 sm:w-4 sm:h-4 text-white" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-white text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
                  Our ultimate goal: making you a confident trader who doesn't rely on anyone else.
                </p>
                
                {/* Title */}
                <h2 className="text-2xl sm:text-3xl font-normal text-orange-500">
                  Independence
                </h2>
              </div>

              {/* Growth Card */}
              <div className="bg-[#221400] min-h-[180px] sm:min-h-[200px] lg:h-[40%] border-r-4 border-orange-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
                {/* Title and icon */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-white">
                    Growth
                  </h2>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg 
                      className="w-3 h-3 text-white" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Trading isn't luck, it's structured consistency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGrid;