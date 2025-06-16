import React, { useState } from 'react'
import { Latestnewscarousel } from './Latestnewscarousel'
const Latestnews = () => {
  const [ selectedLatestNews, setSelectedLatestNews, ] = useState('tennis')
  // console.log(selectedSport);

  const handlelatestNews = (sport) => {
    setSelectedLatestNews(sport);
  };
  return (
    <div className='py-6 px-8 md:px-14 bg-[#ddd]'>
        <div className="lg:flex lg:items-center lg:justify-between 2xl:justify-center 2xl:gap-6 flex justify-between mb-8">
          <p className="font-[500] text-[1.5rem] lg:text-[2rem]">Most recent news</p>
          <span className='flex items-center'>
            <button 
            onClick={() => handlelatestNews('tennis')}
            className={`border-[1px] border-[#d94b18] p-1 px-2 text-[.8rem] text-[#d94b18] rounded-[20px] 
            ${selectedLatestNews === 'tennis' ? 'bg-orange-500 text-white': ''}`}>Tennis</button>
            <button 
            onClick={() => handlelatestNews('padel')}
            className={`border-[1px] border-[#d94b18] p-1 px-2 text-[.8rem] text-[#d94b18] rounded-[20px] 
              ${selectedLatestNews === 'padel' ? 'bg-orange-500 text-white': ''}`}>Padel</button>
          </span>
        </div>
        <section className='sm:flex sm:items-center sm:justify-center mb-10'>
          <Latestnewscarousel selectedLatestNews={selectedLatestNews}/>
        </section>
    </div>
  )
}

export default Latestnews
