import { ArrowRight, ArrowUpRight, Copy } from "lucide-react";
import React from "react";
import arrow from "../../../assets/arrow.svg";
import doublearrow from "../../../assets/doublearrow.svg";
import whoeffect from "../../../assets/whoeffect.svg";
import bitcoin from "../../../assets/bitcoin.svg";

const WhoSection = () => {
  const audiences = [
    "Beginners who want to trade professionally.",
    "Intermediate traders looking to refine strategies.",
    "Investors aiming to diversify into Forex & Crypto.",
    "Anyone wanting to build a full-time trading career.",
  ];

  const transactions = [
    {
      currency: "Ethereum",
      status: "sent",
      amount: "$743,453",
      address: "0x4613...72862",
    },
    {
      currency: "Ethereum",
      status: "sent",
      amount: "$743,453",
      address: "0x4613...72862",
    },
  ];

  return (
    <div className="bg-black flex items-center justify-center px-4 sm:px-6 md:px-8 relative overflow-hidden">
      <div className="relative max-w-7xl z-10 w-full py-10 sm:py-14 md:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
        <div className="absolute w-full h-full flex items-center justify-center">
          <img src={whoeffect} className="w-[80%] sm:w-[70%] lg:w-[60%] -z-10" alt="" />
        </div>
        
        {/* Left Section */}
        <div className="">
          <h2 className="text-sm sm:text-base underline font-thin mb-5 sm:mb-4 md:mb-5 text-white">
            Who Is This For?
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-thin leading-tight sm:leading-none text-white mb-8 md:mb-0">
            Built to guide every trader — from beginners to career investors.
          </h1>
          <div className="hidden md:flex items-center justify-center lg:justify-end mt-6 sm:mt-8 md:mt-10 mb-8 sm:mb-12 md:mb-16 gap-5">
            <img src={bitcoin} className="w-12 sm:w-14 md:w-16" alt="" />
          </div>
          <div>
            <div className="w-full md:max-w-3xl space-y-3 sm:space-y-4 md:space-y-6">
              {audiences.map((text, index) => (
                <button
                  key={index}
                  className=" group relative overflow-hidden rounded-full border border-[#FF6A00] bg-[#FE950226] px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 text-left transition-all duration-300 hover:border-amber-600 hover:shadow-lg hover:shadow-amber-900/50"
                >
                  <div className="flex items-center gap-3 sm:gap-6 md:gap-10 justify-between">
                    <span className="text-gray-200 text-sm sm:text-base font-light tracking-wide">
                      {text}
                    </span>
                    <img src={arrow} className="w-4 sm:w-5 md:w-auto flex-shrink-0" alt="" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="">
          <div className="flex items-center justify-center lg:justify-end mb-8 lg:mb-0">
            <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl sm:rounded-3xl border border-[#FF6A00] bg-[#FE950226] flex items-center justify-center">
                <ArrowUpRight
                  className="w-4 h-4 sm:w-5 sm:h-5 text-gray-200"
                  strokeWidth={2}
                />
              </div>

              <div>
                <p className="text-gray-300 text-sm sm:text-base leading-tight sm:leading-4 max-w-md">
                  Experience innovation at every
                  <br />
                  step of your trading journey
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 sm:mt-16 md:mt-20 lg:mt-28">
            <div className="flex items-center justify-end lg:justify-end gap-2 flex-wrap">
              <p className="text-white text-xs sm:text-sm py-1.5 sm:py-2 px-2 sm:px-3 border border-[#FF6A00] rounded-full">
                Future
              </p>
              <p className="text-white text-xs sm:text-sm py-1.5 sm:py-2 px-2 sm:px-3 border border-[#FF6A00] rounded-full">
                Secure
              </p>
              <p className="text-white text-xs sm:text-sm py-1.5 sm:py-2 px-2 sm:px-3 border border-[#FF6A00] rounded-full">
                Versatility
              </p>
            </div>
            
            <div className="flex items-center justify-center lg:justify-end mt-3">
              <div className="w-full max-w-md bg-gradient-to-b from-black to-[#915400] rounded-[1.5rem] sm:rounded-[2rem] border-2 border-[#FF6A00] p-4 sm:p-5 md:p-6 shadow-2xl">
                {/* Header with Balance */}
                <div className="flex items-start justify-between mb-6 sm:mb-8 md:mb-10">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
                    0.0253
                  </h2>
                  <span className="px-2 sm:px-3 py-1 border border-white rounded-full text-white text-xs sm:text-sm">
                    BTC
                  </span>
                </div>

                {/* Wallet Address Section */}
                <div className="bg-gradient-to-b from-black to-[#915400] rounded-2xl sm:rounded-3xl py-3 sm:py-4 px-3 sm:px-4 md:px-5 mb-6 sm:mb-8 md:mb-10 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-white text-xs sm:text-sm md:text-base mb-1">
                      Wallet Address
                    </p>
                    <p className="text-white text-sm sm:text-base md:text-lg font-mono truncate">
                      0x4613 ... 72862 4f43 zd2503
                    </p>
                  </div>
                  <button className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-amber-800 rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-amber-600 transition-colors flex-shrink-0">
                    <img src={doublearrow} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" alt="" />
                  </button>
                </div>

                {/* Transaction List */}
                <div className="space-y-2 sm:space-y-3">
                  {transactions.map((tx, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 sm:gap-3 md:gap-4"
                    >
                      {/* Icon */}
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-b from-black to-[#915400] rounded-full flex items-center justify-center flex-shrink-0">
                        <img src={doublearrow} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" alt="" />
                      </div>

                      {/* Transaction Details */}
                      <div className="flex-1 min-w-0">
                        <p className="text-amber-100 text-xs sm:text-sm font-medium">
                          {tx.currency}
                        </p>
                        <p className="text-amber-400 text-[10px] sm:text-xs">{tx.status}</p>
                      </div>

                      {/* Dotted Line - Hidden on mobile */}
                      <div className="hidden sm:block flex-1 border-b border-dotted border-amber-700/50"></div>

                      {/* Amount and Address */}
                      <div className="text-right">
                        <p className="text-amber-100 text-xs sm:text-sm font-medium">
                          {tx.amount}
                        </p>
                        <p className="text-amber-400 text-[10px] sm:text-xs">{tx.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoSection;