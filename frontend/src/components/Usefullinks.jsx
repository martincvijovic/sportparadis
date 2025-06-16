import React from 'react'
import { Link } from 'react-router-dom'

const Usefullinks = () => {
  return (
    <div className='py-6 px-8 md:px-14  mt-2'>
      <p className="font-[500] text-[1.4rem]">Latest News</p>
      <div className='flex items-center flex-wrap gap-2 mt-2'>
        <Link className='hover:underline hover:text-orange-500'>Meet & Play for clubs</Link><span className='h-6 w-[2px] rounded-md bg-[#777]'></span>
        <Link className='hover:underline hover:text-orange-500'>Fequently Ased Questions</Link><span className='h-6 w-[2px] rounded-md bg-[#777]'></span>
        <Link className='hover:underline hover:text-orange-500'>Privacy Statement Meet & Play</Link>
      </div>
    </div>
  )
}

export default Usefullinks
