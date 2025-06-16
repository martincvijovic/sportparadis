import React from 'react'
import './App.css'
import { Homepage, Clubs, Clubdetails, Discover, Download, Eventdetails, Activities, Reserve, News } from './pages/index'
import { Admin, Matches, Tournaments, Calender, History } from './admin/pages/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='clubs' element={<Clubs />}/>
          <Route path='discover' element={<Discover />}/>
          <Route path='download' element={<Download />}/>
          <Route path='news' element={<News />}/>
          <Route path='event/:id' element={<Eventdetails />}/>
          <Route path='clubs/:id' element={<Clubdetails />}/>
          <Route path='clubs/:id/activities' element={<Activities />}/>
          <Route path='clubs/:id/reserve' element={<Reserve />}/>
          <Route path='admin' element={<Admin />}>
            <Route index element={<Matches />}/>
            <Route path='tournament' element={<Tournaments />}/>
            <Route path='history' element={<History />}/>
            <Route path='calender' element={<Calender />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
