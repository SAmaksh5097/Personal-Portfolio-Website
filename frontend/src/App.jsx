import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import Footer from './components/Footer'
import { Routes, Route, useLocation } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import {Analytics} from '@vercel/analytics/react'
import { useState } from 'react'
const App = () => {
  const { pathname } = useLocation()
  const footerClassName = pathname === '/' ? 'md:hidden' : ''
  const [isDark, setIsDark] = useState(() => {
    const dark = localStorage.getItem('portfolio-theme') === 'dark'
    document.documentElement.classList.toggle('dark', dark)
    return dark
  })

  const toggleTheme = () => {
    const nextIsDark = !isDark
    document.documentElement.classList.toggle('dark', nextIsDark)
    localStorage.setItem('portfolio-theme', nextIsDark ? 'dark' : 'light')
    setIsDark(nextIsDark)
  }

  return (
    <>
      <CustomCursor />
      <Navbar isDark={isDark} onToggleDark={toggleTheme}/>
      <div className='min-h-screen'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>

      </div> 
      <Analytics />
      <Footer className={footerClassName}/>
    </>
  )
}

export default App
