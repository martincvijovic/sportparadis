import React from 'react'
import { Mainheader, Footer, Usefullinks, Partners } from '../../components'
import Latestnews from '../../components/Latestnews/Latestnews'


const News = () => {
  return (
    <div>
      <Mainheader />
      <section>
        <Latestnews />
      </section>
      <section><Usefullinks /></section>
      <section><Partners /></section>
      <section><Footer /></section>
    </div>
  )
}

export default News
