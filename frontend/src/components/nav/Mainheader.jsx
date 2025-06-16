import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RxCross1 } from "react-icons/rx";
import { IoMenuOutline } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";
import { TbWorld } from 'react-icons/tb';
import Logo2 from '../../assets/sportlogo2.svg'
import { BiSolidTennisBall } from "react-icons/bi";
import { GiTennisRacket } from 'react-icons/gi';
import LoginSignup from '../loginandsignup/LoginSignup';
import PropTypes from 'prop-types';
import './navbar.css'

const navLinks = [
  {text: 'KNLTB', icon: '', link: '/knltb'},
  {text: 'Tennis', icon: <BiSolidTennisBall />, link: '/tennis'},
  {text: 'Padel', icon: <GiTennisRacket />, link: '/padel'},
  {text: 'Pickleball', icon: <GiTennisRacket />, link: '/pickleball'},
  {text: 'Associations', icon: '', link: '/association'},
  {text: 'Centers', icon: '', link: '/centers'},
  {text: 'Teachers', icon: '', link: '/teachers'},
]

export const SideheaderMenu = () =>{
  const [ showSidebar, setShowSidebar ] = useState(false)
  const [ showSignup, setShowSignup ] = useState(false)
  useEffect(() => {
    if (showSignup) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup when component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showSignup]);
  const handleSidebar = () =>{
    setShowSidebar(!showSidebar)
  }
  return(
    <div>
      <ul className='sideheaderNav w-full bg-white fixed top-[4.5rem] left-0 h-screen flex flex-col justify-start gap-6 text-black z-40 overflow-y-scroll'>
        <Link to='/' className='hover:underline hover:text-orange-500 sidelink'>Explanation</Link>
        <Link to='/discover' className='hover:underline hover:text-orange-500 sidelink'>Discover</Link>
        <Link className='hover:underline hover:text-orange-500 sidelink'>To play</Link>
        <Link to='/download' className='hover:underline hover:text-orange-500 sidelink'>Download</Link>
        <Link to='/clubs' className='hover:underline hover:text-orange-500 sidelink'>Map of facilities</Link>
        <Link to='/news' className='hover:underline hover:text-orange-500 sidelink'>News</Link>
        <div className='mb-20 flex items-center justify-end gap-4'>
        <button 
        onClick={() => setShowSignup(true)}
        className='text-[white] bg-[#19328A] font-[500] rounded-[100px] p-2 px-4 flex items-center gap-1'>Sign Up</button>
        <Link 
        to={`/admin/matches`}
        // onClick={() => setShowSignup(true)}
        className='text-[white] bg-[#19328A] font-[500] rounded-[100px] p-2 px-4 flex items-center gap-1'>Admin panel</Link>
        </div>
      </ul>
      {
        showSignup && (
          <LoginSignup showSignup={showSignup} setShowSignup={setShowSignup}/>
        )
      }
    </div>
  )
}


const Mainheader = () => {
  const [ showMenu, setShowMenu ] = useState(false)
  const [ showSignup, setShowSignup ] = useState(false)
  useEffect(() => {
    if (showMenu, showSignup) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup when component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showMenu, showSignup]);

  return (
    <div className='mainheader border-b-[] border-[#ccc]'>
      <div className='flex items-center md:gap-2 xl:gap-10'>
        <div className='mr-6'><Link to='/'><img src={Logo2} alt="" /></Link></div>
        <ul className='mainheaderNav'>
          <li><Link to='/'>Explanation</Link></li>
          <li><Link to='/discover'>Discover</Link></li>
          <li><Link>To play</Link></li>
          <li><Link to='/download'>Download</Link> </li>
          <li><Link to='/clubs'>Map of facilities</Link></li>
          <li><Link to='/news'>News</Link></li>
        </ul>
      </div>
      <div className='flex items-center gap-4 login'>
        <div className='flex items-center gap-[5px] text-white'>
        <button 
        onClick={() => setShowSignup(true)}
        className='text-[white] bg-[#19328A] font-[500] rounded-[100px] p-2 px-4 flex items-center gap-1'>Sign Up</button>
        <Link 
        to={`/admin`}
        className='text-[white] bg-[#19328A] font-[500] rounded-[100px] p-2 px-4 flex items-center gap-1'>Admin panel</Link>
        <span className='shadow-xl border-[1px] border-[#aaa] rounded-full p-[.4rem] '> <TbWorld  className='text-[1.5rem] font-[600] media'/></span>
        <Link className='shadow-xl border-[1px] border-[#aaa] rounded-full p-[.4rem] '><MdOutlinePersonOutline className='text-[1.5rem] font-[600] media'/></Link>
      </div>
      </div>
      <div className='menu text-black absolute right-6'>
        {showMenu ? <RxCross1 
        onClick={() => setShowMenu(false)}
        className='text-[2rem] cursor-pointer'/>: 
        <IoMenuOutline 
        onClick={() => setShowMenu(true)}
        className='text-[1.9rem] cursor-pointer'/>}
      </div>
      { showMenu && (
        <SideheaderMenu showMenu={showMenu} setShowMenu={setShowMenu}/>
      ) }


      {
        showSignup && (
          <LoginSignup showSignup={showSignup} setShowSignup={setShowSignup}/>
        )
      }
    </div>
  )
}

export default Mainheader

SideheaderMenu.propTypes = {
  setShowMenu: PropTypes.bool.isRequired
}