import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Instagram,
  Linkedin,
  Facebook,
  ArrowRight,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react";
import logo from "../assets/logo.png";
import footerLeft from "../assets/footer-glow-left.svg";
import footerRight from "../assets/footer-glow-right.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background gradient effects */}
      <div
        className="absolute w-[300px] h-[244px] opacity-40"
        style={{
          top: "20%",
          left: "10%",
          background: "linear-gradient(142.36deg, #FF6A00 0%, #FE9502 100%)",
          filter: "blur(120px)",
          transform: "rotate(142.36deg)",
          zIndex: 1,
        }}
      />

      <div
        className="absolute w-[200px] h-[164px] opacity-30"
        style={{
          bottom: "30%",
          right: "15%",
          background: "linear-gradient(142.36deg, #FE9502 0%, #FFCF11 100%)",
          filter: "blur(100px)",
          transform: "rotate(-45deg)",
          zIndex: 1,
        }}
      />

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-orange-500/20 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <div className="bg-[#623C0740] w-fit mx-auto px-4 py-3 mb-8 rounded-full">
                <span className="border-2 border-orange-500/70 text-white text-lg px-7 py-1 rounded-full">
                  Stay Updated
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-normal mb-6">
                Get the Latest Trading
                <br />
                Insights & Updates
              </h2>

              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss important market
                movements, trading tips, and platform updates.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 bg-transparent border-2 border-orange-500/50 rounded-full text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-all"
                  />
                </div>
                <button className="relative border border-[#FFCF11] bg-gradient-to-r from-[#FE9502] to-[#FF6A00] text-white font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform">
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-3 bg-orange-500 blur-lg rounded-full"></span>
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
       <div className="relative bg-transparent text-white py-12 md:py-24 px-4 md:px-8">
  <img src={footerLeft} className="absolute bottom-0 left-0 hidden md:block" alt="" />
  <img src={footerRight} className="absolute bottom-0 right-0 hidden md:block" alt="" />
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0">
      {/* Column 1 - Logo and Catalog */}
      <div className="md:col-span-5 relative z-10">
        <div className="space-y-3">
          <p className="text-gray-300 text-xl font-semibold mb-4">
            CATALOG
          </p>

          <div className="flex flex-wrap gap-3 text-base font-semibold text-gray-300">
            <Link
              to="/"
              className="hover:text-white cursor-pointer transition-colors"
            >
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <Link
              to="/crypto"
              className="hover:text-white cursor-pointer transition-colors"
            >
              Crypto
            </Link>
            <span className="text-gray-500">/</span>
            <Link
              to="/courses"
              className="hover:text-white cursor-pointer transition-colors"
            >
              Courses
            </Link>
            <span className="text-gray-500">/</span>
          </div>

          <div className="flex flex-wrap gap-3 text-base font-semibold text-gray-300">
            <Link
              to="/about"
              className="hover:text-white cursor-pointer transition-colors"
            >
              About
            </Link>
            <span className="text-gray-500">/</span>
            <Link
              to="/contact"
              className="hover:text-white cursor-pointer transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
        <img src={logo} alt="Logo" className="w-40 md:w-52 mt-8 md:mt-14" />
      </div>

      {/* Column 2 - Contact and Location */}
      <div className="md:col-span-3">
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <div className="space-y-1 text-gray-300 text-base">
            <p>+1 (999) 888-77-66</p>
            <p>hello@threestock.com</p>
          </div>
        </div>

        <div className="mt-6 md:mt-8">
          <h3 className="text-xl font-semibold mb-2">Location</h3>
          <div className="space-y-1 text-gray-300 text-base">
            <p>483920, Indonesia,</p>
            <p>Lampung 22/2/5, Office 4</p>
          </div>
        </div>
      </div>

      {/* Column 3 - Subscribe and Social */}
      <div className="md:col-span-4 md:mt-12 flex flex-col gap-6">
        {/* Email Subscribe */}
        <div className="flex items-center bg-transparent border border-white rounded-2xl overflow-hidden max-w-md w-full p-[1px]">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-transparent px-4 md:px-6 py-3 text-sm text-gray-300 placeholder:text-gray-200 outline-none"
          />
          <button
            onClick={handleSubscribe}
            className="bg-white text-black px-4 md:px-6 py-3 text-sm rounded-2xl font-semibold hover:bg-gray-200 transition whitespace-nowrap"
          >
            Subscribe
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-400 transition"
          >
            <Instagram className="w-5 h-5 text-black" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-400 transition"
          >
            <Linkedin className="w-5 h-5 text-black" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-400 transition"
          >
            <Facebook className="w-5 h-5 text-black" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </footer>
  );
};

export default Footer;
