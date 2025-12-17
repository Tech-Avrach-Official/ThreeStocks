import React from "react";

// Mock images - replace with your actual imports
import star from '../../../assets/star.png'
import menu from '../../../assets/menu.png'
import bulb from '../../../assets/bulb.png'
import rocket from '../../../assets/rocket.png'
import join from '../../../assets/join.png'
import multiplestar from '../../../assets/multiplestar.png'
import whatdo01 from '../../../assets/what-do-01.png'
import whatdo02 from '../../../assets/what-do-02.png'
import whatdo03 from '../../../assets/what-do-03.png'

const MobileTimeline = () => {
  // const timelineSteps = [
  //   {
  //     id: 1,
  //     icon: join,
  //     title: "Understanding your goals",
  //     description: "We start by gaining a deep understanding of your business goals. We take the time to learn about your unique vision, challenges, and objectives.",
  //     color: "#FFCF11"
  //   },
  //   {
  //     id: 2,
  //     icon: bulb,
  //     title: "Developing tailored solutions",
  //     description: "Next, our team of experts develops tailored solutions that align perfectly with your specific needs and requirements.",
  //     color: "#FFCF11"
  //   },
  //   {
  //     id: 3,
  //     icon: rocket,
  //     title: "Implementation & Results",
  //     description: "Finally, we implement and deliver exceptional results for your business, ensuring measurable success.",
  //     color: "#FFCF11"
  //   }
  // ];

  const timelineSteps = [
    {
      id: 1,
      icon: join,
      image: whatdo01,
    },
    {
      id: 2,
      icon: bulb,
      image: whatdo02,
    },
    {
      id: 3,
      icon: rocket,
      image: whatdo03,
    }
  ]

  return (
    <div className="bg-black min-h-screen w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-full">
        {/* Header */}
        <div className="flex flex-col items-center justify-center pt-8 pb-12">
          <div className="flex items-center gap-2 text-center w-fit text-white rounded-full px-4 py-2 bg-[#ffcc0070] border border-[#787878] hover:bg-[#ffcc0090] transition-all duration-300 hover:scale-105">
            <img src={multiplestar} className="w-4 h-4 animate-pulse" alt="" />
            <span className="text-base">ABC</span>
          </div>
          <div className="mt-5 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-6 relative z-10 text-white text-center">
              Innovative Problem-Solving for Your Business Needs
            </h1>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative px-4 pb-16">
          {timelineSteps.map((step, index) => (
            <div key={step.id} className="relative mb-12 last:mb-0">
              {/* Timeline Line */}
              {index < timelineSteps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-24 bg-gradient-to-b from-[#FFCF11] to-[#FFCF11]/30 animate-pulse"></div>
              )}
              
              {/* Step Container */}
              <div className="flex items-start gap-6">
                {/* Icon Circle */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-[#FFCF11] rounded-full flex items-center justify-center border-2 border-white hover:scale-110 hover:rotate-12 hover:shadow-[0_0_20px_rgba(255,207,17,0.5)] transition-all duration-300 cursor-pointer z-10 relative">
                    <img src={step.icon} className="w-8 h-8 hover:scale-110 transition-transform duration-300" alt="" />
                  </div>
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold">
                    {step.id}
                  </div>
                </div>

                {/* Content Card */}
                <div>
                  <img src={step.image} className="w-full object-cover rounded-xl mb-4" alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA or Additional Content */}
        <div className="text-center pb-8">
          <div className="inline-flex items-center gap-2 text-white rounded-full px-6 py-3 bg-[#FFCF11]/20 border border-[#FFCF11] hover:bg-[#FFCF11]/30 transition-all duration-300 hover:scale-105 cursor-pointer">
            <span className="text-base font-light">Ready to get started?</span>
            <div className="w-2 h-2 bg-[#FFCF11] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTimeline;