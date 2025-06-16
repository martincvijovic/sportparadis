import React from 'react'
import Tennisgirl from '../assets/tennisgirl.webp'
import Padelman from '../assets/padelman.webp'

const sportData = [
    {id: 1, sport: 'Tennis', image: Tennisgirl, details: 'Tennis is big in the Netherlands. More than a million people regularly play tennis and almost 630,000 of them are members of a KNLTB association. Whether you are a man or a woman, rich or poor, blond or dark, young or old, fit or disabled, tennis is for everyone. Tennis is fun and offers sufficient challenge. Even if you are not a top talent, you can have a lot of fun on the tennis court. Above all, tennis is a sport that you can do your whole life. The Netherlands Tennis Country. Everyone participates. Are you participating too?'},
    {id: 2, sport: 'Padel', image: Padelman, details: 'Padel is the fastest growing sport in the Netherlands. More and more people discover how much fun padel is and become addicted. Padel is surprising, because the ball always goes a little differently than you expect. In the cage you have to be prepared for everything. Just when you think you are defeated, you unexpectedly get a second chance, for example with the help of the walls. But the fence of the cage also plays a part in the game and you can even play the ball back outside the cage. There are always long and spectacular rallies in every match. In other words: Expect the Unexpected!'}
]

const Tennisandpadelinfo = () => {
  return (
    <ul className='flex flex-wrap gap-4 md:gap-0 md:flex-nowrap'>
      {sportData.map((data, index) =>(
        <li key={index} 
        style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${data.image})`,
        }}
        className={`text-white pl-10 p-2 pt-20 bg-cover bg-center bg-no-repeat w-full md:w-3/5`}>
            <p className='text-[3rem] font-[800]'>{data.sport}</p>
            <p className='text-[1rem]'>{data.details}</p>
        </li>
      ))}
    </ul>
  )
}

export default Tennisandpadelinfo
