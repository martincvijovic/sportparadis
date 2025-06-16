import React, { useState } from 'react'
import Logo from '../../assets/sportlogo.png'
import { MdKeyboardArrowDown } from "react-icons/md";
import { Dropdown } from '../../utils/dropdowns/Dropdowns';

const dropDowndata = {
    Featured: [
        {
            heading: 'Wedstrijden spelen',
            links:[
                {text: 'Competitie', url: ''},
                {text: 'Toernooien', url: ''},
                {text: 'Padel', url: ''},
                {text: 'Speelsterkte & Rating', url: ''}
            ]
        },
        {
            heading: 'Wedstrijden spelen',
            links:[
                {text: '', url: ''},
                {text: '', url: ''},
                {text: '', url: ''}
            ]
        },
        {
            heading: 'Wedstrijden spelen',
            links:[
                {text: '', url: ''},
                {text: '', url: ''},
                {text: '', url: ''}
            ]
        },
        {
            heading: 'Wedstrijden spelen',
            links:[
                {text: '', url: ''},
                {text: '', url: ''},
                {text: '', url: ''},
                {text: '', url: ''}
            ]
        },
    ],
    aboutKNLTB: [
        {
            heading: 'Wedstrijden spelen',
            links:[
                {text: '', url: ''},
                {text: '', url: ''},
                {text: '', url: ''},
                {text: '', url: ''}
            ]
        },
        {
            heading: 'Wedstrijden spelen',
            links:[
                {text: '', url: ''},
                {text: '', url: ''},
                {text: '', url: ''}
            ]
        },
        {
            heading: 'Wedstrijden spelen',
            links:[
                {text: '', url: ''},
                {text: '', url: ''},
                {text: '', url: ''}
            ]
        },
        {
            heading: 'Wedstrijden spelen',
            links:[
                {text: '', url: ''},
                {text: '', url: ''},
                {text: '', url: ''},
                {text: '', url: ''}
            ]
        },
    ]
}

const Header = () => {
    const [ activeDropdown, setActiveDropdown ] = useState(null)
  return (
    <div className='flex items-center bg-white h-[5.5rem] py- px-6 z-[100]'>
      <div className='flex items-center gap-6 h-full'>
        <div>
            <img src={Logo} alt="" />
        </div>
        <ul className='flex items-center gap-5 font-[] h-full mt-2'>
            <div
                className="relative h-full"
                onMouseEnter={() => setActiveDropdown("feature")}
                onMouseLeave={() => setActiveDropdown(null)}
            >
                <li className={`flex items-center gap-1 h-full cursor-pointer relative ${activeDropdown ? 'line' : ''}`}>
                Featured <MdKeyboardArrowDown className="text-[1.3rem]" />
                </li>
                {activeDropdown === "feature" && (
                <div className="">
                    <Dropdown columns={dropDowndata.Featured} />
                </div>
                )}
            </div>
            <div
                className="relative h-full"
                onMouseEnter={() => setActiveDropdown("about")}
                onMouseLeave={() => setActiveDropdown(null)}
            >
                <li  className={`flex items-center gap-1 h-full cursor-pointer relative ${activeDropdown ? 'line' : ''}`}>
                    All about the KNLTB<span><MdKeyboardArrowDown className='text-[1.3rem]'/></span>
                </li>
                {activeDropdown === "about" && (
                <div className="">
                    <Dropdown columns={dropDowndata.aboutKNLTB} />
                </div>
                )}
            </div>
            <li>News</li>
            <li>Jubilee 125 years</li>
        </ul>
      </div>

    </div>
  )
}

export default Header
