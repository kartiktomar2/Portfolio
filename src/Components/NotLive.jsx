import React from 'react'
import { Link } from 'react-router-dom'

const NotLive = () => {
  return (
   <>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20  my-20 text-center'>
          <h1 className='text-5xl'>Sorry!! This project is not <span className='text-[#7127BA] font-bold'>deployed</span> yet</h1> 
          
    </div>
     <div className='text-center'>
     <Link  to='/' className='font-bold px-4 py-2 rounded border-[1px]   mx-20 '>Back</Link>
     </div>
   </>
    
  )
}

export default NotLive
