import React from 'react'

function About() {
  return (
    <div 
     name="About"
    className='max-w-screen-2xl container mx-auto px-4 md:px-20  my-16 '>
        <h1 className='text-3xl  font-bold mb-5'>About</h1>
        <p>
            Hello, I am Kartik Tomar a passionate Web Developer with a keen eye for MERN 
            Stack,with a background in IT. I strive to create impactful and visually stunning
            Software solutions that leave a lasting impression  
        </p>
        <br />
        <h1 className='font-bold text-xl'>Skills & Expertise</h1>
        <p className='text-sm'>Proficent in HTML, CSS, Tailwind CSS, JavaScript, React, Node Js,Express Js, Mongo DB, Material UI, Git, GitHub,Java </p>
        <br />
        
        <h1 className='font-bold text-xl'>Mission Statement</h1>
        <p className='text-sm'>My mission is to leverage my skills and creativity to deliever innovative solutions that exceed client expectation and contribute positively to the digital landscape. I am committed to continous learning and growth, always seeking new challenges and opportunities to expand my horizons. </p>

        <div className='mt-10'>
          <a href="/Kartik_Tomar.pdf"  download="Kartik_Tomar.pdf" className='font-bold px-4 py-2 rounded border-[1px] hover:scale-105'>Download Resume</a>
        </div>
         <hr className='mt-16' />
    </div>
        


  )
}

export default About
