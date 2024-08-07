import React from 'react'
import './header.scss'
import cart from "../../assests/cart.png"
import inr from "../../assests/inr.png"
import { useState,useEffect } from 'react'
import {useNavigate,useParams} from 'react-router-dom'
function Header({toggle}) {
    const [dropShow,setDropShow]=useState("none")
    const [cartdata,setcartData]=useState([{}])
    const navigate=useNavigate()
    
    console.log(toggle)
    const dropClick=()=>{
       if(dropShow=="none"){
        setDropShow("block")
        fetchlocalstore()
       }else{
        setDropShow("none")
       }
    }
    const handleNavigate = (id) => {
        navigate(`/products/${id}`);
      };
      const backTOhome=()=>{
        navigate('/')
      }
      const fetchlocalstore=()=>{
        const cartData=JSON.parse(localStorage.getItem('cart'))
              // setcartData(cartData)
              let CartArray=[]
               CartArray.push(cartData)
               setcartData(CartArray)
             // console.log(cartData)
      }
  return (
    <div  style={{backgroundColor:!toggle?"white":""}} className='headerBand'>
     <div style={{position:!toggle?"static":""}} className='navbar'>
        <h4>LifeCart</h4>
        <ul className={`${!toggle?'blackFont':''}`} >
            <li onClick={backTOhome}>Home</li>
            <li  onClick={()=>handleNavigate('All')}>ALL</li>
            <li onClick={()=>handleNavigate('jeans')}>JEANS</li>
            <li onClick={()=>handleNavigate('Shirts')}>T-SHIRTS</li>
            <li onClick={()=>handleNavigate('tops')}>TOPS</li>

        </ul>
        <div className='navbar_right_option'>
            <img src={inr}/>
            <div onClick={dropClick} className='cart_box'>
            <img src={cart}/>
            <div style={{display:`${dropShow}`}} className='cart_dropDown'>
                {cartdata.map((e)=>{
                    return <div>{e.name}</div>
                })}
            </div>
            </div>
        </div>
     </div>
   <div  className={`bgHDpic ${!toggle ? 'active-class' : ''}`}>
    <img src='https://png.pngtree.com/thumb_back/fh260/background/20230512/pngtree-dress-shop-offering-in-a-red-and-orange-color-fashion-showroom-image_2505499.jpg'/>
   </div>
    </div>
  )
}

export default Header