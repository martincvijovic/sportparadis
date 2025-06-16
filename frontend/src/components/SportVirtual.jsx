import React from 'react'
import SportVirtualImage from '../assets/sportvirtual.webp'

const SportVirtual = () => {
  return (
    <div 
    style={{
        backgroundImage: `url(${SportVirtualImage})`,
      }}
      className='bg-cover text-white h-[450px] p-10 pt-20 pl-20'
      >
      <p>Meet & Play</p>
      <p className='text-[3rem] font-[800]'>Keep the sport vital</p>
      <p className='text-[1.1rem] w-full md:w-4/6'>Meet & Play is the booking platform for tennis and padel in the Netherlands. A platform that aims to build a vital community for tennis and padel. The platform operates without profit motive. 100% of the income is used to strengthen the tennis and padel sport in its full breadth. In addition, the platform is continuously improved. In this way we create lasting added value for players, providers and partners. Together we are building on keeping tennis and padel vital.</p>
    </div>
  )
}

export default SportVirtual
