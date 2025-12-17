import React from "react";
import {
  BarChart3,
  DollarSign,
  SquareArrowOutUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import gridimg from "../../../assets/grid-img.png";

const GridSection = () => {
  const tags = ["Profit", "Crypto", "Finance", "Trade", "Invest"];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const hoverScale = {
    hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <div className="bg-black py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid lg:grid-cols-3 gap-12 md:gap-8 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Card */}
          <motion.div
            variants={fadeUp}
            whileHover="hover"
            className="p-5 bg-[#FE950226] rounded-3xl"
          >
            <motion.div
              variants={hoverScale}
              className="bg-[#FF6A0026] h-full w-full rounded-3xl p-8 border border-[#FF6A00] backdrop-blur-sm"
            >
              <div className="space-y-10 flex flex-col h-full items-center justify-center">
                <div className="flex gap-4">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center"
                  >
                    <DollarSign className="w-6 h-6 text-white" />
                  </motion.div>
                  <motion.div
                    whileHover={{ rotate: -10, scale: 1.1 }}
                    className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center"
                  >
                    <BarChart3 className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                <p className="text-gray-200 text-center text-base">
                  Custom charts, data filters, and tools tailored to your style.
                </p>

                <h3 className="text-white text-center text-2xl font-semibold">
                  CUSTOMIZABLE
                  <br />
                  DASHBOARD
                </h3>
              </div>
            </motion.div>
          </motion.div>

          {/* Middle Card */}
          <motion.div variants={fadeUp} className="h-full w-full flex flex-col gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-full relative"
            >
              <img src={gridimg} className="w-full h-full object-cover" alt="" />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 grid grid-cols-5 gap-1 rounded-full w-[95%] bg-[#FF6A0040] p-1">
                {tags.map((tag, index) => (
                  <motion.div
                    whileHover={{ backgroundColor: "#FF6A00", scale: 1.05 }}
                    key={index}
                    className="border border-[#FF6A00] text-center text-white text-base font-medium py-1 rounded-full cursor-default"
                  >
                    {tag}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative h-full p-5 bg-[#FF6A0026] border border-[#FF6A00] rounded-3xl"
            >
              <SquareArrowOutUpRight className="absolute top-4 right-4 w-4 h-4 text-white" />
              <div className="h-full flex items-center justify-center">
                <h3 className="text-white text-center text-2xl font-semibold mb-4">
                  ADVANCED
                  <br />
                  TRADING TOOLS
                </h3>
              </div>
              <div className="absolute -bottom-7 left-1/2 -translate-x-1/2">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(255,106,0,0.7)",
                  }}
                  className="relative border border-[#FFCF11] bg-gradient-to-r from-[#fe9502] to-[#FF6A00] text-white text-xl font-semibold px-6 py-4 rounded-full"
                >
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-3 bg-orange-500 blur-lg rounded-full"></span>
                  Start Now
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            variants={fadeUp}
            whileHover="hover"
            className="p-5 bg-[#FE950226] rounded-3xl"
          >
            <motion.div
              variants={hoverScale}
              className="bg-[#FF6A0026] h-full w-full rounded-3xl p-8 border border-[#FF6A00] backdrop-blur-sm"
            >
              <div className="space-y-10 flex flex-col h-full items-center justify-center">
                <h3 className="text-white text-center text-2xl font-semibold">
                  HIGH-SPEED
                  <br />
                  TRANSACTIONS
                </h3>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(255,106,0,0.7)",
                  }}
                  className="relative border border-[#FFCF11] bg-gradient-to-r from-[#fe9502] to-[#FF6A00] text-white text-xl font-semibold px-6 py-4 rounded-full"
                >
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-3 bg-orange-500 blur-lg rounded-full"></span>
                  Start Now
                </motion.button>

                <p className="text-gray-200 text-center text-base">
                  Custom charts, data filters, and tools tailored to your style.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Soft glowing background elements */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl"
      ></motion.div>
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        className="absolute bottom-20 right-10 w-40 h-40 bg-red-500/10 rounded-full blur-2xl"
      ></motion.div>
    </div>
  );
};

export default GridSection;
