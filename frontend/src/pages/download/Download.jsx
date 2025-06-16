import React from 'react'
import { Mainheader, Partners, Footer, SportVirtual, Meetandplayapp, Usefullinks } from '../../components'

const Download = () => {
  return (
    <div>
      <Mainheader />
      <section><SportVirtual /></section>
      <section><Meetandplayapp /></section>
      <section className='border-y-[1px] border-[#ccc] mt-10'><Usefullinks /></section>
      <section> <Partners /></section>
      <section><Footer /></section>
    </div>
  )
}

export default Download
