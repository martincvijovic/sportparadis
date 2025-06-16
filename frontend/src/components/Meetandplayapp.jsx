import React from 'react'
import Map from '../assets/dummymap.png'
import Appstorebadge from '../assets/appstorebadge.svg'
import Googlebadge from '../assets/googleplaybadge.svg'
import { Link } from 'react-router-dom'
const Meetandplayapp = () => {
  return (
    <div className='flex items-center justify-center md:justify-between gap-8 flex-wrap-reverse md:flex-nowrap py-6 px-4 md:px-10 text-[#222]'>
      <div className='w-full md:w-3/6'><img src={Map} alt="" /></div>
      <div className='w-full md:w-3/6 flex flex-col gap-4'>
        <p className='text-[2.3rem] font-[800]'>MEET & PLAY APP</p>
        <p>Discover a job or activity at a club near you even faster? Book and pay easily?</p>
        <p><strong>Download the Meet & Play App now</strong> and become part of the tennis and padel platform of the Netherlands.</p>
        <span className='flex items-center gap-2'>
            <Link><div className='w-36'><img src={Appstorebadge} alt="" /></div></Link>
            <Link><div className='w-36'><img src={Googlebadge} alt="" /></div></Link>
        </span>
      </div>
    </div>
  )
}

export default Meetandplayapp
