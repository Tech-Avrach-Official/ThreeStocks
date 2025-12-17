import React from "react";

const About = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#623C0740] px-4 py-3 mb-5 rounded-full">
            <span className="border-2 border-orange-500/60 text-white text-md  px-3 py-1 rounded-full  relative z-10">
              About Us
            </span>
          </div>
          <div>
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-8 relative z-10 text-white text-center">
              Trade with Confidence, <br /> Profit with Ease.
            </h1>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
