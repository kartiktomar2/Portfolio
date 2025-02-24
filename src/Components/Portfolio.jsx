import React from 'react'

import book from '/books.jpg'
import chatapp from '/ChatAppLogo.webp'
import { Link } from 'react-router-dom'
import NotLive from './NotLive'
function Portfolio() {
    const cardItem=[
        {
            id:1,
            logo:book,
            name:"Book Store",
            source:"https://github.com/kartiktomar2/Book_Store",
            info:"Made Book store using MERN Stack",
            live:""
        },
        {
            id:2,
            logo:chatapp,
            name:"Let's Chat",
            source:"https://github.com/kartiktomar2/LetsChat1",
            info:" Chat application using MERN Stack",
            live:"https://letschat2.onrender.com/"
        },
    ]
  return (
    <div
       name="Projects"
    className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
          <div>
            <h1 className='text-3xl  font-bold mb-5'>Projects</h1>
            <span className='underline font-semibold'>Featured Project</span>

            <div className='grid  grid-cols-1 md:grid-cols-4 gap-4 my-5'>
               {
                cardItem.map(({id,logo,name,source,info,live})=>{
                  return    <div key={id} className='md:w-[300px]  md:h-[350px] border-[2px] rounded-lg p-1 cursor-pointer hover:scale-105 duration-200'>
                               <div className='flex items-center justify-center my-2'>
                               <img  src={logo} alt="project_logo" className='w-[120px] h-[120px] p-1 rounded-full border-[2px]  '/>
                               </div>
                              <div>
                                  <div className='font-bold text-xl mb-2 px-2 text-center'>{name}</div>
                                  <p className='px-2 text-gray-300'>{info}</p>
                              </div>
                              <div className='mx-2 my-3  flex flex-col justify-center text-center '>
                                 <a href={source} target='_blank'  className='font-bold px-4 py-2 rounded border-[1px] hover:scale-105 my-2'>Source Code</a >
                                 {
                                   live.trim()===""? <Link to='/notLive'  className='font-bold px-4 py-2 rounded border-[1px] hover:scale-105'>Live Link</Link>:
                                  <a href={live.trim()===""?<NotLive/>:live} target={live.trim()===""?"":'_blank'}  className='font-bold px-4 py-2 rounded border-[1px] hover:scale-105'>Live Link</a>}
                              </div>
                     </div>
                })
               }
            </div>
          </div>
          <hr  className='mt-20'/>
    </div>
  )
}

export default Portfolio
