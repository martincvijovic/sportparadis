import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import KLTV from '../../assets/kltv.png'

const allLocations = [
    {id: 1, name: 'KLTV', address: 'Stationsweg 29 / 31, 2182 BA Hillegom', meter: '32', image: KLTV},
    {id: 2, name: 'TOGB', address: 'Stationsweg 29 / 31, 2182 BA Hillegom', meter: '32', image: ''},
    {id: 3, name: 'Tennis and Padel Meerzicht', address: 'Stationsweg 29 / 31, 2182 BA Hillegom', meter: '32', image: ''},
    {id: 4, name: 'Lake 7 Sports', address: 'Stationsweg 29 / 31, 2182 BA Hillegom', meter: '32', image: ''},
    {id: 5, name: 'TV Boskoop', address: 'Stationsweg 29 / 31, 2182 BA Hillegom', meter: '32', image: ''}
]

const Location = () => {
  return (
    <ul className='flex flex-col gap-2'>
        {allLocations.map((location, index) =>(
            <li className='flex flex-col gap-2 p-2 bg-white relative' key={index}>
                <div className="absolute right-0 top-0 bg-orange-600 px-4 py-2 rounded-bl-md">
                  <p className="text-white text-[1.5rem] font-[500]">{location.meter}</p>
                  <p className="text-[#fdfdfd] text-[.9rem] font-[500]">KM</p>
                </div>
                <p className='text-[1.4rem] font-[600]'>{location.name}</p>
                <p className='text-[.9rem]'>{location.address}</p>
               <div className='flex items-start'> 
                <Link to={`/clubs/${location.id}`}
                state={{title: location.name, image: location.image}}
               className='flex items-center gap-1 bg-blue-800 p-2 rounded-[100px] text-white text-[.9rem] font-[500]'>Books <FaArrowRight /></Link></div>
            </li>
        ))}
    </ul>
  )
}

export default Location
