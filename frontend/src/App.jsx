import React from 'react'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import HorizontalScroll from './components/HorizontalScroll'

const App = () => {
  return (
    <>
      <CustomCursor />
      <Navbar/>
      <HorizontalScroll>
        <HeroSection />
        <AboutSection />
      </HorizontalScroll>
      <Footer/>
    </>
  )
}

export default App
