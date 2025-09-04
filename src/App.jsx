import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

import FirstPage from "./Components/FirstPage.jsx";
import NotLive from "./Components/NotLive.jsx";
import Particles from "./Components/Particles.jsx";

function App() {
  const location = useLocation();

  return (
    <>
      {/* Particle background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Particles
          particleColors={["#7127BA", "#7127BA"]}
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Page transitions */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <FirstPage />
                </PageTransition>
              }
            />
            <Route
              path="/notLive"
              element={
                <PageTransition>
                  <NotLive />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>

      <Toaster />
    </>
  );
}

export default App;

/* ✅ Page transition wrapper */
function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}   // Enter from left
      animate={{ opacity: 1, x: 0 }}         // Center with fade
      exit={{ opacity: 0, x: "100%" }}       // Exit to right with fade
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{
        position: "absolute",   // 👈 fixes the top-gap issue
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </motion.div>
  );
}
