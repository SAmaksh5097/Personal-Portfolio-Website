import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
const App = () => {
  return (
    <>
      <CustomCursor />
      <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<Homepage />} />
          {/* <Route path='/projects' element={<Projects/>}/> */}
          {/* <Route path='/contact-me' element={<ContactMe/>}/> */}

        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
