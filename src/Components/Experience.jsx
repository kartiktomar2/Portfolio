import React from 'react'
function Experience() {
  return (
    <div 
      name="Experience"
      className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>Experience</h1>
        <p className=''>
          <span className='font-semibold'>Frontend Web Developer Intern at <a href="https://salesqueen.org/" target='_blank' className='underline'>Salesqueen Software Solutions</a></span> (March 2025 - June 2025)
        </p>
        <ul className='list-disc ml-5 mt-2'>
          <li>
            Collaborated with the UI/UX team to identify and resolve user interface issues in live web applications.
          </li>
          <li>
            Diagnosed and fixed layout bugs documented in internal reports, ensuring consistent and responsive designs.
          </li>
          <li>
            Improved usability and visual appeal of client websites aligned with user experience best practices.
          </li>
        </ul>
      </div>
      <hr className='mt-10' />
    </div>
  )
}

export default Experience
