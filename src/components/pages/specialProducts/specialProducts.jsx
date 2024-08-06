import React from 'react'
import { useParams } from 'react-router-dom';
import "./specialProducts.scss"
import Cards from '../../cards/cards';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
function PecialProducts() {
    const [data,setData]=useState([])
    const [myparams,setmyparams]=useState('jeans')
    const {id} = useParams();
    const setPARAM=()=>{
        console.log(id)
        setmyparams(id)
        if(id=="All"){
        fetchall()
        }else {
            fetchIDdata(id)

        }
    }

    const fetchIDdata=(id)=>{
        console.log("ssss",id)
         axios.get(`http://localhost:5000/${id}`).then((e)=>setData(e.data))
    }
 const  fetchall=()=>{
         
      const axiosdata= axios.get('http://localhost:5000').then((e)=>setData(e.data))
}
   

    useEffect(()=>{
        setPARAM()
    },[id])

  return (
    <div className='product_box'>
        {data.map((el)=>{
           return(<Cards cardData={el}/>)
        })}
     
    </div>
  )
}

export default PecialProducts