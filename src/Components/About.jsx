import React from 'react'
import { motion } from 'framer-motion'
import { FaGitAlt, FaGithub, FaHtml5 } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss } from "react-icons/si";
import { RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";
function About() {
    const skills=[
           {
                src:<FaHtml5  />,
                title:"HTML5"
           },
           {
                src:<IoLogoCss3 />,
                title:"CSS3"
           },
           {
                src:<SiTailwindcss />,
                title:"TailwindCSS"
           },
           {
                src:<SiJavascript />,
                title:"JavaScript"
           },
           {
                src:<RiReactjsFill />,
                title:"React.js"
           },
           {
                src:<RiNodejsFill />,
                title:"Node.js"
           },
           {
                src:<SiExpress />,
                title:"Express.js"
           },
           {
                src:<SiMongodb />,
                title:"MongoDB"
           },
           {
                src:<FaGitAlt />,
                title:"Git"
           },
           {
                src:<FaGithub />,
                title:"Github"
           },
    ]
  return (
    <div 
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 text-justify"
    >
      <h1 className="text-3xl font-bold mb-5">About</h1>

      {/* Animated content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <p>
          Hello, I am <span className="font-semibold">Kartik Tomar</span>, a dedicated Web Developer specializing in the <span className="font-semibold">MERN Stack</span>. With a background in Computer Science and Engineering, I focus on delivering high-quality, efficient, and visually engaging software solutions. My experience includes working collaboratively to resolve user interface issues and enhance web application usability, ensuring optimal user experiences.
        </p>
        <br />
        <h1 className="font-bold text-xl">Skills & Expertise</h1>
        <p className="text-sm">
          Proficient in<span className="font-semibold"> JavaScript</span>, <span className="font-semibold">React.js</span>, <span className="font-semibold">Node.js</span>, <span className="font-semibold">Express.js</span>, <span className="font-semibold">MongoDB</span>, <span className="font-semibold">HTML</span>, <span className="font-semibold">CSS</span>, <span className="font-semibold">Tailwind CSS</span>, REST APIs, JWT, and Git/GitHub.
        </p>
        <br />
        <h1 className="font-bold text-xl">Goal</h1>
        <p className="text-sm">
          My goal is to leverage technical expertise and creative problem-solving to deliver innovative web solutions that exceed client expectations. I am committed to continuous learning, adapting to emerging technologies, and contributing positively to the digital ecosystem through impactful development.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
  {/* Download Resume */}
  <a 
    href="/Kartik Tomar.pdf" 
    download="Kartik_Tomar.pdf" 
    className="font-bold w-full sm:w-auto text-center px-4 py-2 rounded border-[1px] hover:scale-105 transition-transform"
  >
    Download Resume
  </a>

  {/* GitHub Profile */}
  <a 
    href="https://github.com/kartiktomar2" 
    target="_blank" 
    className="font-bold w-full sm:w-auto text-center px-4 py-2 rounded border-[1px] hover:scale-105 transition-transform flex items-center justify-center"
  >
    View Profile on GitHub <FaGithub className="ml-2" />
  </a>
</div>

        <br/>
      
      </motion.div>
  {/* Technology and Skills */}
       <div>
  <h1 className="text-2xl font-bold">Technologies and Skills</h1>
  <div
    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 my-5"
  >
    {skills.map(({ src, title }, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center w-full h-36 sm:h-40 md:h-44 lg:h-48 border-2 rounded-lg p-4  hover:shadow-[0px_8px_20px_rgba(113,39,186,0.5)] duration-300 border-gradient-to-tr
          from-[#1A0B2E] via-[#7127BA] to-[#070010]
          shadow-[0_4px_32px_rgba(113,39,186,0.25)]"
      >
        {/* Project Logo */}
        <div className="flex items-center justify-center w-14 h-14 border rounded-full transition-transform">
          {src}
        </div>
        {/* Project Info */}
        <div className="mt-3 font-bold text-lg text-center">{title}</div>
      </div>
    ))}
  </div>
</div>

      <hr className="mt-16" />
    </div>
  )
}

export default About
