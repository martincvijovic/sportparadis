import React from 'react'
import { Footer, Mainheader, Hero, Latestnews, Usefullinks, Partners} from '../../components/index'

const Homepage = () => {
  return (
    <div className='relative'>
      <Mainheader />
      <Hero />
      <Latestnews />
      <Usefullinks />
      <Partners />
      <Footer />
    </div>
  )
}

export default Homepage
