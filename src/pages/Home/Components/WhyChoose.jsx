import React from "react";
import { motion } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";
import graph from "../../../assets/graph.png";
import bull from "../../../assets/bull.png";
import TradeGraph from "../../../assets/tradegraph.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const WhyChoose = () => {
  return (
    <div className="min-h-screen pb-24 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute w-[300px] h-[244px] opacity-97"
        style={{
          top: "45%",
          left: "25%",
          background: "linear-gradient(142.36deg, #FF6A00 0%, #FE9502 100%)",
          filter: "blur(131.8px)",
          transform: "rotate(142.36deg)",
          zIndex: 1,
        }}
      ></div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-between h-full">
            {/* Left Content */}
            <motion.div
              className="flex flex-col justify-between w-full h-full gap-10 lg:gap-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <div className="flex flex-col items-center lg:items-start w-full h-full text-center lg:text-left">
                {/* Tag */}
                <motion.div
                  variants={fadeUp}
                  custom={0.1}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#623C0740] w-fit px-4 py-2 mb-5 rounded-full mx-auto lg:mx-0 transition-transform duration-300"
                >
                  <span className="border-2 border-orange-500/70 text-white text-sm sm:text-base md:text-lg px-5 md:px-7 py-1 rounded-full">
                    Why Choose Us
                  </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                  variants={fadeUp}
                  custom={0.2}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 lg:mt-10 mb-10 lg:mb-20 font-normal text-white leading-snug"
                >
                  We're Built for
                  <br className="hidden sm:block" />
                  Beginners and
                  <br className="hidden sm:block" />
                  Perfect for Pros.
                </motion.h1>

                {/* CTA Button */}
                <motion.div
                  variants={fadeUp}
                  custom={0.3}
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative"
                >
                  <button className="relative border border-[#FFCF11] bg-gradient-to-r from-[#fe9502] to-[#FF6A00] text-white text-base sm:text-lg md:text-xl font-semibold px-5 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300">
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-2 sm:h-3 bg-orange-500 blur-lg rounded-full"></span>
                    Start Now
                  </button>
                </motion.div>
              </div>

              {/* Bottom Chart + Tags */}
              <motion.div
                variants={fadeUp}
                custom={0.4}
                className="flex flex-row items-end justify-center lg:justify-start gap-4 lg:mt-0"
              >
                <img src={graph} className="w-32 sm:w-48" alt="graph" />
                <div className="flex flex-wrap gap-2">
                  {["Profit", "Crypto", "Finance"].map((tag, i) => (
                    <motion.span
                      key={tag}
                      className="px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-orange-500 text-white text-xs sm:text-sm font-medium"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(255,106,0,0.15)",
                        transition: { duration: 0.3 },
                      }}
                      animate={{
                        y: [0, -4, 0],
                        transition: {
                          duration: 2 + i,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Cards */}
            <motion.div
              className="space-y-6 lg:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              {/* Arrows */}
              <motion.div
                variants={fadeUp}
                custom={0.2}
                className="flex gap-2 justify-center lg:justify-end mb-6"
              >
                <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-orange-600/50 bg-orange-900/20 backdrop-blur-sm flex items-center justify-center text-orange-300 hover:bg-orange-900/40 hover:scale-110 transition-all">
                  <ChevronUp className="w-4 h-4" />
                </button>
                <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-orange-600/50 bg-orange-900/20 backdrop-blur-sm flex items-center justify-center text-orange-300 hover:bg-orange-900/40 hover:scale-110 transition-all">
                  <ChevronDown className="w-4 h-4" />
                </button>
              </motion.div>

              {/* Secure Card */}
              <motion.div
                variants={fadeUp}
                custom={0.3}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 0px 25px rgba(255,106,0,0.3)",
                }}
                className="bg-[#FF6E0740] rounded-3xl border-2 border-orange-600/60 backdrop-blur-sm overflow-hidden transition-transform duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                  <img
                    src={bull}
                    className="w-full h-48 sm:h-[19rem] object-cover"
                    alt="bull"
                  />
                  <div className="px-4 py-6">
                    <p className="text-white text-sm sm:text-base md:text-lg">
                      We offer cutting-edge encryption and multi-layered
                      security to keep your assets and data protected.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Fees Card */}
              <motion.div
                variants={fadeUp}
                custom={0.4}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 0px 25px rgba(255,106,0,0.25)",
                }}
                className="bg-[#FF6A0026] rounded-3xl p-4 sm:p-5 border-2 border-orange-600/60 transition-transform duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 border border-orange-600/60 rounded-3xl items-center">
                  <img
                    src={TradeGraph}
                    className="w-full h-40 sm:h-56 md:h-[250px] object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
                    alt="trade graph"
                  />
                  <div className="space-y-3 sm:space-y-5 text-center md:text-left">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal text-white">
                      Low Fees,
                      <br /> High Returns
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Maximize your profits with our competitive trading fees
                      and transparent pricing.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
