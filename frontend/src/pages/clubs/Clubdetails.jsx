import { Mainheader } from '../../components'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Dummymap from '../../assets/dummymap.png'
import { useState } from 'react'
import { Usefullinks, Footer, Partners } from '../../components'



const jobsDataSixtyminutes = [
    {id:1, date: '16', month: 'DEC', duration: '21:00 - 22:00', time: '60 minutes', sport: 'Tennis court 2', amount: '$29.00'},
    {id:2, date: '16', month: 'DEC', duration: '21:00 - 22:00', time: '60 minutes', sport: 'Tennis court 2', amount: '$29.00'},
    {id:3, date: '16', month: 'DEC', duration: '21:00 - 22:00', time: '60 minutes', sport: 'Tennis court 2', amount: '$29.00'}
]

export const EachJobs = () =>{
    return(
        <ul className='flex flex-col gap-2'>
            <p className='text-[1.1rem] font-[600] mt-2'>60 minutes</p>
            {
                jobsDataSixtyminutes.map((item, index) =>(
                    <li key={index} className='flex items-center justify-between shadow-[#ccc] shadow-md rounded-md bg-white p-2 pr-4'>
                        <div className='flex items-center gap-4'>
                            <p className='flex flex-col items-center text-white bg-orange-600 py-2 px-[.8rem] rounded-md'>
                                <span className='font-[700] text-[1.6rem]'>{item.date}</span><span className='text-[1rem] font-[700]'>{item.month}.</span>
                            </p>
                            <p className='flex flex-col font-[500]'>
                                <span className='text-[1.1rem]'>{item.duration}</span><span className='text-[.85rem] text-[#ccc]'>{item.time}</span>
                            </p>
                            <p className='text-[1.3rem] font-[600] ml-4'>{item.sport}</p>
                        </div>
                        <div className='flex items-center gap-8'>
                            <p className='text-[1.5rem] font-[700]'>{item.amount}</p>
                            <button className='text-white bg-orange-500 p-2 px-4 rounded-[100px]'>Add</button>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

const Clubdetails = () => {
    const [ activeTime, setActiveTime ] = useState(false)

    const { state } = useLocation()
    const { id } = useParams()
console.log();

  return (
    <div className='bg-white'>
      <Mainheader />
      <div className='flex pt-4 px-8 md:px-14 gap-4'>
        <Link className='hover:underline hover:text-orange-500' to='/'>Meet and Play</Link>
        <Link className='hover:underline hover:text-orange-500' to='/clubs'>Clubs</Link>
        <p className='text-orange-500'>{state.title}</p>
      </div>
      <section className='py-6 px-8 md:px-14 flex flex-wrap md:flex-nowrap gap-6 mb-6'>
        <aside className='w-full md:w-4/6'>
            <h1 className='text-[3rem] font-[800] text-[#262727]'>{state.title}</h1>
            <div className='flex items-center gap-2'>
                <NavLink
                to={`/clubs/${id}`}  
                end
                state={{ title: state.title, image: state.image }}
                className={({ isActive }) => `text-[1.7rem] text-[#262727] font-extrabold border-[2px] rounded-md border-orange-500 p-1 ${isActive ? 'bg-orange-600': ''}`}>JOBS</NavLink>
                <NavLink 
                to={`/clubs/${id}/activities`}
                state={{ title: state.title, image: state.image }}
                className='text-[1.7rem] text-[#262727] font-extrabold border-[2px] rounded-md border-orange-500 p-1'>ACTIVITES</NavLink>
            </div>
            <section className="flex items-center justify-center sm:justify-start gap-6 flex-wrap text-[#4c535a] bg-[#193291] rounded-md p-6">
                <div className="w-full sm:w-[160px]">
                    <label htmlFor="" className="text-[#dae1e3] text-[.9rem] font-[600]">Sport</label> <br />
                    <select className="outline-none rounded-[100px] p-2 w-full" name="" id="">
                        <option value="">Tennis</option>
                        <option value="">Padel</option>
                        <option value="">Basketball</option>
                        <option value="">football</option>
                    </select>
                </div>
                <div className="w-full sm:w-[160px]">
                    <label className="text-[#dae1e3] text-[.9rem] font-[600]" htmlFor="">When</label> <br />
                    <input 
                    placeholder="12/04/2000"
                    className="outline-none rounded-[100px] p-2 w-full"
                    type="date" />
                </div>
                <div className="w-full sm:w-[160px]">
                    <label htmlFor="" className="text-[#dae1e3] text-[.9rem] font-[600]">Indoor/Output</label> <br />
                    <select className="outline-none rounded-[100px] p-2 w-full" name="" id="">
                        <option value="">Both</option>
                        <option value="">Indoor</option>
                        <option value="">Outdoor</option>
                    </select>
                </div>
                <div className="w-full sm:w-[160px]">
                    <label htmlFor="" className="text-[#dae1e3] text-[.9rem] font-[600]">Part of the day</label> <br />
                    <select className="outline-none rounded-[100px] p-2 w-full" name="" id="">
                        <option value="">Tennis</option>
                        <option value="">Padel</option>
                        <option value="">Basketball</option>
                        <option value="">football</option>
                    </select>
                </div>
            </section>
            <div className='flex items-center mt-6'>
                <button className='px-2 py-1 border-orange-500 border-[1px] text-orange-500 text-[.8rem] rounded-[100px]'>60 minutes</button>
                <button className='px-2 py-1 border-orange-500 border-[1px] text-orange-500 text-[.8rem] rounded-[100px]'>90 minutes</button>
                <button className='px-2 py-1 border-orange-500 border-[1px] text-orange-500 text-[.8rem] rounded-[100px]'>120 minutes</button>
            </div>
            <div className='mt-4'>
                <h1 className='text-[1.5rem] font-[500] text-[#262727]'>Time</h1>
                <div className='flex items-center gap-4 flex-wrap'>
                    <button onClick={() => setActiveTime(!activeTime)} className={`border-[1px] border-blue-800 py-1 px-2 rounded-md ${activeTime ? 'bg-blue-800 text-white': ''}`}>9:30am</button>
                    <button className='border-[1px] border-blue-800 py-1 px-2 rounded-md'>9:30am</button>
                    <button className='border-[1px] border-blue-800 py-1 px-2 rounded-md'>9:30am</button>
                    <button className='border-[1px] border-blue-800 py-1 px-2 rounded-md'>9:30am</button>
                    <button className='border-[1px] border-blue-800 py-1 px-2 rounded-md'>9:30am</button>
                    <button className='border-[1px] border-blue-800 py-1 px-2 rounded-md'>9:30am</button>
                </div>
            </div>
            <div className='mt-6'>
                <h1 className='text-[1.5rem] font-[500] text-[#262727]'>Jobs</h1>
                <EachJobs />
            </div>
        </aside>
        <aside className='w-full md:w-2/6'>
            <div className='rounded-lg bg-[#193291] py-8 px-10 text-white'>
                <p className='font-[600] text-[1.7rem]'>Visiting address</p>
                <p className='text-[1rem] my-4 font-[500]'>Potjesdam 4, 1722 XN SOUTH <br /> SCHARWOUDE</p>
                <iframe width="100%" className='h-full' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
            </div>
            <div className='mt-4 w-full'>
                <p className='text-[1.2rem] font-[700]'>Club Details</p>
                <div className='bg-white w-full'><img className='w-full' src={state.image} alt="" /></div>
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
      <section>
        <Usefullinks />
      </section>
      <footer>
        <Partners />
        <Footer />
      </footer>
    </div>
  )
}

export default Clubdetails
