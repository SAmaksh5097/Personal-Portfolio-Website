import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import HorizontalScroll from '../components/HorizontalScroll'
import JourneySection from '../components/JourneySection'
const Homepage = () => {
  return (
    <div>
        <HorizontalScroll>
            <HeroSection />
            <AboutSection />
            <JourneySection />
          </HorizontalScroll>
      
    </div>
  )
}

export default Homepage
