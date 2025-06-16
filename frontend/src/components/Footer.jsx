import React from 'react'
import { Link } from 'react-router-dom'
import KNLTfooterlogo from '../assets/knltblogofooter.svg'

const Footer = () => {
  return (
    <div className="bg-[#19328A] py-6 px-8 md:px-14 mt-2 footer flex items-center justify-between gap-4 flex-wrap">
      <div className='flex items-center flex-wrap gap-[1.4rem] mt-2'>
        <div><img src={KNLTfooterlogo} alt="" /></div>
        <Link className='hover:underline text-[.95rem] text-white'>Privacy statement</Link>
        <Link className='hover:underline text-[.95rem] text-white'>Cookie Statement</Link>
        <Link className='hover:underline text-[.95rem] text-white'>Disclaimer</Link>
        <Link className='hover:underline text-[.95rem] text-white'>General Terms and Conditions of Purchase</Link>
      </div>
      <p className='text-[white]'>Copyright KNLTB @ 2024</p>
    </div>
  )
}

export default Footer
