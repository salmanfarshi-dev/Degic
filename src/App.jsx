import React from 'react'
import Navbar from './layout/Navbar'
import Hero from './layout/Hero'
import Presentation from './layout/Presentation'
import Slider from './layout/Slider'
import Vedio from './Component.jsx/Vedio'
import Time from './layout/Time'
import Bompart from './layout/Bompart'
import Blog from './layout/Blog'
import Footer from './layout/Footer'


function App() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Presentation/>
   <Slider/>
   <Vedio/>
   <Time/>
  <Bompart/>
  <Blog/>
  <Footer/>
   </>
  )
}

export default App