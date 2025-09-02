import React from 'react'

function About() {
  return (
    <div 
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <h1 className="text-3xl font-bold mb-5">About</h1>
      <p>
        Hello, I am <span className="font-semibold">Kartik Tomar</span>, a dedicated Web Developer specializing in the <span className="font-semibold">MERN Stack</span>. With a background in Computer Science and Engineering, I focus on delivering high-quality, efficient, and visually engaging software solutions. My experience includes working collaboratively to resolve user interface issues and enhance web application usability, ensuring optimal user experiences.
      </p>
      <br />
      <h1 className="font-bold text-xl">Skills & Expertise</h1>
      <p className="text-sm">
        Proficient in <span className="font-semibold">Java</span>, <span className="font-semibold">JavaScript</span>, <span className="font-semibold">React.js</span>, <span className="font-semibold">Node.js</span>, <span className="font-semibold">Express.js</span>, <span className="font-semibold">MongoDB</span>, <span className="font-semibold">HTML</span>, <span className="font-semibold">CSS</span>, <span className="font-semibold">Tailwind CSS</span>, REST APIs, JWT, and Git/GitHub.
      </p>
      <br />
      <h1 className="font-bold text-xl">Goal</h1>
      <p className="text-sm">
        My goal is to leverage technical expertise and creative problem-solving to deliver innovative web solutions that exceed client expectations. I am committed to continuous learning, adapting to emerging technologies, and contributing positively to the digital ecosystem through impactful development.
      </p>
      <div className="mt-10">
        <a href="/Kartik_Tomar.pdf" download="Kartik_Tomar.pdf" className="font-bold px-4 py-2 rounded border-[1px] hover:scale-105">
          Download Resume
        </a>
      </div>
      <hr className="mt-16" />
    </div>
  )
}

export default About
