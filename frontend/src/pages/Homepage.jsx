import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import HorizontalScroll from '../components/HorizontalScroll'
const Homepage = () => {
  return (
    <div>
        <HorizontalScroll>
            <HeroSection />
            <AboutSection />
          </HorizontalScroll>
      
    </div>
  )
}

export default Homepage
