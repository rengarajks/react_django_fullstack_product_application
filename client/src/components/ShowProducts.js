import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ShowProducts() {

  const[products,setProducts]=useState([]);

  const getProducts=async()=>{

    const response=await axios.get('http://localhost:8000/api/')
    console.log(response.data)

  }

  useEffect(()=>{

    getProducts()

  },[])

  return (
    <h1>Show all products</h1>
  )
}

export default ShowProducts;