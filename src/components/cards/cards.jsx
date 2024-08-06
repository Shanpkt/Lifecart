import React from 'react'
import './cards.scss'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
function Cards({cardData}) {
    const [flipOver,setFlipOver]=useState(true)
    const navigate=useNavigate()
    const  fliphandel=()=>{
        setFlipOver((prev)=>!prev)
    }
    const handelDetail=(id)=>{
        const topic="detail"
        navigate(`/item/${topic}/${id}`)
    }
  return (
    <div class="product-card " >
       { flipOver && <div className='optionBox'>
            <div className='box_continer_parent'>
                <h4>Size</h4>
             
              <div className='box_continer'>
                {cardData.size.map((el)=>{return(<div className='size_box'>{el}</div>)})}
                
               
              </div>

            </div>
            <div className='box_continer_parent'>
                <h4>Color</h4>
                <div className='box_continer'>
                <div className='size_box'></div>
                <div className='size_box'></div>
                <div className='size_box'></div>
                <div className='size_box'></div>
                </div>
            </div>
            <button className='cartBtn'>Add to Cart</button>
            <h4 onClick={fliphandel}>Close</h4>
        </div>}
        
        <div class="img-container">
            <img onClick={()=>{handelDetail("fabuls")}} src={cardData.img}/>
           </div><div className='detil_Box'>
            <div className='letterBox'>
                <div>
            <p class="brand-name">{cardData.name}</p>
            <p class="product-price">${cardData.price}</p></div>
            </div>
            <img onClick={fliphandel} class="quick-buy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIrgkL7HuAYWjYv17MDwSEKV-I9_pjKmN_Eg&s" alt="Add to cart icon"></img>
            </div>

            </div>
  )
}

export default Cards