import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import '../ProductCard.css'

function ProductCard({product, handlerGetClickedItem}){

  let navigate = useNavigate()

  return (
    <>
    <div className='card'>
      <img src={product.image_url}/>
      <div className='details'>
        <h3>{product.name}</h3>
        <h6>Quantity: {product.quantity}</h6>
        <h6>Price: {product.price}</h6>
        <h6>Description: {product.description}</h6>
        <Button onClick={() => {handlerGetClickedItem(); navigate (`/carts`)}}  type="button" className="add-button">Add to cart</Button> 
      </div>
    </div>
    </>
  ) 
  
}

export default ProductCard;