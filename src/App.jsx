import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Portfolio from './Components/Portfolio.jsx'
import Experience from './Components/Experience.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'
import  { Toaster } from 'react-hot-toast';
import FirstPage from './Components/FirstPage.jsx'
import { Route, Routes } from 'react-router-dom'
import NotLive from './Components/NotLive.jsx'
function App() {
  return (
    <>
    <div>
            <Routes>
                <Route path='/' element={<FirstPage/>}/>
                <Route path='/notLive' element={<NotLive/>}/>
              </Routes>        
    </div>
    <Toaster/>
    </>
  )
}

export default App