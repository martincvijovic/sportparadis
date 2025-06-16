import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Mainheader } from "../../components"
import Map from '../../assets/dummymap.png'
import Location from "./Location"
import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import {Usefullinks, Footer, Partners} from "../../components"


const CLubs = () => {
    const [ activeSport, setActiveSport ] = useState('All sports')
  return (
    <div>
      <Mainheader />
      <div className="flex items-center gap-2 pt-6 px-4 md:px-10">
        <Link className="hover:text-orange-500">Meet & Play</Link>
        <MdKeyboardDoubleArrowRight />
        <p className="text-orange-500">Clubs</p>
      </div>
      <main className="py-6 px-4 md:px-10">
        <section className=" text-[#4c535a] bg-[#193291] rounded-t-md p-6">
            <section className="flex items-center justify-center sm:justify-start gap-6 flex-wrap">
                <div className="w-full sm:w-[220px]">
                    <label htmlFor="" className="text-[#dae1e3] text-[.9rem] font-[600]">Sport</label> <br />
                    <select className="outline-none rounded-[100px] p-2 w-full" name="" id="">
                        <option value="">Tennis</option>
                        <option value="">Padel</option>
                        <option value="">Basketball</option>
                        <option value="">football</option>
                    </select>
                </div>
                <div className="w-full sm:w-[220px]">
                    <label className="text-[#dae1e3] text-[.9rem] font-[600]" htmlFor="">When</label> <br />
                    <input 
                    placeholder="12/04/2000"
                    className="outline-none rounded-[100px] p-2 w-full"
                    type="date" />
                </div>
                <div className="w-full sm:w-[220px]">
                    <label htmlFor="" className="text-[#dae1e3] text-[.9rem] font-[600]">Indoor/Output</label> <br />
                    <select className="outline-none rounded-[100px] p-2 w-full" name="" id="">
                        <option value="">Both</option>
                        <option value="">Indoor</option>
                        <option value="">Outdoor</option>
                    </select>
                </div>
                <div className="w-full sm:w-[220px]">
                    <label htmlFor="" className="text-[#dae1e3] text-[.9rem] font-[600]">Part of the day</label> <br />
                    <select className="outline-none rounded-[100px] p-2 w-full" name="" id="">
                        <option value="">Tennis</option>
                        <option value="">Padel</option>
                        <option value="">Basketball</option>
                        <option value="">football</option>
                    </select>
                </div>
                <div className="w-full sm:w-[220px]">
                    <label className="text-[#dae1e3] text-[.9rem] font-[600]" htmlFor="">Which club</label> <br />
                    <input 
                    placeholder="Downtown"
                    className="outline-none rounded-[100px] p-2 w-full"
                    type="text" />
                </div>
                <div className="w-full sm:w-[220px]">
                    <label className="text-[#dae1e3] text-[.9rem] font-[600]" htmlFor="">Where</label> <br />
                    <input 
                    placeholder="Dubai"
                    className="outline-none rounded-[100px] p-2 w-full"
                    type="text" />
                </div>
                <div className="w-full sm:w-[220px]">
                    <label htmlFor="" className="text-[#dae1e3] text-[.9rem] font-[600]">Distance</label> <br />
                    <select className="outline-none rounded-[100px] p-2 w-full" name="" id="">
                        <option value="">Show all</option>
                    </select>
                </div>
            </section>
            <section className="mt-6">
                <p className="text-[#dae1e3] text-[.9rem] font-[600] mb-2">Duration</p>
                <div className='flex items-center justify-center sm:justify-start flex-wrap gap-2 hero-content'>
                    <button 
                    onClick={() =>setActiveSport('All sports')}
                    className={`flex items-center gap-1 border-[1px] border-[#d94b18] py-[.6rem] px-[.6rem] text-[1.1rem] font-[500] text-[#d94b18] rounded-[100px] 
                    ${activeSport === 'All sports'? 'bg-orange-700 text-white': 'bg-white'}`}>45 minutes</button>
                    <button 
                    onClick={() =>setActiveSport('tennis')}
                    className={`flex items-center gap-1 border-[1px] border-[#d94b18] py-[.6rem] px-[.6rem] text-[1.1rem] font-[500] text-[#d94b18] rounded-[100px] 
                    ${activeSport === 'tennis'? 'bg-orange-700 text-white': 'bg-white'}`}> 60 minutes</button>
                    <button
                    onClick={() =>setActiveSport('padel')} 
                    className={`flex items-center gap-1 border-[1px] border-[#d94b18] py-[.6rem] px-[.6rem] text-[1.1rem] font-[500] text-[#d94b18] rounded-[100px] 
                    ${activeSport === 'padel'? 'bg-orange-700 text-white': 'bg-white'}`}>90 minutes</button>
                    <button
                    onClick={() =>setActiveSport('squash')} 
                    className={`flex items-center gap-1 border-[1px] border-[#d94b18] py-[.6rem] px-[.6rem] text-[1.1rem] font-[500] text-[#d94b18] rounded-[100px] 
                    ${activeSport === 'squash'? 'bg-orange-700 text-white': 'bg-white'}`}>75 minutes</button>
                    <button
                    onClick={() =>setActiveSport('pickleball')} 
                    className={`flex items-center gap-1 border-[1px] border-[#d94b18] py-[.6rem] px-[.6rem] text-[1.1rem] font-[500] text-[#d94b18] rounded-[100px] 
                    ${activeSport === 'pickleball'? 'bg-orange-700 text-white': 'bg-white'}`}>20 minutes</button>
                </div>
            </section>
        </section>
        <section className="flex items-center flex-wrap sm:flex-nowrap">
            <section className="bg-[#eeeeee] p-4 w-full sm:w-3/6 h-[400px] overflow-y-scroll">
                <Location />
            </section>
            <section className="w-full sm:w-3/6 h-[400px] ">
                <iframe width="100%" className='h-full' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
            </section>
        </section>
      </main>
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

export default CLubs
