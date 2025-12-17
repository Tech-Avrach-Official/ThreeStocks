import React from 'react'
import Hero from './Components/Hero'
import GridSection from './Components/GridSection'
import About from './Components/About'
import WhyChoose from './Components/WhyChoose'
import TradeTipsSection from './Components/TradeTipsSection'
import Navbar from '@/component/Navbar'
import Footer from '@/component/Footer'
import CryptoBottom from './Components/CryptoBottom'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <GridSection/>
      {/* <About/> */}
      <WhyChoose/>
      <TradeTipsSection/>
      <CryptoBottom/>
      <Footer/>
    </div>
  )
}

export default Home