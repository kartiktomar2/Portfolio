import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { ReactTyped,Typed } from "react-typed";
import Me from '/Me.png';

function Home() {
  return (
    <div
     name="Home" 
    className='max-w-screen-2xl container mx-auto px-4 md:px-20  my-20 '>
        <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
         <p className=' md:text-xl '>Hello!&nbsp;  I  am&nbsp;&nbsp; <span className='text-[#7127BA] font-bold'>Kartik Tomar</span></p>
        <div className='flex space-x-1 text-2xl md:text-4xl'>
        <h1>I'm a </h1>
        {/* <span className='text-[#7127BA] font-bold'>Developer</span> */}
        <ReactTyped
          className='text-[#7127BA] font-bold -z-50'
          strings={["Web Developer","Programmer","Problem Solver"]}
          typeSpeed={40}
          backSpeed={40}
          loop={true}
        />
        </div>
        <br />
         <p className='text-sm  text-justify'>
         A self-taught Web Developer, I make meaningful and delightful digital solutions that create an equilibrium between user needs and business goals,currently leveraging my skills in MERN stack by making projects and also searching for an opportunity where I can gain hands-on experience for this tech stack
         </p>
         <br />
         <div className='flex flex-col md:flex-row space-y-6 md:space-y-0  md:justify-between items-center'>
            {/* social media icons */}
         <div className='space-y-2'>
            <h1 className='font-bold'>Available on</h1>
            <ul className='flex space-x-5'>
                <li className='text-3xl cursor-pointer'>
                    <a href="https://www.linkedin.com/in/kartik-tomar-3211342a1/" target='_blank'><FaLinkedin /></a>
                    
                    </li>
                <li className='text-3xl cursor-pointer'><FaTelegram /></li>
            </ul>
         </div>
            
            {/* currently working on  */}

            <div className='space-y-2'>
            <h1 className='font-bold'>Currently working on:</h1>
            <div className='flex space-x-5 '>
            <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[1px] p-[3px]' />
            <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[1px] p-[4px]' />
            <RiReactjsFill className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[1px] p-1' />
            <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[1px] p-[4px]' />
            <FaJava  className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[1px] p-[4px]' />
            </div>
         </div>
         </div>

        </div>
        <div className='md:w-1/2 md:ml-48 md:mt-20 m-auto order-1 md:order-2'>
            
          <img src={Me} alt="My avatar"  className='  md:w-[500px] md:h-[450px]
         w-[350px] h-[300px]   '/>
          
        </div>
        </div>
        <br />
        <br />
        <hr />
    </div>
  )
}

export default Home
