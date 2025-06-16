import React from 'react'
import Clubdetailsadmin from '../components/clubedetails/Clubdetailsadmin'

export function Numbersheading({ number, item }) {
  return (
    <div className='md:min-w-[14.5rem] w-full bg-[F2F4F7] flex flex-col items-center space-y-2 bg-[#F2F4F7] px-[16px] py-[8px]'>
      <p className='text-[32px] text-[#FF7D01] font-[500]'>{number}</p>
      <p className='text-[14px] font-[500]'>{item}</p>
    </div>
  )
}


const Matches = () => {
  return (
    <div className="py-4 px-4">
      <Clubdetailsadmin />
      <div className="py-4 px-4 num">
        <div><Numbersheading number={10} item="Tennis" /></div>
        <div><Numbersheading number={12} item="Padel" /></div>
        <div><Numbersheading number={12} item="Basketball" /></div>
        <div><Numbersheading number={13} item="Football" /></div>
      </div>
      <div className="p-[1.3rem] flex-grow">
        <p className="font-[600] md:block text-[20px] mb-4">My matches</p>
        <table className="w-full text-left">
          <thead>
            <tr className="border-y-[1px] border-slate-500 flex items-center justify-between p-2">
              <th className="">ID</th>
              <th className="">Name</th>
              <th className="">Purchased for</th>
              <th className="">Time remaining</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Matches