import React, { useEffect, useState } from "react";
import { TrendingUp, Globe, Brain, ArrowRight } from "lucide-react";
import tradetip from "../../../assets/tradetip.jpg";
import account from "../../../assets/account.png";

const TradeTipsSection = () => {
  const [mintedAmount, setMintedAmount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Animation for minted amount counting up
  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      let current = 0;
      const target = 80000;
      const increment = target / 100;
      const countTimer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setMintedAmount(target);
          clearInterval(countTimer);
        } else {
          setMintedAmount(Math.floor(current));
        }
      }, 20);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const progressPercentage = (mintedAmount / 100000) * 100;

  return (
    <div className="bg-black py-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 grid lg:grid-cols-2 gap-12 items-stretch">
        <div className="text-white p-4 sm:p-6 lg:p-8 flex flex-col items-start relative">
          {/* Main Content Container */}
          <div className="flex flex-col lg:flex-row items-start gap-4 sm:gap-6 lg:gap-8 w-full">
            {/* Educational Resources Card */}
            <div className="w-full sm:w-[70%] lg:w-[60%] p-3 sm:p-4 bg-[#d49f545a] rounded-2xl sm:rounded-3xl">
              <div className="bg-[#FF6A0026] h-full w-full rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-[#FF6A00] backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <div className="space-y-6 sm:space-y-8 lg:space-y-10 flex flex-col h-full items-center justify-center">
                  {/* Icons */}
                  <h3 className="text-white text-center text-lg sm:text-xl lg:text-2xl font-semibold">
                    HIGH-SPEED
                    <br />
                    TRANSACTIONS
                  </h3>
                  <div className="">
                    <button className="relative border border-[#FFCF11] bg-gradient-to-r from-[#fe9502] to-[#FF6A00] text-white text-base sm:text-lg lg:text-xl font-semibold px-4 sm:px-5 lg:px-6 py-2 sm:py-3 lg:py-4 rounded-full">
                      {/* Outer Glow under Play Btn */}
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 sm:w-28 lg:w-32 h-2 sm:h-2.5 lg:h-3 bg-orange-500 blur-lg rounded-full"></span>
                      Start Learn!
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-gray-200 text-center text-sm sm:text-base px-2">
                    Custom charts, data filters, and tools tailored to your
                    style.
                  </p>

                  {/* Title */}
                </div>
              </div>
            </div>

            {/* Phone Mockup with Chart */}
            <div className="w-full sm:w-[30%] lg:w-[40%] relative">
              <div className="absolute top-0 right-0 bg-[#623C0740] w-fit px-1 py-2 mb-4 md:mb-5 rounded-full">
                <span className="border-2 border-orange-500/60 text-white text-xs sm:text-sm md:text-lg px-1 sm:px-2 md:px-3 py-1 rounded-full relative z-10">
                  Trade Crypto.
                </span>
              </div>
              <div className="mt-20 sm:mt-28 lg:mt-40">
                <img
                  src={tradetip}
                  className="rounded-2xl sm:rounded-3xl border border-orange-500 w-full"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Feature Items */}
          <div className="mt-12 sm:mt-16 lg:mt-20 w-full max-w-none sm:max-w-lg lg:max-w-md">
            <div className="flex items-center justify-between group cursor-pointer hover:bg-gray-900/30 rounded-lg p-2 sm:p-3 transition-all duration-300">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 bg-amber-600/20 rounded-full flex items-center justify-center border border-amber-600/40">
                  <TrendingUp className="w-3 sm:w-3.5 lg:w-4 h-3 sm:h-3.5 lg:h-4 text-amber-400" />
                </div>
                <span className="text-white text-base sm:text-lg lg:text-xl font-normal">
                  Advanced Trading Tools
                </span>
              </div>
              <div className="w-5 sm:w-6 h-5 sm:h-6 bg-amber-600/20 rounded-full flex items-center justify-center border border-amber-600/40 group-hover:bg-amber-600/30 transition-colors">
                <ArrowRight className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-amber-400" />
              </div>
            </div>

            <div className="flex items-center justify-between group cursor-pointer hover:bg-gray-900/30 rounded-lg p-2 sm:p-3 transition-all duration-300">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 bg-amber-600/20 rounded-full flex items-center justify-center border border-amber-600/40">
                  <Globe className="w-3 sm:w-3.5 lg:w-4 h-3 sm:h-3.5 lg:h-4 text-amber-400" />
                </div>
                <span className="text-white text-base sm:text-lg lg:text-xl font-normal">
                  Global Knowledge, Global Markets
                </span>
              </div>
              <div className="w-5 sm:w-6 h-5 sm:h-6 bg-amber-600/20 rounded-full flex items-center justify-center border border-amber-600/40 group-hover:bg-amber-600/30 transition-colors">
                <ArrowRight className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-amber-400" />
              </div>
            </div>

            <div className="flex items-center justify-between group cursor-pointer hover:bg-gray-900/30 rounded-lg p-2 sm:p-3 transition-all duration-300">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 bg-amber-600/20 rounded-full flex items-center justify-center border border-amber-600/40">
                  <Brain className="w-3 sm:w-3.5 lg:w-4 h-3 sm:h-3.5 lg:h-4 text-amber-400" />
                </div>
                <span className="text-white text-base sm:text-lg lg:text-xl font-normal">
                  Empower Minds, Expand Horizons
                </span>
              </div>
              <div className="w-5 sm:w-6 h-5 sm:h-6 bg-amber-600/20 rounded-full flex items-center justify-center border border-amber-600/40 group-hover:bg-amber-600/30 transition-colors">
                <ArrowRight className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-amber-400" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative px-4 sm:px-0">
          {/* Trade Tips Badge */}
          <div
            className="hidden md:block absolute w-[150px] h-[124px] sm:w-[200px] sm:h-[164px] md:w-[250px] md:h-[204px] lg:w-[300px] lg:h-[244px] opacity-97"
            style={{
              top: "10%",
              right: "0%",
              background:
                "linear-gradient(142.36deg, #FF6A00 0%, #FE9502 100%)",
              filter: "blur(120px)",
              transform: "rotate(142.36deg)",
              zIndex: 1,
            }}
          ></div>

          <div className="mb-6 sm:mb-8 text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[2.5rem] font-medium leading-tight mb-4 sm:mb-6">
              Trade Beyond Limits, Grow <br className="hidden sm:block" /> 
              <span className="sm:hidden">Beyond Borders.</span>
              <span className="hidden sm:inline">Beyond Borders.</span>
            </h1>

            <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-full sm:max-w-md">
              Global access, limitless opportunities, and your success at the
              center.
            </p>
          </div>

          {/* Statistics Section */}
          <div className="flex flex-row justify-start sm:flex-row gap-12 sm:gap-16 lg:gap-24 mt-8 sm:mt-12 lg:mt-16">
            {/* 19% Stat */}
            <div className="flex flex-col">
              <div className="text-2xl sm:text-3xl md:text-4xl text-center font-bold text-white mb-2">
                19%
              </div>
              <div className="text-orange-500 text-base sm:text-lg lg:text-xl font-normal">
                On Crypto
              </div>
            </div>

            {/* 40% Stat */}
            <div className="flex flex-col">
              <div className="text-2xl sm:text-3xl md:text-4xl text-center font-bold text-white mb-2">
                40%
              </div>
              <div className="text-orange-500 text-base sm:text-lg lg:text-xl font-normal">
                On tether token
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-10">
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 max-w-4xl w-full">
              {/* Wallet Card */}
              <div
                className={`bg-[#5E3916] rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 flex-1 border border-orange-500 transform transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                {/* Header */}
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                  <h3 className="text-white text-lg sm:text-xl font-semibold">Wallet</h3>
                  <div className="bg-black/40 backdrop-blur-sm rounded-full px-2 sm:px-3 lg:px-4 py-1 sm:py-2 border border-gray-600/50">
                    <span className="text-white text-xs sm:text-sm font-mono">
                      0x4613...7z862
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4 sm:mb-6">
                  <div className="bg-amber-900/50 rounded-full h-3 sm:h-4 overflow-hidden border border-amber-600/30">
                    <div
                      className="bg-gradient-to-r from-orange-400 to-orange-500 h-full rounded-full transition-all duration-2000 ease-out relative overflow-hidden"
                      style={{ width: `${progressPercentage}%` }}
                    >
                      {/* Animated shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Minted Info */}
                <div className="flex justify-between items-end">
                  <div className="flex items-center justify-between w-full">
                    <div className="text-amber-200 text-xs sm:text-sm mb-1">Minted</div>
                    <div className="text-white text-sm sm:text-base lg:text-lg font-semibold">
                      {mintedAmount.toLocaleString()} ETH{" "}
                      <span className="text-amber-200 text-xs sm:text-sm block sm:inline">
                        of 100.000 allocated
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Account Card */}
              <div
                className={`bg-[#5E3916] rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border border-amber-600/30 transform transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                {/* Account Header */}
                <h3 className="text-white text-lg sm:text-xl text-center font-semibold mb-4 sm:mb-6">
                  Account
                </h3>

                {/* Profile Pictures */}
                <div className="flex justify-center">
                  <img src={account} className="w-28 sm:w-32 lg:w-40" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeTipsSection;