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
import Particles from './Components/Particles.jsx'
function App() {
  return (
  <>
      {/* Particle background */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <Particles
          particleColors={['#7127BA', '#7127BA']}
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
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