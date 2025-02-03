import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Portfolio from './Components/Portfolio.jsx'
import Experience from './Components/Experience.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'
import  { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
    <div>
           <Navbar/>
            <Home/>
            <About/>
            <Portfolio/>
            <Experience/>
            <Contact/>
            <Footer/>
    </div>
    <Toaster/>
    </>
  )
}

export default App