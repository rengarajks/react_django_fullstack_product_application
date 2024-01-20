import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ShowProducts() {

  const[products,setProducts]=useState([]);

  const getProducts=async()=>{

    const response=await axios.get('http://localhost:8000/api/')
    console.log(response.data)
    setProducts(response.data)

  }

  useEffect(()=>{

    getProducts()

  },[])

  return (
    <>
    <h1>Show all products</h1>
    {
      products.map((product,index)=>(
        
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
         {product.desc}
        </Card.Text>
        <Button variant="primary">Check</Button>
      </Card.Body>
    </Card>
          
      ))
    }
    </>
    

  )
}

export default ShowProducts;