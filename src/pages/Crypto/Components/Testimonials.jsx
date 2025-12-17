import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    content: "This product has transformed the way we work. The team's dedication to excellence is evident in every feature.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    content: "Outstanding experience from start to finish. The attention to detail and user experience is unmatched.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    content: "I've tried many similar solutions, but this one stands out. The results speak for themselves.",
    rating: 5
  },
  {
    id: 4,
    name: "David Kim",
    role: "CTO at InnovateCo",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    content: "Incredible platform that has streamlined our entire workflow. Worth every penny and more.",
    rating: 5
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
    content: "Game changer for our business. The support team is amazing and the product is top-notch.",
    rating: 5
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    content: "Best investment we've made this year. Highly recommend to anyone looking for quality.",
    rating: 5
  }
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-[#341f05b3] border border-orange-500 rounded-2xl p-4 sm:p-6 shadow-lg min-w-[280px] sm:min-w-[350px] max-w-[280px] sm:max-w-[350px] mx-2 sm:mx-4">
    <div className="flex gap-1 mb-3 sm:mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
    <p className="text-white mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
      "{testimonial.content}"
    </p>
    <div className="flex items-center gap-3">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
      />
      <div>
        <h3 className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</h3>
        <p className="text-xs sm:text-sm text-indigo-300">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

export const Testimonials = () => {
  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3, 6);

  return (
    <div className="md:min-h-screen bg-black flex flex-col items-center justify-center">
      <div className='max-w-7xl w-full h-full py-5 px-4 sm:px-6 lg:px-8'>
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
            What Our Clients Say
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            Trusted by hundreds of satisfied customers worldwide
          </p>
        </div>

        <div className="relative w-full">
          {/* Fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 md:w-40 bg-gradient-to-r from-[#000000] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* First Row - Moving Right */}
          <div className="mb-4 sm:mb-8 overflow-hidden">
            <div className="flex animate-scroll-right">
              {[...firstRow, ...firstRow, ...firstRow].map((testimonial, index) => (
                <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Second Row - Moving Left */}
          <div className="mb-4 overflow-hidden">
            <div className="flex animate-scroll-left">
              {[...secondRow, ...secondRow, ...secondRow].map((testimonial, index) => (
                <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll-right {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }

          @keyframes scroll-left {
            0% {
              transform: translateX(-33.333%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .animate-scroll-right {
            animation: scroll-right 20s linear infinite;
          }

          .animate-scroll-left {
            animation: scroll-left 20s linear infinite;
          }

          .animate-scroll-right:hover,
          .animate-scroll-left:hover {
            animation-play-state: paused;
          }

          @media (min-width: 640px) {
            .animate-scroll-right {
              animation: scroll-right 30s linear infinite;
            }

            .animate-scroll-left {
              animation: scroll-left 30s linear infinite;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

export default Testimonials;