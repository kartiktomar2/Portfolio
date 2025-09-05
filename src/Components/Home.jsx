import React from 'react'
import { SiMongodb, SiExpress } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import Me from '/Me.png';
import { CgMail } from "react-icons/cg";
import { LiaLinkedin } from "react-icons/lia";

function Home() {
  return (
    <div
      name="Home"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10 md:my-20"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Left Section */}
        <div className="md:w-1/2 mt-10 md:mt-20 space-y-4 order-2 md:order-1 text-center md:text-left">
          <p className="text-lg md:text-xl">
            Hello! I am <span className="text-[#7127BA] font-bold">Kartik Tomar</span>
          </p>

          <div className="flex justify-center md:justify-start items-center space-x-2 text-2xl md:text-4xl">
            <h1>I&apos;m a</h1>
            <ReactTyped
              className="text-[#7127BA] font-bold"
              strings={["Web Developer", "Programmer", "Problem Solver"]}
              typeSpeed={40}
              backSpeed={40}
              loop={true}
            />
          </div>

          <p className="text-sm md:text-base text-justify leading-relaxed">
            A self-taught Web Developer, I make meaningful and delightful digital
            solutions that create an equilibrium between user needs and business
            goals. Currently leveraging my skills in the MERN stack by making
            projects and also searching for an opportunity where I can gain
            hands-on experience in this tech stack.
          </p>

          {/* Social + Currently Working */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mt-6">
            
            {/* Social Icons */}
            <div>
              <h1 className="font-bold mb-2">Available on</h1>
              <ul className="flex justify-center md:justify-start space-x-5">
                <li className="cursor-pointer">
                  <a
                    href="https://www.linkedin.com/in/kartik-tomar-3211342a1/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-10 h-10 border rounded-full hover:scale-110 transition-transform"
                  >
                    <LiaLinkedin className="text-2xl" />
                  </a>
                </li>
                <li className="cursor-pointer">
                  <a
                    href="mailto:kartik@example.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-10 h-10 border rounded-full hover:scale-110 transition-transform"
                  >
                    <CgMail className="text-2xl" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h1 className="font-bold mb-2">Currently working on:</h1>
              <div className="flex justify-center md:justify-start space-x-4">
                <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border p-[3px]" />
                <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border p-[4px]" />
                <RiReactjsFill className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border p-[4px]" />
                <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border p-[4px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="md:w-1/2 flex justify-center order-1 md:order-2">
          <img
            src={Me}
            alt="My avatar"
            className="w-[250px] h-[220px] sm:w-[320px] sm:h-[280px] md:w-[450px] md:h-[400px] lg:w-[500px] lg:h-[450px] object-contain"
          />
        </div>
      </div>

      <hr className="mt-12" />
    </div>
  )
}

export default Home
