import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
  const[name,setName]=useState("");
  const[desc,setDesc]=useState("");
  const[price,setPrice]=useState("");
  const[category,setCategory]=useState("");
  const[image,setImage]=useState(null);

  const history=useNavigate();

  const {id}=useParams();
  const loadProducts=async()=>{

    const {data}=await axios.get(`http://127.0.0.1:8000/api/${id}/`)
    console.log(data)
  



  }

  useEffect(()=>{
     loadProducts()
  },[])


  return (
    <div>{name}</div>

  )
}


export default UpdateProduct;