import React from "react";
import aboutbg from "../../../assets/aboutbg.svg";
import tradeview from "../../../assets/tradeview.png";
import cardbottom from "../../../assets/cardbottom.png";

const AboutHeader = () => {
  return (
    <div className="relative h-full bg-black pb-10 pt-28 md:pt-32 lg:pt-40">
      <img src={aboutbg} className="hidden lg:block w-full" alt="" />
      <div className="lg:absolute sm:top-28 md:top-32 lg:top-40 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-full h-full px-4 lg:px-0">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight relative mb-6 sm:mb-8 md:mb-10 z-10 text-white text-center">
            Trading isn't just about charts—it's about discipline, mindset, and{" "}
            <span className="text-[#ffab57]">the right guidance.</span>
          </h1>

          {/* First Paragraph */}
          <p className="text-gray-300 w-full max-w-5xl mx-auto mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg lg:text-xl text-center relative z-10">
            Like many traders,{" "}
            <span className="text-orange-600 font-semibold">
              Chinmay Trivedi
            </span>{" "}
            and{" "}
            <span className="text-orange-600 font-semibold">
              Ankita Singh Rajput
            </span>{" "}
            started their journeys facing the same struggles most beginners
            do—confusion, inconsistency, and a lack of structured learning. They
            knew what it felt like to be overwhelmed with information but still
            feel stuck when it came to taking the right trades.
          </p>

          {/* Second Paragraph */}
          <p className="text-gray-300 w-full max-w-5xl mx-auto mb-4 sm:mb-6 text-sm sm:text-base md:text-lg lg:text-xl text-center relative z-10">
            Instead of giving up, they decided to change the way trading
            education works. What began as sharing their own strategies, wins,
            and lessons online quickly turned into something much bigger: a
            growing community of traders hungry for clarity, structure, and real
            mentorship.
          </p>

          {/* Third Paragraph */}
          <p className="text-gray-300 w-full max-w-5xl mx-auto text-sm sm:text-base md:text-lg text-center relative z-10 mb-10 sm:mb-14 md:mb-16 lg:mb-0">
            That's how{" "}
            <span className="text-orange-600 font-semibold">
              Threestocks was born.
            </span>
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 px-0 lg:pl-40 mt-10 sm:mt-14 md:mt-16 lg:mt-20 relative z-10">
          {/* Left Column */}
          <div className="lg:col-span-7 lg:pr-10 pt-0 lg:pt-28 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin mb-4 sm:mb-5 text-white text-center lg:text-left">
              Today, Threestocks is more than just a brand-it's an ecosystem
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-full lg:max-w-sm w-full text-center lg:text-left mx-auto lg:mx-0">
              A{" "}
              <span className="text-orange-600 font-semibold">
                Telegram Community
              </span>{" "}
              (Crypto FX) with daily, premium forex trade setups, updates, and
              guidance.
            </p>

            <div className="w-full flex items-center justify-center lg:justify-end mt-6 sm:mt-8 md:mt-10">
              <div className="mt-6 sm:mt-8 md:mt-10 w-full max-w-xs sm:max-w-sm md:w-72 bg-orange-600 px-[1px] pt-[1px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg flex flex-col">
                {/* Top content */}
                <div className="flex flex-col items-center justify-between bg-[#2b1303] rounded-t-2xl sm:rounded-t-3xl flex-1 p-3 sm:p-4">
                  <h3 className="text-gray-300 text-xs sm:text-sm">Statistfied Trader</h3>
                  <div className="w-full border-t border-gray-500 my-4 sm:my-6 md:my-8"></div>
                  <div className="flex items-center justify-between gap-6 sm:gap-8 md:gap-10 w-full">
                    <div className="flex items-center justify-center gap-1 sm:gap-2">
                      <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-300">99</span>
                      <span className="text-xl sm:text-2xl text-gray-300">%</span>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm mt-2">Last month</p>
                  </div>
                </div>

                {/* Bottom image */}
                <div className="w-full h-16 sm:h-20">
                  <img
                    src={cardbottom}
                    alt="bottom design"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative lg:col-span-5 flex flex-col gap-4 sm:gap-6 md:gap-8">
            <div className="w-full z-10">
              <img src={tradeview} className="w-full rounded-lg sm:rounded-xl" alt="" />
            </div>
            <div className="relative z-20">
              <p className="text-gray-300 max-w-full lg:max-w-sm text-sm sm:text-base text-center lg:text-left mx-auto lg:mx-0">
                A <span className="text-orange-600 font-semibold">Structured Independent Trader Program</span>, designed to help traders master the foundations, build profitable strategies, and trade confidently on their own.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;