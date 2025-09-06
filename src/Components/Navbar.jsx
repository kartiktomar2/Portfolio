import React, { useState } from 'react'
import Me from '/Me.png'
import { AiOutlineMenu } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [showMenuContent, setShowMenuContent] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact Me" }
  ];

  // Open menu: show blur and menu content
  const openMenu = () => {
    setMenu(true);
    setShowMenuContent(true);
  };

  // Close menu: hide menu content, then blur after delay
  const closeMenu = () => {
    setShowMenuContent(false);
    setTimeout(() => setMenu(false), 500); // match blur transition duration
  };

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 bg-[#1A0B2E] text-white fixed top-0 right-0 z-1'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex space-x-2'>
            <img src={Me} className='h-12 w-12' alt="My avatar" />
            <div>
              <h1 className='font-bold text-xl'>Kartik</h1>
              <p className='text-sm'>Web Developer</p>
            </div>
          </div>

          {/* Desktop Navbar */}
          <div>
            <ul className='hidden lg:flex space-x-8'>
              {navItems.map((item) => (
                <li key={item.id} className='hover:scale-105 duration-200 cursor-pointer'>
                  <Link
                    to={item.text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass='active'
                  >{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Icon (top right) */}
          <div
            onClick={menu ? closeMenu : openMenu}
            className='lg:hidden cursor-pointer'
            style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 40 }}
          >
            <AnimatePresence mode="wait">
              {menu ? (
                <motion.span
                  key="cancel"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6 }}
                >
                  <MdCancel className='text-2xl' />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6 }}
                >
                  <AiOutlineMenu className='text-2xl' />
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Navbar */}
        <AnimatePresence>
          {menu && (
            <>
              {/* Blur Overlay */}
              <motion.div
                key="blur"
                initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
                exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                transition={{ duration: 0.5 }}
                className="fixed inset-0 z-20 bg-black/30"
                style={{ pointerEvents: 'none' }}
              />

              {/* Animated Menu */}
              <AnimatePresence>
                {showMenuContent && (
                  <motion.ul
                    key="menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="lg:hidden h-screen flex flex-col items-center justify-center space-y-3 font-bold text-xl fixed inset-0 z-30"
                  >
                    {navItems.map((item, idx) => (
                      <motion.li
                        key={item.id}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="hover:scale-105 duration-200 cursor-pointer"
                      >
                        <Link
                          to={item.text}
                          onClick={closeMenu}
                          smooth={true}
                          duration={500}
                          offset={-70}
                          activeClass="active"
                        >
                          {item.text}
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Navbar
