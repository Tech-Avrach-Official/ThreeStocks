import Footer from '@/component/Footer'
import Navbar from '@/component/Navbar'
import React from 'react'
import CryptoHeader from './Components/CryptoHeader'
import ConnectedDiagram from './Components/ConnectedDiagram'
import MobileTimeline from './Components/MobileTimeline'
import Community from './Components/Community'
import LearningModule from './Components/LearningModule'
import Slider from './Components/Slider'
import LearningModuleMobile from './Components/LearningModuleMobile'
import Testimonials from './Components/Testimonials'


const Crypto = () => {
  return (
    <div>
        <Navbar/>
        <CryptoHeader/>
        <div className='hidden lg:block'>
          <ConnectedDiagram/>
        </div>
        <div className='lg:hidden'>
          <MobileTimeline/>
        </div>
        <div className='hidden lg:block'>
          <LearningModule/>
        </div>
        <div className='lg:hidden'>
          <LearningModuleMobile/>
        </div>
        <Slider/>
        <Community/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Crypto