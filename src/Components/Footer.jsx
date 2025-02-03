import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <>
     <hr />
     <footer className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20  '>
               <div className='flex flex-col items-center justify-center'>
                      <ul className='flex space-x-4'>
                         <li className='text-3xl cursor-pointer'>
                                             <a href="https://www.linkedin.com/in/kartik-tomar-3211342a1/" target='_blank'> <FaLinkedin /></a>
                                             
                                             </li>
                         <li className='text-3xl cursor-pointer'>
                                             <a href="https://leetcode.com/u/_Kartik_1/" target='_blank'> <SiLeetcode  /></a>
                                             
                                             </li>
                         <li className='text-3xl cursor-pointer'>
                                             <a href="https://github.com/kartiktomar2" target='_blank'> <FaGithub  /></a>
                                             
                                             </li>
                       
                        
                        

                      </ul>
                       <div className='mt-8 border-t boder-white pt-8 flex flex-col items-center'>
                           <p>
                             Thank you for visiting my Portfolio
                           </p>
                       </div>
               </div>
        </div>
     </footer>
    </>
  )
}

export default Footer
