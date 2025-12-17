import Footer from '@/component/Footer'
import Navbar from '@/component/Navbar'
import React, { useState } from 'react'
import { MapPin, Phone, Clock } from 'lucide-react';
import location from '../../assets/contact/location.png'
import phone from '../../assets/contact/phone.png'
import time from '../../assets/contact/time.png'
import sideglow from '../../assets/SideGlow.png'

const Contact = () => {

    const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
    <Navbar/>
     <div className="relative border-b pt-40 pb-20 px-4 md:px-8 lg:pl-[9rem] bg-black flex items-center justify-center">
      <div>
        <img src={sideglow} className='w-[20rem] absolute left-0 rotate-180 top-1/2 -translate-y-1/2 hidden lg:block' alt="" />
      </div>
      <div>
        <img src={sideglow} className='w-[25rem] absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block' alt="" />
      </div>
      <div className="max-w-6xl border-2 border-orange-600 rounded-2xl w-full relative">
        {/* Main Container */}
        <div className="flex flex-col lg:flex-row rounded-2xl shadow-2xl overflow-hidden">
          {/* Left Side - Image (30%) */}
          <div className="w-full lg:w-[30%] relative h-64 lg:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" 
              alt="Office"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Contact Form (70%) */}
          <div className="w-full lg:w-[70%] p-6 md:p-8 lg:p-12 bg-[#00000000] lg:rounded-r-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 lg:mb-8">Contact Form</h2>
            
            <div className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Full Name
                </label>
                <input 
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-transparent text-gray-200 border border-orange-500 focus:ring-2 focus:ring-orange-500 placeholder:text-gray-200 focus:border-transparent outline-none transition"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-transparent text-gray-200 border border-orange-500 focus:ring-2 focus:ring-orange-500 placeholder:text-gray-200 focus:border-transparent outline-none transition"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Comment or message
                </label>
                <textarea 
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-transparent text-gray-200 border border-orange-500 focus:ring-2 focus:ring-orange-500 placeholder:text-gray-200 focus:border-transparent outline-none transition resize-none"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button 
                onClick={handleSubmit}
                className="w-full bg-orange-600 text-white py-3 rounded-full font-semibold hover:bg-orange-800 transition duration-300"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Absolute Positioned Card - Half on Image, Half Outside */}
        {/* Desktop View */}
        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#000000f9] border-l-2 border-orange-600 rounded-3xl shadow-xl px-6 py-12 w-72">
          <div className="space-y-6">
            {/* Location */}
            <div className="flex items-start space-x-5">
             <div>
                <img src={location} className='w-10' alt="" />
             </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-200">Location</h3>
                <p className="text-sm text-white mt-1">
                  123 Business Street
                  <br />
                  City, State 12345
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-5">
              <div>
                <img src={phone} className='w-10' alt="" />
             </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-200">Phone</h3>
                <p className="text-sm text-white mt-1">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-5">
              <div>
                <img src={phone} className='w-10' alt="" />
             </div>
              <div>
                <h3 className="font-bold text-xl text-gray-200">Phone</h3>
                <p className="text-sm text-white mt-1">+1 (555) 123-4567</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start space-x-5">
              <div>
                <img src={time} className='w-10' alt="" />
             </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-200">Hours</h3>
                <p className="text-sm text-white mt-1">
                  Mon - Fri: 9AM - 5PM
                  <br />
                  Sat - Sun: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet View - Info Cards Below Form */}
        <div className="lg:hidden bg-[#000000f9] border-t-2 border-orange-600 rounded-b-2xl px-6 py-8">
          <div className="space-y-6">
            {/* Location */}
            <div className="flex items-start space-x-5">
             <div>
                <img src={location} className='w-10' alt="" />
             </div>
              <div>
                <h3 className="font-semibold text-lg md:text-xl text-gray-200">Location</h3>
                <p className="text-sm text-white mt-1">
                  123 Business Street
                  <br />
                  City, State 12345
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-5">
              <div>
                <img src={phone} className='w-10' alt="" />
             </div>
              <div>
                <h3 className="font-semibold text-lg md:text-xl text-gray-200">Phone</h3>
                <p className="text-sm text-white mt-1">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-5">
              <div>
                <img src={phone} className='w-10' alt="" />
             </div>
              <div>
                <h3 className="font-bold text-lg md:text-xl text-gray-200">Phone</h3>
                <p className="text-sm text-white mt-1">+1 (555) 123-4567</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start space-x-5">
              <div>
                <img src={time} className='w-10' alt="" />
             </div>
              <div>
                <h3 className="font-semibold text-lg md:text-xl text-gray-200">Hours</h3>
                <p className="text-sm text-white mt-1">
                  Mon - Fri: 9AM - 5PM
                  <br />
                  Sat - Sun: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Logo - Top Right */}
       
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact