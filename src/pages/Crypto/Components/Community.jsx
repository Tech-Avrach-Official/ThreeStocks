import React from "react";
import { motion } from "framer-motion"; // ✅ Import Framer Motion
import img01 from "../../../assets/Join-Crypto/img01.svg";
import img02 from "../../../assets/Join-Crypto/img02.svg";
import img03 from "../../../assets/Join-Crypto/img03.svg";
import img04 from "../../../assets/Join-Crypto/img04.svg";
import img05 from "../../../assets/Join-Crypto/img05.svg";
import img06 from "../../../assets/Join-Crypto/img06.svg";

// Reusable floating animation
const floatAnim = {
  y: [0, -15, 0, 15, 0], // up-down effect
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// Desktop View Component
const DesktopView = () => {
  return (
    <div className="relative w-[80vw] max-w-[70rem] aspect-square p-[3px] rounded-full border border-purple-700 flex items-center justify-center ">
      {/* Inner Circle with Gradient Border */}
      <div className="w-[80%] aspect-square p-[1px] rounded-full bg-gradient-to-r from-purple-500 via-purple-500 to-yellow-500 flex items-center justify-center relative">
        {/* Content Circle */}
        <div className="w-full h-full rounded-full bg-black relative flex flex-col items-center justify-center">
          {/* Floating Images positioned around the circle */}
          <motion.div animate={floatAnim} className="absolute -top-5 left-0">
            <img src={img01} alt="" className="w-[20rem] rounded-lg" />
          </motion.div>

          <motion.div animate={floatAnim} transition={{ duration: 7, repeat: Infinity }} className="absolute top-10 -right-10">
            <img src={img02} alt="" className="w-[20rem] rounded-lg" />
          </motion.div>

          <motion.div animate={floatAnim} transition={{ duration: 8, repeat: Infinity }} className="absolute top-1/2 -right-40 -translate-y-1/2">
            <img src={img03} alt="" className="w-[20rem] rounded-lg" />
          </motion.div>

          <motion.div animate={floatAnim} transition={{ duration: 6.5, repeat: Infinity }} className="absolute -bottom-10 -right-10">
            <img src={img04} alt="" className="w-[20rem] rounded-lg" />
          </motion.div>

          <motion.div animate={floatAnim} transition={{ duration: 7.5, repeat: Infinity }} className="absolute bottom-10 left-0">
            <img src={img05} alt="" className="w-[20rem] rounded-lg" />
          </motion.div>

          <motion.div animate={floatAnim} transition={{ duration: 9, repeat: Infinity }} className="absolute top-1/2 -left-40 -translate-y-1/2">
            <img src={img06} alt="" className="w-[20rem] rounded-lg" />
          </motion.div>

          {/* Center Content */}
          <div className="w-[70%] aspect-square p-[1px] rounded-full bg-gradient-to-r from-purple-500 via-purple-500 to-yellow-500 flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-black flex flex-col items-center justify-center px-4">
              <h1 className="text-4xl lg:text-5xl font-normal leading-tight relative z-10 text-white text-center">
                Why Join CryptoFX <br /> Club?
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mobile View Component
const MobileView = () => {
  const features = [
    { img: img01, title: "Expert Trading Signals", desc: "Get real-time signals from professionals" },
    { img: img02, title: "24/7 Support", desc: "Round the clock assistance" },
    { img: img03, title: "Educational Resources", desc: "Learn from the best traders" },
    { img: img04, title: "Community Access", desc: "Connect with fellow traders" },
    { img: img05, title: "Market Analysis", desc: "Daily market insights" },
    { img: img06, title: "Premium Tools", desc: "Advanced trading tools" }
  ];

  return (
    <div className="w-full px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-normal leading-tight text-white mb-2">
          Why Join CryptoFX Club?
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-yellow-500 mx-auto mt-4"></div>
      </div>

      {/* Feature Grid with floating images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
          // slight variation per card
            className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-700/30 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
          >
            <img src={feature.img} alt={feature.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Component
const Community = () => {
  return (
    <div className="min-h-screen bg-black w-full flex items-center justify-center">
      {/* Desktop View */}
      <div className="hidden lg:flex items-center justify-center w-full py-20">
        <DesktopView />
      </div>

      {/* Mobile View */}
      <div className="lg:hidden w-full">
        <MobileView />
      </div>
    </div>
  );
};

export default Community;
