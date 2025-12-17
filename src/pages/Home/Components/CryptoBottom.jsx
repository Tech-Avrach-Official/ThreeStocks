import React from "react";
import { Play } from "lucide-react";
import cryptoImg01 from "../../../assets/cryptoImg01.png";
import cryptoImg02 from "../../../assets/cryptoImg02.jpg";
export const CryptoBottom = () => {

    const tags = ["Profit", "Crypto", "Finance"];

  return (
    <div className="min-h-screen bg-black p-8 flex items-center justify-center">
      <div className="max-w-7xl w-full h-full gap-5 flex items-start justify-center flex-col lg:flex-row">
        {/* Main Hero Card */}
        <div
          className="w-full relative rounded-3xl  border-2 border-amber-600 overflow-hidden"
          style={{
            backgroundImage: `url(${cryptoImg01})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >

            <div className="absolute inset-0 bg-black/70 z-0"></div>
          {/* Gradient Background */}

          {/* Content */}
          <div className="relative z-10 px-10 py-20">
            {/* Tag */}
             <div className="w-fit bg-[#623C0740] px-1 py-2 mb-4 md:mb-5 rounded-full">
        <span className="border-2 border-orange-500/60 text-white text-sm md:text-md px-2 md:px-3 py-1 rounded-full relative z-10">
        Crypto Trade.
      </span>
      </div>

            {/* Heading */}
            <h1 className="text-3xl h-[200px] md:h-auto md:text-5xl font-bold text-white mb-12 leading-tight">
              Ready to Transform
              <br />
              Your Business with AI?
            </h1>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-orange-500/50 transition-all">
                Start Now!
              </button>
              <button className="relative w-12 h-12 md:w-14 md:h-14 rounded-full border border-orange-500 flex items-center justify-center bg-[#ffa15a5d] transition-all duration-200">
             
                     {/* Play Icon */}
                     <span className="flex items-center justify-center p-1.5 md:p-2 bg-[#ff904188] border border-orange-500 rounded-full bg-">
                       <Play className="w-4 h-4 md:w-5 md:h-5 text-white ml-0.5" fill="white" />
                     </span>
                   </button>
            </div>
          </div>
        </div>

        {/* Side Card */}
        <div className="w-full lg:w-[28rem] pt-10 overflow-hidden">
          {/* Gradient Background */}
          <div className="relative rounded-3xl h-[500px] border-2 border-amber-600"
            style={{
              backgroundImage: `url(${cryptoImg02})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              
            }}
          >
            <div className="absolute inset-0 bg-black/70 rounded-3xl z-0"></div>
            {/* Tags */}
           <div className="absolute top-5  left-1/2 -translate-x-1/2 grid grid-cols-3 gap-1 rounded-full w-[80%] bg-[#FF6A0040] p-1">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="border border-[#FF6A00] text-center text-white text-base font-medium  py-1 rounded-full"
                  >{tag}</div>
                ))}
              </div>

            {/* Decorative Elements */}
          

            {/* Play Button */}
           <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border border-orange-500 flex items-center justify-center bg-[#ffa15a5d] transition-all duration-200">
             
                     {/* Play Icon */}
                     <span className="flex items-center justify-center p-1.5 md:p-2 bg-[#ff904188] border border-orange-500 rounded-full bg-">
                       <Play className="w-4 h-4 md:w-5 md:h-5 text-white ml-0.5" fill="white" />
                     </span>
                   </button>

            {/* Bottom decorative circles */}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoBottom;
