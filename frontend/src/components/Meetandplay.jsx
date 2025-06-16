import React, { useState } from 'react'
import Girljump from '../assets/girljump.webp'
import Manplay from '../assets/manplay.webp'
import Ballsandbat from '../assets/ballsandbat.webp'
import PropTypes from 'prop-types'

export const Row = ({ title, detail, num, onMouseEnter }) =>{
    return(
        <div 
        onMouseEnter={onMouseEnter}
        className={`bg-[#ddd] rounded-md w-full pr-8 md:pr-12 p-4 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-[#888] group:`}>
            <div className='flex items-center gap-2 justify-end font-[700] mb-2'>
                <h2 className='text-[1.5rem] md:text-[2.3rem]'>{title}</h2>
                <p className='text-[1.5rem] md:text-[2.3rem] border-[2px] border-orange-500 px-[.65rem] md:px-4 rounded-full group-hover:border-white'><span>{num}</span></p>
            </div>
            <div className='text-right'><p>{detail}</p></div>
        </div>
    )
}

const Meetandplay = () => {
    const [ switchImage, setSwitchImage ] = useState(Girljump)
  return (
    <div className='py-6 px-4 md:px-12 flex justify-center items-center gap-6'>
      <div className='w-3/6 relative'>
        <div className='flex items-center justify-end text-right'><h1 className=' text-[2rem] sm:text-[] md:text-[2.8rem] lg:text-[3.6rem] font-[800] mb-8'>Meet & Play in 3 Steps</h1></div>
        <div className='flex flex-col gap-4 relative left-10 sm:left-20 lg:left-36'>
            <Row 
            onMouseEnter={() => setSwitchImage(Girljump)}
            title='Search' detail='Search for a tennis or padel activity near you based on your zip code or city.' num='1'/>
            <Row 
            onMouseEnter={() => setSwitchImage(Manplay)}
            title='Book' detail='Choose the activity that suits you and book' num='2'/>
            <Row 
            onMouseEnter={() => setSwitchImage(Ballsandbat)}
            title='Meet & Play' detail='You will receive a confirmation of your booking. Get to know tennis or padel and discover how much fun it is. Have fun!' num='3'/>
        </div>
      </div>
      <div className='w-3/6 h-[770px] md:h-[700px] rounded-md'>
        <img className={`h-full w-full object-cover rounded-md`} src={switchImage} alt="" />
      </div>
    </div>
  )
}

export default Meetandplay


Row.propTypes = {
  title: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  num: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onMouseEnter: PropTypes.func.isRequired
}