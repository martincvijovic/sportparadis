import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Firstimage from '../../assets/sporthero2.webp'
import secimage from '../../assets/sporthero3.webp'
import { IoMdTennisball } from 'react-icons/io'
import { MdOutlineSportsBaseball } from 'react-icons/md'
import { GiTennisRacket } from 'react-icons/gi'
import { Mainheader, Eachevent, Meetandplay, Tennisandpadelinfo, Meetandplayapp, SportVirtual, Usefullinks, Footer, Partners } from '../../components'
import Map from '../../assets/dummymap.png'

const Discover = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [ activeSport, setActiveSport ] = useState('All sports')
    const images = [
        Firstimage,
        secimage,
    ];

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Change background every 2 seconds
    
        return () => clearInterval(interval); // Cleanup on unmount
    }, [images.length]);

  return (
    <div>
      <Mainheader />
      <section 
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
        className='py-6 px-8 md:px-14 hero-section'>
          <div><Link to='/' className='text-[2.8rem] md:text-[3.4rem] font-[700] text-white cursor-pointer hero-content'>DISCOVER TENNIS OR PADEL</Link></div>
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
            </div>
          </form>
          <div className='flex items-center justify-center sm:justify-start flex-wrap gap-2 hero-content my-6'>
            <button 
              onClick={() =>setActiveSport('All sports')}
              className={`flex items-center gap-1 border-[1px] border-[#d94b18] py-[.6rem] px-[.6rem] text-[1.1rem] font-[500] text-[#d94b18] rounded-[100px] 
              ${activeSport === 'All sports'? 'bg-orange-700 text-white': 'bg-white'}`}>All sports</button>
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
            </div>
      </section>
      <section className="p-4 flex items-center flex-wrap md:flex-nowrap">
            <section className="bg-[#eeeeee] p-4 w-full md:w-3/6 h-[400px] overflow-y-scroll">
                <Eachevent />
            </section>
            <section className="w-full md:w-3/6 h-[400px] ">
              <iframe width="100%" className='h-full' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
            </section>
      </section>
      <section className=''>
        <Meetandplay />
      </section>
      <section className='py-6 px-4 md:px-10'>
        <Tennisandpadelinfo />
      </section>
      <section>
        <Meetandplayapp />
      </section>
      <section>
        <SportVirtual />
      </section>
      <section className='border-y-[1px] border-[#ccc] mt-10'><Usefullinks /></section>
      <section> <Partners /></section>
      <section><Footer /></section>
    </div>
  )
}

export default Discover
