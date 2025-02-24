import React, { useState } from 'react'
import Me from '/Me.png'
import { AiOutlineMenu } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import {Link} from 'react-scroll'
function Navbar() {
    const[menu,setMenu]= useState(false);
    const navItems=[
      {
         id:1,
         text:"Home"     
       },
      {
         id:2,
         text:"About"     
       },
      {
         id:3,
         text:"Projects"     
       },
      {
         id:4,
         text:"Experience"     
       },
      {
         id:5,
         text:"Contact Me"     
       }
    ]
  return (
   
   <>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 bg-[#1A0B2E] text-white  fixed top-0 right-0'>
        <div className='flex justify-between items-center h-16'>
             <div className='flex space-x-2'>
                <img src={Me}  className='h-12 w-12' alt="My avatar" />
                <div>
                <h1 className='font-bold text-xl'>Kartik</h1>
                <p className='text-sm'>Web Developer</p>
                </div>
             </div>

             {/* Desktop Navbar */}
             <div className='' >
                <ul className='hidden  md:flex space-x-8 '>
                    {
                        navItems.map((item)=>{
                           return (
                              <li key={item.id} className='hover:scale-105 duration-200 cursor-pointer'>
                                  <Link to={item.text}
                                       smooth={true}
                                       duration={500}
                                       offset={-70}
                                       activeClass='active'
                                  > {item.text}</Link>
                              </li>
                           )
                        })
                    }
                </ul>
             </div>
                 
                  <div onClick={()=>setMenu(!menu)} className='md:hidden  '>
                     {menu?<MdCancel className='text-2xl' />:<AiOutlineMenu className='text-2xl' />}
                  </div>
                   
        </div> 
        {/* Mobile Navbar */}
        <div>
            {
               menu&&<ul className='md:hidden h-screen flex flex-col items-center justify-center space-y-3 font-bold   text-xl '>
               {
                        navItems.map((item)=>{
                           return (
                              <li  className='hover:scale-105 duration-200 cursor-pointer'  key={item.id} >
                                   <Link to={item.text}
                                       onClick={()=>setMenu(!menu)}
                                       smooth={true}
                                       duration={500}
                                       offset={-70}
                                       activeClass='active'
                                  > {item.text}</Link>
                              </li>
                           )
                        })
                    }
           </ul>
            }
        </div>
      </div>
   </>
  )
}

export default Navbar
