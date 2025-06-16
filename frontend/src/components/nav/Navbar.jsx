import React from 'react'
import { Link } from 'react-router-dom'
import { GiTennisRacket } from "react-icons/gi";
import { BiSolidTennisBall } from "react-icons/bi";
import './navbar.css'
const navLinks = [
    {text: 'Tennis', icon: <BiSolidTennisBall />, link: '/tennis'},
    {text: 'Padel', icon: <GiTennisRacket />, link: '/padel'},
    {text: 'Pickleball', icon: <GiTennisRacket />, link: '/pickleball'},
    {text: 'Associations', icon: '', link: '/association'},
    {text: 'Centers', icon: '', link: '/centers'},
    {text: 'Teachers', icon: '', link: '/teachers'},
]

const sports = [
    {text: 'KNLTB', icon: '', link: '/knltb'},
    {text: 'Tennis', icon: <GiTennisRacket />, link: '/tennis'},
    {text: 'Padel', icon: <GiTennisRacket />, link: '/padel'},
    {text: 'Pickleball', icon: <GiTennisRacket />, link: '/pickleball'},
    {text: 'Associations', icon: <GiTennisRacket />, link: '/association'},
    {text: 'Centers', icon: <GiTennisRacket />, link: '/centers'},
    {text: 'Teachers', icon: <GiTennisRacket />, link: '/teachers'},
    {text: 'KNLTB TV', icon: <GiTennisRacket />, link: '/knltb tv'},
]


const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className='flex items-center gap-[5px] text-white'>
            {navLinks.map((link, index) =>(
                <li key={index} className='hover text-[.94rem] p-2'>
                    <Link className='flex items-center gap-1'><span className='text-[1.2rem] font-[600]'>{link.icon}</span>{link.text}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Navbar
