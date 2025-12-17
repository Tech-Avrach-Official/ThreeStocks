import Footer from '@/component/Footer'
import Navbar from '@/component/Navbar'
import React from 'react'
import CoursesHeader from './Components/CoursesHeader'
import ChooseUs from './Components/ChooseUs'
import CardGrid from '../About/Components/CardGrid'
import WhoSection from './Components/WhoSection'

const Courses = () => {
  return (
    <div>
        <Navbar/>
        <CoursesHeader/>
        <ChooseUs/>
        <WhoSection/>
        {/* <CardGrid/> */}
        <Footer/>
    </div>
  )
}

export default Courses