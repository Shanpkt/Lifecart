import React from 'react'
import "./homeCards.scss"
import {useNavigate} from 'react-router-dom'
function HomeCards({cardDt}) {
 const navigate=useNavigate()
    const handelRout=(e)=>{
         navigate(`/products/${e}`)  
    }
  return (
    <div onClick={()=>handelRout(cardDt.id)} className='homeCards_box'>
      <img src={cardDt.img} />
      <div className='blur_card_details'>
        <h4>{cardDt.id}</h4>
      </div>
    </div>
  )
}

export default HomeCards