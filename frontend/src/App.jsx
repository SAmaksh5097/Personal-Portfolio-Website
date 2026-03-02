import React from 'react'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
const App = () => {
  return (
    <div className='bg-brand-blue min-h-screen'>
      <CustomCursor />
      <Navbar/>
      
      <h1>hero</h1>
      
    </div>
  )
}

export default App
