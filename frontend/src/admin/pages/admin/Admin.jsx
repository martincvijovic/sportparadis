import React, { useState, useEffect } from 'react'
import { Adminheader, Adminsidebar } from '../../components'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Mainheader } from '../../../components'
import './admin.css'

const Admin = () => {
  const location = useLocation();
  const [ locate, setLocate ] = useState(location)
  const userEmail = localStorage.getItem('userEmail')

  let headerText = '';
  switch (location.pathname) {
    case '/admin':
      headerText = 'Upcoming matches';
      break;
    case '/admin/tournament':
      headerText = 'Upcoming Tournaments';
      break;
    case '/admin/calender':
      headerText = 'Calender';
      break;
    case '/admin/history':
      headerText = 'History';
      break;
    default:
      headerText = 'Upcoming matches';
  }
  return (
    <div className='layout overflow-x-hidden bg-white h-screen'>
      <div className='border[1px] h-0 border-black lg:h-screen fixed top-[5rem] left-0 bottom-0 lg:w-[300px] w-full'>
       <Adminsidebar />
      </div>
      <div className='w-full'>
          <Mainheader />
          <div><Adminheader headerText={headerText}/></div>
          <div className='lg:ml-[300px]'>{<Outlet />}</div>
      </div>
    </div>
  )
}

export default Admin