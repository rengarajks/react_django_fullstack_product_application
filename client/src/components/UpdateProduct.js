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
    setImage(data.image)
    setName(data.name)
    setPrice(data.price)
    setCategory(data.category)
    setDesc(data.desc)

  



  }

  useEffect(()=>{
     loadProducts()
  },[])


  return (
    <>

    <div>Update product</div>
    <div className=''>


      <div className='form-group'>
       <img src={image}/><p>Select image to update</p>
        <input 
        type='file'
        placeholder='Image' 
        className='form-control form-control-lg' 
        src={image} 
        onChange={(e)=>setImage(e.target.files[0]) }/>
      </div>

      <div className='form-group'>
        <input 
        type='text'
        placeholder='Name' 
        className='form-control form-control-lg' 
        value={name} 
        onChange={(e)=>setName(e.target.value) }/>
      </div>

      <div className='form-group'>
        <textarea 
        type='text'
        placeholder='Description' 
        className='form-control form-control-lg' 
        value={desc} 
        onChange={(e)=>setDesc(e.target.value) }/>
      </div>

      <div className='form-group'>
        <input 
        type='text'
        placeholder='Price' 
        className='form-control form-control-lg' 
        value={price} 
        onChange={(e)=>setPrice(e.target.value) }/>
      </div>

      <div className='form-group'>
        <input 
        type='text'
        placeholder='Category' 
        className='form-control form-control-lg' 
        value={category} 
        onChange={(e)=>setCategory(e.target.value) }/>
      </div>

      <button className='btn btn-success' >Update</button>


    </div>
    </>

  )
}


export default UpdateProduct;