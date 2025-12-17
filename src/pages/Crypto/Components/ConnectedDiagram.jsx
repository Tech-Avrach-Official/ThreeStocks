import React from "react";
import star from '../../../assets/star.png'
import menu from '../../../assets/menu.png'
import bulb from '../../../assets/bulb.png'
import rocket from '../../../assets/rocket.png'
import join from '../../../assets/join.png'
import multiplestar from '../../../assets/multiplestar.png'
import whatdo01 from '../../../assets/what-do-01.png'
import whatdo02 from '../../../assets/what-do-02.png'
import whatdo03 from '../../../assets/what-do-03.png'


const ConnectedDiagram = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40 pt-32 h-full">
        {/* <div className="flex flex-col items-center justify-center pt-6 sm:pt-8 lg:pt-10 pb-10 sm:pb-15 lg:pb-20">
          <div className="flex items-center gap-2 text-center w-fit text-white rounded-full px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 bg-[#ffcc0070] border border-[#787878] hover:bg-[#ffcc0090] transition-all duration-300 hover:scale-105">
            <img src={multiplestar} className="w-3 sm:w-4 h-3 sm:h-4 animate-pulse" alt="" />
           <span className="text-sm sm:text-base"> ABC</span>
          </div>
          <div className="mt-3 sm:mt-4 lg:mt-5 px-2 sm:px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-4 sm:mb-6 lg:mb-8 relative z-10 text-white text-center">
              Innovative Problem-Solving for Your Business Needs
            </h1>
          </div>
        </div> */}

        <div className="relative w-full h-[35rem] sm:h-[40rem] md:h-[45rem] lg:h-[50rem] ">
         <div className="w-full h-32 sm:h-40 md:h-48 lg:h-56 rounded-t-[50px] sm:rounded-t-[70px] lg:rounded-t-[100px] border-b-0 border border-[#FFCF11] hover:shadow-[0_-22px_30px_rgba(255,207,17,0.3)] transition-all duration-500"></div>

          {/* Left Card - Desktop positioning preserved, mobile stacked */}
          <div className="absolute top-32 sm:top-40 md:top-48 lg:top-56 left-1/2 sm:left-1/2 lg:left-0 transform -translate-x-1/2 lg:-translate-x-1/2 w-72 sm:w-76 lg:w-80 rounded-2xl lg:rounded-3xl cursor-pointer group">
            {/* <div className="flex items-center justify-between">
                <img src={star} className="w-3 sm:w-4 h-3 sm:h-4 group-hover:rotate-12 transition-transform duration-300" alt="" />
                <img src={star} className="w-3 sm:w-4 h-3 sm:h-4 group-hover:-rotate-12 transition-transform duration-300" alt="" />
            </div>
            <div className="mt-3 lg:mt-5">
                <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-light text-center mt-2 group-hover:text-[#FFCF11] transition-colors duration-300">Developing tailored solutions</h3>
                <p className="text-white text-sm sm:text-base font-light text-center mt-2 group-hover:text-gray-300 transition-colors duration-300">Next, our team of experts develops tailored solutions.</p>
            </div> */}
            <img src={whatdo01} className="w-full" alt="" />
          </div>
          
          {/* Left Icon */}
          <div className="absolute top-24 sm:top-32 md:top-40 lg:top-48 left-1/2 sm:left-1/2 lg:left-0 transform -translate-x-1/2 lg:-translate-x-1/2 flex items-center justify-center w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 bg-[#FFCF11] rounded-full border border-white hover:scale-110 hover:rotate-12 hover:shadow-[0_0_15px_rgba(255,207,17,0.5)] transition-all duration-300 cursor-pointer z-20">
            <img src={bulb} className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 hover:scale-110 transition-transform duration-300" alt="" />
          </div>

          {/* Right Card - Hidden on mobile, shown on larger screens */}
          <div className="hidden lg:block absolute top-56 right-0 transform translate-x-1/2 w-72 sm:w-76 lg:w-80 rounded-3xl cursor-pointer group">
           {/* <div className="flex items-center justify-between">
                <img src={star} className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" alt="" />
                <img src={star} className="w-4 h-4 group-hover:-rotate-12 transition-transform duration-300" alt="" />
            </div>
            <div className="mt-5">
                <h3 className="text-white text-3xl font-light text-center mt-2 group-hover:text-[#FFCF11] transition-colors duration-300">Implementation & Results</h3>
                <p className="text-white text-base font-light text-center mt-2 group-hover:text-gray-300 transition-colors duration-300">Finally, we implement and deliver exceptional results.</p>
            </div> */}
            <img src={whatdo02} className="w-full" alt="" />
          </div>

          {/* Right Icon - Hidden on mobile */}
          <div className="hidden lg:flex absolute top-48 right-0 transform translate-x-1/2 items-center justify-center w-14 h-14 rounded-full bg-[#FFCF11] border border-white hover:scale-110 hover:rotate-12 hover:shadow-[0_0_15px_rgba(255,207,17,0.5)] transition-all duration-300 cursor-pointer z-20">
           <img src={rocket} className="w-10 h-10 hover:scale-110 transition-transform duration-300" alt="" />
          </div>

          {/* Bottom Card */}
          <div className="absolute top-72 sm:top-80 md:top-[22rem] lg:top-96 left-1/2 transform -translate-x-1/2 w-72 sm:w-76 lg:w-80  cursor-pointer group">
            {/* <div className="flex items-center justify-between">
                <img src={star} className="w-3 sm:w-4 h-3 sm:h-4 group-hover:rotate-12 transition-transform duration-300" alt="" />
                <img src={star} className="w-3 sm:w-4 h-3 sm:h-4 group-hover:-rotate-12 transition-transform duration-300" alt="" />
            </div>
            <div className="mt-3 lg:mt-5">
                <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-light text-center mt-2 group-hover:text-[#FFCF11] transition-colors duration-300">Understanding your goals</h3>
                <p className="text-white text-sm sm:text-base font-light text-center mt-2 group-hover:text-gray-300 transition-colors duration-300">
                  We start by gaining a deep understanding of your business goals. We take the time to learn about your unique vision, challenges, and objectives.
                </p>
            </div> */}
            <img src={whatdo03} className="w-full" alt="" />
          </div>
          
          {/* Bottom Icon */}
          <div className="absolute top-64 sm:top-72 md:top-[21rem] lg:top-[22rem] left-1/2 transform -translate-x-1/2  flex items-center justify-center w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 bg-[#FFCF11] rounded-full border border-white hover:scale-110 hover:rotate-12 hover:shadow-[0_0_15px_rgba(255,207,17,0.5)] transition-all duration-300 cursor-pointer z-30">
            <img src={join} className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 hover:scale-110 transition-transform duration-300" alt="" />
          </div>

          {/* Center Top Circle */}
          <div className="absolute -top-8 sm:-top-10 lg:-top-12 left-1/2 transform -translate-x-1/2 z-10 border border-[#787878] rounded-full p-0.5 sm:p-1 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,207,17,0.3)] transition-all duration-500 cursor-pointer group">
           <div className="border border-[#787878] rounded-full p-0.5 sm:p-1 group-hover:border-[#FFCF11] transition-colors duration-300">
           <div className="border border-[#787878] rounded-full p-0.5 sm:p-1 group-hover:border-[#FFCF11] transition-colors duration-300">
            <div className="w-14 sm:w-16 lg:w-20 h-14 sm:h-16 lg:h-20 bg-[#FFCF11] flex items-center justify-center rounded-full group-hover:bg-[#FFD700] transition-colors duration-300">
             <img src={menu} className="w-8 sm:w-10 lg:w-14 h-8 sm:h-10 lg:h-14 group-hover:rotate-180 transition-transform duration-500" alt="" />
           </div>
           </div>
           </div>
          </div>

          {/* Center Vertical Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1px] bg-[#FFCF11] h-72 sm:h-80 md:h-88 lg:h-96 mx-auto animate-pulse"></div>

          {/* Mobile-only Right Card - Positioned below the main content */}
          <div className="lg:hidden absolute top-[28rem] sm:top-[32rem] left-1/2 transform -translate-x-1/2 w-72 sm:w-76 p-3 sm:p-4 rounded-2xl bg-[#2d2c2c] border border-white hover:bg-[#3d3c3c] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 cursor-pointer group">
           <div className="flex items-center justify-between">
                <img src={star} className="w-3 sm:w-4 h-3 sm:h-4 group-hover:rotate-12 transition-transform duration-300" alt="" />
                <img src={star} className="w-3 sm:w-4 h-3 sm:h-4 group-hover:-rotate-12 transition-transform duration-300" alt="" />
            </div>
            <div className="mt-3">
                <h3 className="text-white text-xl sm:text-2xl font-light text-center mt-2 group-hover:text-[#FFCF11] transition-colors duration-300">Implementation & Results</h3>
                <p className="text-white text-sm sm:text-base font-light text-center mt-2 group-hover:text-gray-300 transition-colors duration-300">Finally, we implement and deliver exceptional results for your business.</p>
            </div>
          </div>

          {/* Mobile-only Right Icon */}
          <div className="lg:hidden absolute top-[26.5rem] sm:top-[30rem] left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 bg-[#FFCF11] rounded-full border border-white hover:scale-110 hover:rotate-12 hover:shadow-[0_0_15px_rgba(255,207,17,0.5)] transition-all duration-300 cursor-pointer">
           <img src={rocket} className="w-6 sm:w-8 h-6 sm:h-8 hover:scale-110 transition-transform duration-300" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectedDiagram;