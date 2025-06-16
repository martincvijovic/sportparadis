import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import './header.css'


const Adminheader = ({ headerText }) => {
    const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="header static lg:ml-[300px] flex h-[5rem] flex-grow items-start md:items-start lg:items-center justify-between p-[1rem] border-[#CECFDA] border-b-[1px]">
      <div>
        <p className={`text-[1.3rem] font-[600] text-gray-700`}>{headerText}</p>
      </div>
      <div className="headerText flex   items-center space-x-0 md:space-x-4 flex-wrap  ">
        <Link className="cartIcon" to="./cart">
          <div className="relative -z-10">
            <span className="cartNum">g</span>
            <BsCart3 className="text-[1.4rem]" />
          </div>
        </Link>
        <div className="relative">
          <div>
            <p className="font-[500] text-[.95rem] ">ahmadishola@12gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Adminheader