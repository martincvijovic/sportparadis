import React from 'react'
import Tennis from '../assets/tennis-2x.png'
import Rabobank from '../assets/rabobank-2x.png'
import Padel from '../assets/padel-2x.png'
import { Link } from 'react-router-dom'

const Partners = () => {
  return (
    <div className='py-6 px-8 md:px-14 mt-2'>
      <p className="font-[600] text-[1.2rem]">Partners of the KNLTB</p>
      <div className='flex flex-wrap sm:flex-nowrap gap-8'>
        <div className='flex items-center gap-8 mt-6'>
          <div className='w-[2rem] md:w-[3rem]'><Link><img className='w-full' src={Tennis} alt="" /></Link></div>
          <div className='flex items-center gap-4 flex-wrap border-l-[1px] border-[#000] pl-4'>
            <div className='w-[4rem] md:w-[5rem]'><Link><img src={Rabobank} alt="" /></Link></div>
            <div className='w-[4rem] md:w-[5rem]'><Link><img src={Rabobank} alt="" /></Link></div>
            <div className='w-[4rem] md:w-[5rem]'><Link><img src={Rabobank} alt="" /></Link></div>
            <div className='w-[4rem] md:w-[5rem]'><Link><img src={Rabobank} alt="" /></Link></div>
          <div className='w-[4rem] md:w-[5rem]'><Link><img src={Rabobank} alt="" /></Link></div>
        </div>
        </div>
        <div className='flex items-center gap-8 mt-8'>
          <div className='w-[2rem] md:w-[3rem]'><Link><img className='w-full' src={Padel} alt="" /></Link></div>
          <div className='flex items-center gap-4 flex-wrap border-l-[1px] border-[#000] pl-4'>
          <div className='w-[4rem] md:w-[5rem]'><Link><img src={Rabobank} alt="" /></Link></div>
            <div className='w-[4rem] md:w-[5rem]'><Link><img src={Rabobank} alt="" /></Link></div>
            <div className='w-[4rem] md:w-[5rem]'><Link><img src={Rabobank} alt="" /></Link></div>
            <div className='w-[4rem] md:w-[5rem]'><Link><img src={Rabobank} alt="" /></Link></div>
            <div className='w-[4rem] md:w-[5rem]'><Link><img src={Rabobank} alt="" /></Link></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners
