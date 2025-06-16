import React from 'react'
import { Link } from 'react-router-dom'
import { useParams, useLocation } from 'react-router-dom'
import { Mainheader,Footer, Partners, Usefullinks } from '../../components'
import { IoArrowForward } from 'react-icons/io5'
import Dummymap from '../../assets/dummymap.png'

const Eventdetails = () => {

    const { state } = useLocation()
    
    const { id } = useParams()

  return (
    <div>
        <Mainheader />
      <div className='py-6 px-8 md:px-14 flex flex-wrap md:flex-nowrap gap-6'><Link to='/clubs' className='text-orange-500 font-[600] flex items-center gap-2'>View all club events <IoArrowForward /></Link></div>
      <section className='px-8 md:px-14 flex flex-wrap md:flex-nowrap gap-6'>
        <aside className='w-full md:w-4/6'>
            <h1 className='text-[3rem] font-[800] text-[#262727] uppercase'>Move up & down categories 7 <br /> to 9</h1>
            <div className='flex items-center gap-4 h-18 w-full text-white'>
                <p className='flex items-center gap-1 bg-blue-800 rounded-md h-full py-5 justify-center w-3/6 text-[1.3rem] font-[500]'><span className='text-[.9rem]'>Jan 18</span> 14:30 - 17:00</p>
                <p className='bg-blue-800 rounded-md h-full py-5 flex items-center justify-center w-2/6 text-[1.3rem] font-[500]'>€14.50</p>
                <p className='flex flex-col bg-blue-800 rounded-md h-full py-2 items-center justify-center w-2/6'><span className='text-[1.3rem] font-[700]'>15</span><span className='text-[1.1rem] font-[700] text-slate-400 text-center'>Places available</span></p>
            </div>
            <ul className='flex flex-col gap-4'>
                <li className='font-[500]'>Move up & Down, categories 7 to 9</li>
                <li>During 4 rounds of mutual doubles matches.</li>
                <li>Do you win? Then you stay on the same track, as a couple you split up.</li>
                <li>Lose? Then you drop down a job, again you split up as a couple.</li>
                <li>Who will be this week's winner and finish on lane 1?</li>
            </ul>
            <ul className='flex flex-col gap-4 mt-4'>
                <li className='font-[500]'>Playing schedule;</li>
                <li>14:30-15:00 round 1.</li>
                <li>15:00-15:30 round 2</li>
                <li>15:45-16:15 round 3</li>
                <li>16:15-16:45 round 4</li>
            </ul>
            <div className='mt-4 flex flex-col gap-4'>
                <p>Member registration via the club app agenda.</p>
                <p>Non-members are also welcome!</p>
                <p>Costs € 14.50 pp including drinks and snacks afterwards (incl. hall rental and balls)</p>
                <p>We have room for a maximum of 16 participants, so be on time.</p>
                <p>Do you have any questions? Then call Lisette (06-42171720)</p>
            </div>
            <div className='my-4'><Link className='text-white bg-orange-500 rounded-[100px] p-4 font-[500]'>To enrol</Link></div>
            <div><img src={Dummymap} alt="" /></div>
        </aside>
        <aside className='w-full md:w-2/6'>
            <div className='rounded-lg bg-[#193291] py-8 px-10 text-white'>
                <p className='font-[600] text-[1.7rem]'>Visiting address</p>
                <p className='text-[1rem] my-4 font-[500]'>Potjesdam 4, 1722 XN SOUTH <br /> SCHARWOUDE</p>
                <iframe width="100%" className='h-full' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
            </div>
            <div className='mt-4 w-full'>
                <p className='text-[1.2rem] font-[700]'>Club Details</p>
                <div>
                    <p className='text-[.95rem] font-[700]'>Contact</p>
                    <p>+31 513 632 363</p>
                    <p>info@plantwee.nl</p>
                    <Link>www.plantwee.nl</Link>
                </div>
                <div className='mt-6'>
                    <p className='text-[.95rem] font-[700]'>Accommodation</p>
                    <p><strong>Facilities:</strong> There is a canteen for a delicious cup of coffee or something else to eat, you can also use the toilets and showers there.</p>
                </div>
            </div>
        </aside>
      </section>
      <section className='border-y-[1px] border-[#ccc] mt-10'><Usefullinks /></section>
      <section> <Partners /></section>
      <section><Footer /></section>
    </div>
  )
}

export default Eventdetails
