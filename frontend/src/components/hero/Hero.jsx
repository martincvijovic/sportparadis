import React, { useState, useEffect } from 'react'
import './hero.css'
import { IoMdTennisball } from 'react-icons/io'
import { GiTennisRacket } from "react-icons/gi";
import { MdOutlineSportsBaseball } from 'react-icons/md';
import { FaBasketball } from 'react-icons/fa6';
import { IoMdFootball } from 'react-icons/io';
// import { FaHome } from 'react-icons/fa'
import Firstimage from '../../assets/sporthero2.webp'
import secimage from '../../assets/sporthero3.webp'
import { FiSearch } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Jobs from '../jobs/Jobs';
import { SportsCarousel } from '../availableactivites/Sportcarousel';

function Hero() {

  const images = [
    Firstimage,
    secimage,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ selectedSport, setSelectedSport, ] = useState('tennis')
  const [ activeSport, setActiveSport ] = useState('All sports')
  // console.log(selectedSport);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change background every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div>
      <div 
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
        className='py-6 px-8 md:px-14 hero-section'>
          <div><Link to='/' className='text-[2.8rem] md:text-[3.4rem] font-[700] text-white cursor-pointer hero-content'>Search and book now</Link></div>
            <div className='flex items-center justify-center sm:justify-start flex-wrap gap-2 hero-content my-6'>
              <button 
                onClick={() =>setActiveSport('All sports')}
                className={`flex items-center gap-1 border-[1px] border-[#d94b18] py-[.6rem] px-[.6rem] text-[1.1rem] font-[500] text-[#d94b18] rounded-[100px] 
                ${activeSport === 'All sports' ? 'bg-orange-700 text-white': 'bg-white'}`}>All sports</button>
                <button 
                onClick={() =>setActiveSport('tennis')}
                className={`flex items-center gap-1 border-[1px] border-[#d94b18] py-[.6rem] px-[.6rem] text-[1.1rem] font-[500] text-[#d94b18] rounded-[100px] 
                ${activeSport === 'tennis' ? 'bg-orange-700 text-white': 'bg-white'}`}><IoMdTennisball className={`text-[#d94b18] text-[1.2rem] ${activeSport === 'tennis' ? 'text-white': ''}`}/> Tennis</button>
                <button
                onClick={() =>setActiveSport('padel')} 
                className={`flex items-center gap-1 border-[1px] border-[#d94b18] py-[.6rem] px-[.6rem] text-[1.1rem] font-[500] text-[#d94b18] rounded-[100px] 
                ${activeSport === 'padel'? 'bg-orange-700 text-white': 'bg-white'}`}><GiTennisRacket className={`text-[#d94b18] text-[1.2rem] ${activeSport === 'padel' ? 'text-white': ''}`}/> Padel</button>
                <button
                onClick={() =>setActiveSport('squash')} 
                className={`flex items-center gap-1 border-[1px] border-[#d94b18] py-[.6rem] px-[.6rem] text-[1.1rem] font-[500] text-[#d94b18] rounded-[100px] 
                ${activeSport === 'squash' ? 'bg-orange-700 text-white': 'bg-white'}`}><MdOutlineSportsBaseball  className={`text-[#d94b18] text-[1.2rem] ${activeSport === 'squash' ? 'text-white': ''}`}/>Squash</button>
                <button
                onClick={() =>setActiveSport('pickleball')} 
                className={`flex items-center gap-1 border-[1px] border-[#d94b18] py-[.6rem] px-[.6rem] text-[1.1rem] font-[500] text-[#d94b18] rounded-[100px] 
                ${activeSport === 'pickleball' ? 'bg-orange-700 text-white': 'bg-white'}`}><GiTennisRacket className={`text-[#d94b18] text-[1.2rem] ${activeSport === 'pickleball' ? 'text-white': ''}`}/>Pickleball</button>
                <button
                onClick={() =>setActiveSport('football')} 
                className={`flex items-center gap-1 border-[1px] border-[#d94b18] py-[.6rem] px-[.6rem] text-[1.1rem] font-[500] text-[#d94b18] rounded-[100px] 
                ${activeSport === 'football' ? 'bg-orange-700 text-white': 'bg-white'}`}><IoMdFootball className={`text-[#d94b18] text-[1.2rem] ${activeSport === 'football' ? 'text-white': ''}`}/> Football</button>
                <button
                onClick={() =>setActiveSport('basketball')} 
                className={`flex items-center gap-1 border-[1px] border-[#d94b18] py-[.6rem] px-[.6rem] text-[1.1rem] font-[500] text-[#d94b18] rounded-[100px] 
                ${activeSport === 'basketball' ? 'bg-orange-700 text-white': 'bg-white'}`}><FaBasketball  className={`text-[#d94b18] text-[1.2rem] ${activeSport === 'basketball' ? 'text-white': ''}`}/> Basketball</button>
            </div>
          <form action="">
            <div className='flex items-center flex-col lg:flex-row gap-8 mt-2 hero-content'>
                <div className='w-full lg:w-[350px]'>
                    <input
                    placeholder='Where' 
                    className='outline-none border-[1px] rounded-sm w-full p-4'
                    type="text" />
                </div>
                <div className='w-full lg:w-[350px]'>
                    <input
                    placeholder='Club name' 
                    className='outline-none border-[1px] rounded-sm w-full p-4'
                    type="text" />
                </div>
                  <select className='w-full lg:w-[350px] outline-none border-[1px] rounded-sm p-4' name="" id="">
                    <option className='outline-none border-[1px] rounded-sm w-full p-4' value="indoorandoutdoor">Indoor and Outdoor</option>
                    <option className='outline-none border-[1px] rounded-sm w-full p-4' value="indoor">Indoor</option>
                    <option className='outline-none border-[1px] rounded-sm w-full p-4' value="outdoor">Outdoor</option>
                  </select>
                <div className='w-full lg:w-[350px] relative'>
                    <input
                    placeholder='' 
                    className='outline-none border-[1px] rounded-sm w-full pl-[1.7rem] p-4 date-input'
                    type="date" />
                    <button className='text-[white] text-[.8rem] absolute bottom-3 right-2 bg-orange-500 font-[500] rounded-[100px] p-1 px-2 flex items-center gap-1'>Search <FiSearch className='text-[.9rem] font-[600]'/></button>
                </div>
            </div>
          </form>
      </div>
      <section className=''>
        <Jobs />
      </section>
      <section className='bg-[#f5f5f5] px-8 md:px-14 py-6 overflow-x-hidden'>
        <div className="mb-8 2xl:flex 2xl:items-center 2xl:justify-center">
          <p className="font-[500] text-[1.5rem] lg:text-[2rem]">Available activities from Saturday 7 December </p>
        </div>
          <div className='sm:flex sm:items-center sm:justify-center'>
            <SportsCarousel selectedSport={selectedSport}/>
          </div>
      </section>
      <section className='bg-[#f5f5f5] px-8 md:px-14 py-6 overflow-x-hidden'>
        <div className="mb-8 2xl:flex 2xl:items-center 2xl:justify-center">
          <p className="font-[500] text-[1.5rem] lg:text-[2rem]">Available activities from Saturday 8 December </p>
        </div>
          <div className='sm:flex sm:items-center sm:justify-center'>
            <SportsCarousel selectedSport={selectedSport}/>
          </div>
      </section>
      <section className='bg-[#f5f5f5] px-8 md:px-14 py-6 overflow-x-hidden'>
        <div className="mb-8 2xl:flex 2xl:items-center 2xl:justify-center">
          <p className="font-[500] text-[1.5rem] lg:text-[2rem]">Available activities from Saturday 9 December </p>
        </div>
          <div className='sm:flex sm:items-center sm:justify-center'>
            <SportsCarousel selectedSport={selectedSport}/>
          </div>
      </section>
    </div>
  )
}

export default Hero
