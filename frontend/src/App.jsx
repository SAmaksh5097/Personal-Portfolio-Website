import React from 'react'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='min-h-screen'>
      <CustomCursor />
      <Navbar/>
      <Footer/>
      
      
    </div>
  )
}

export default App
