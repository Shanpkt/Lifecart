import React from 'react'
import "./details.scss"
import { useEffect } from 'react'
import {useParams} from 'react-router-dom'

function Details({handel}) {
const p=useParams()
   useEffect(()=>{
     handel(false)
   },[])
  return (
    <div className='detail_box'>
        <div className='Detail_header'>
          <h5>Store / dresses</h5>
          <h4>Caty</h4>
          <h3>Backless Pink Dress</h3>
        </div>
        <div className='detail_image_box'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGzZQVp9vHiKYflIA49y3WBKLoQLA0aXDZwg&s' />
        </div>
        <div className='datil_size_box'>
            <div className='datil_size_box__contins' >
                <h4>Size</h4>
                <div className='size_reprsent_box'></div>
                <div className='size_reprsent_box'></div>
                <div className='size_reprsent_box'></div>
                <div className='size_reprsent_box'></div>
            </div>
        </div>
        <div className='detail_price_box'>
            <h5 className='detail_price_box__priceTag'>Price :</h5>
            <h5 className='detail_price_box__price'>$353</h5>
        </div>
        <button className='addtoCART_BTN'>ADD TO CART</button>
        <p>Soft and Breathable Fabric: Very smooth satin tatting material, with little stretch, makes this a close fitting bodycon dress, also rather comfortable to wear, durable enough for your daily wearing.

Scoop Neck, Spaghrtti Strap, Sleeveless, halter design, back lace-up, A-line style, below the knee midi length, solid sparkly color.

Wonderful Bodycon Partywear: Very stylish and fashionable design. There is no doubt that once wearing this dress, you will be the sparkliest and shiniest one in the crowd.

Attention: Please refer to detailed size chart info before buying</p>
    </div>
  )
}

export default Details