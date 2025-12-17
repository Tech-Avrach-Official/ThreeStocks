import About from '@/pages/About/About'
import Contact from '@/pages/Contact/Contact'
import Courses from '@/pages/Courses/Courses'
import Crypto from '@/pages/Crypto/Crypto'
import Home from '@/pages/Home/Home'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AllRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/courses" element={<Courses />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  )
}

export default AllRoutes