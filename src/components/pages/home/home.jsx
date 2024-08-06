import React from 'react'
import Cards from '../../cards/cards'
import "./home.scss"
import HomeCards from '../../homeCards/homeCards'
import { useState } from 'react'
import { useEffect } from 'react'
import { cartData } from './dt'

function Home({handel}) {
    const [data,setsata]=useState([])
    useEffect(()=>{
    handel(true)
    setsata(cartData)
    },[])
  return (
    <div className='home_box'>
        
      {data.map((e)=>{return(<HomeCards cardDt={e}/>)})} 
    </div>
  )
}

export default Home