import React from 'react'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Portfolio from './Portfolio.jsx'
import Experience from './Experience.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'


const FirstPage = () => {
  return (
    <div>
          <Navbar/>
            <Home/>
            <About/>
            <Portfolio/>
            <Experience/>
            <Contact/>
            <Footer/>
    </div>
  )
}

export default FirstPage
