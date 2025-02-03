import React from 'react'

import book from '/books.jpg'

function Portfolio() {
    const cardItem=[
        {
            id:1,
            logo:book,
            name:"Book Store",
            source:"https://github.com/kartiktomar2/Book_Store"
        }
    ]
  return (
    <div
       name="Portfolio"
    className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
          <div>
            <h1 className='text-3xl  font-bold mb-5'>PortFolio</h1>
            <span className='underline font-semibold'>Featured Project</span>

            <div className='grid  grid-cols-1 md:grid-cols-4 gap-4 my-5'>
               {
                cardItem.map(({id,logo,name,source})=>{
                  return    <div key={id} className='md:w-[300px]  md:h-[300px] border-[2px] rounded-lg p-1 cursor-pointer hover:scale-105 duration-200'>
                               <div className='flex items-center justify-center my-2'>
                               <img  src={logo} alt="project_logo" className='w-[120px] h-[120px] p-1 rounded-full border-[2px] '/>
                               </div>
                              <div>
                                  <div className='font-bold text-xl mb-2 px-2 text-center'>{name}</div>
                                  <p className='px-2 text-gray-300'>Made Book store using MERN Stack</p>
                              </div>
                              <div className='mx-2 my-3  flex justify-center '>
                                 <a href={source} target='_blank'  className='font-bold px-4 py-2 rounded border-[1px] hover:scale-105'>Source Code</a >
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
