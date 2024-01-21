import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const[name,setName]=useState();
  const[desc,setDesc]=useState();
  const[price,setPrice]=useState();
  const[category,setCategory]=useState();
  const[image,setImage]=useState();
  const history=useNavigate();

  async function AddProd(){
    let formfield=new FormData();

    formfield.append('name',name)
    formfield.append('desc',desc)
    formfield.append('price',price)
    formfield.append('category',category)
    if(image!==null){
      formfield.append('image',image)
    }

    await axios({
      method:'post',
      url:'http://127.0.0.1:8000/api/',
      data:formfield
    }).then((response)=>{
      console.log(response.data);
      history('/')
    })
  }
  
  return (
   <>
    <h1>Add products</h1>
    <div className=''>


      <div className='form-group'>
        <label>Select image to upload</label>
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

      <button className='btn btn-success' onClick={AddProd}>Add product</button>


    </div>
   </>

  )
}


export default AddProduct;