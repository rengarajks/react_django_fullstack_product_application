import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {

  const[productData,setProductData]=useState("");
  const {id}=useParams();

  const gettingData=async()=>{
    const {data}=await axios.get(`http://127.0.0.1:8000/api/${id}/`)
    console.log(data)
    setProductData(data)
  }

  useEffect(()=>{

    gettingData();

  },[])


  return (
    <>
    <div>Product Details</div>
    <div className='single-product-info'>
       <h2>{productData.name}</h2>
       <img src={productData.image}  />
       <p className='price-font'>Rs.{productData.price}/.</p><p>{productData.category}</p>
       <p>{productData.desc}</p>
       <Link className='btn btn-primary m-2' to={`/${productData.id}/update`} >Update</Link>
       <Link className='btn btn-danger m-2' >Delete</Link>
      
    </div>

   
    </>

  )
}

export default ProductDetail;