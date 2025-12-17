import React from "react";
import { motion } from "framer-motion";
import aboutheader from "../../../assets/aboutheader.png";
import aboutheader02 from "../../../assets/aboutheader02.png";
import cryptomission from "../../../assets/cryptomission.svg";
import mobile from "../../../assets/mobile.png";
import cryptomobile from "../../../assets/cryptomobile.png";
import cryptoglow from "../../../assets/mobile-mockups/cryptoglow.svg" ;

const CryptoHeader = () => {
  return (
    <div className="w-full  pt-24 px-4 md:px-0  bg-black">
      <div className="relative w-full pt-[5rem] md:pt-[15rem] pb-10">
        <div className="absolute top-0 w-full h-full md:px-10">
          <img src={aboutheader} className="w-full" alt="" />
        </div>
        <div className=" w-full h-full">
          <div>
            <h1 className="text-5xl md:text-[6rem] font-normal leading-tight mb-2 md:mb-5 text-white text-center">
            Crypto Fx Club
          </h1>
          <p className="text-gray-300 text-sm md:text-xl text-center mb-5 md:mb-0">
            Where Smart Traders Multiply Results
          </p>
          </div>
          <div className=" md:px-10">
            <img src={aboutheader02} className="w-full" alt="" />
          </div>
          <div className="relative w-full h-full">
            <img src={cryptoglow} className="hidden md:block w-[20rem] rotate-180 absolute top-1/2 left-0 -translate-y-1/2" alt="" />
            <div className="max-w-7xl pt-5 md:pt-0 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-full">
              <div className="flex flex-col items-center justify-center">
              <img src={cryptomobile} className="w-[15rem] md:w-[30rem]" alt="" />
            </div>
           <div className="flex flex-col justify-center gap-6">
             <p className="text-white max-w-5xl mx-auto text-sm text-center md:text-start md:text-xl">CryptoFX Club is a dynamic community-driven platform designed to empower traders and investors with the knowledge, tools, and opportunities they need to succeed in the fast-paced worlds of cryptocurrency and forex markets.
            <br />
            <br />
             We bring together education, research-based analysis, and real-time opportunities under one roof, creating a complete ecosystem for both beginners and experienced traders.
             </p>

              <button className="relative self-center md:self-start md:w-fit border border-[#FFCF11] bg-gradient-to-r from-[#FE9502] to-[#ffd500] text-white text-base md:text-base font-semibold px-4 md:px-10 py-2 md:py-3 rounded-full">
        {/* Outer Glow under Play Btn */}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-2 md:h-3 bg-orange-500 blur-lg rounded-full"></span>

        {/* Play Icon */}
        Join Us
        {/* <Play className="w-6 h-6 text-white ml-0.5" fill="white" /> */}
      </button>
           </div>
            </div>
          </div>
    <div className="bg-black w-full flex items-center justify-center mt-24">
  <div className="max-w-7xl w-full">
    {/* First Card */}
    <div className=" bg-gradient-to-r from-[#947600] to-[#060606] border-r-2 border-[#FFCF11] rounded-2xl md:rounded-2xl py-10 md:py-0 px-5 text-white flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
      {/* Hexagon Shape */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.img 
          src={cryptomission}
          className="h-56 w-72 rounded-lg"
          alt="Crypto Mission"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </motion.div>

      {/* Text */}
      <div className="text-center sm:text-left">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
          Our Mission
        </h2>
        <p className="text-sm sm:text-base md:text-lg font-thin  mt-2">
         To simplify trading and investing in crypto and forex markets by providing quality education, actionable insights, and a supportive community that helps members build sustainable wealth.
        </p>
      </div>
    </div>

    {/* Second Card */}
   
  </div>

  {/* Custom Hexagon Shape */}
  <style>
    {`
      .clip-hexagon {
        clip-path: polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%);
      }
    `}
  </style>
</div>

        </div>
      </div>
      {/* <div>
            <img src={aboutheader} className='w-full ' alt="" />
        </div> */}
    </div>
  );
};

export default CryptoHeader;
