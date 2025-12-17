import Footer from '@/component/Footer'
import Navbar from '@/component/Navbar'
import React from 'react'
import CardGrid from './Components/CardGrid'
import AboutHeader from './Components/AboutHeader'
// import AboutHeader from './Components/AboutHeader'
// import ConnectedDiagram from '../Crypto/Components/ConnectedDiagram'
// import Community from '../Crypto/Components/Community'
// import MobileTimeline from '../Crypto/Components/MobileTimeline'

const About = () => {
  return (
    <div>
        <Navbar/>
        <AboutHeader/>
        <CardGrid/>
        <Footer/>
    </div>
  )
}

export default About