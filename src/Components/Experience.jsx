import React from 'react'
import { Link } from 'react-scroll'
function Experience() {
  return (
    <div 
      name="Experience"
    className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
        <div>
        <h1 className='text-3xl  font-bold mb-5'>Experience</h1>
        <p className='  '>Currently I have no professional experience , but I have made certain 
          <Link to={"Projects"} className='underline cursor-pointer' 
                                      smooth={true}
                                       duration={500}
                                       offset={-70}>projects</Link
        > you can check them out,and I am currenty practising DSA using Java on <a href="https://leetcode.com/u/_Kartik_1/" target='_blank' className='underline'>Leetcode</a> and also making Full Stack projects using MERN Stack. </p>
        </div>

        <hr className='mt-10' />
    </div>
  )
}

export default Experience
