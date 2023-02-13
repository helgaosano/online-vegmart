import React, { useEffect, useState } from 'react'
import '../App.css'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'

function Cart(){
  const { id } = useParams();
  const [grocery, setGrocery] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((r) => r.json())
      .then((grocery) => setGrocery(grocery));
  }, []);
  
    return (
      <>
      <Navbar />
      <section>
      <div className="container">
      {/* <h2>View your cart</h2> */}

        <div className='cart-container'>
          <h3>Your cart is currently empty</h3>
          <h4>Return home</h4>
          
          <img src={grocery.image_url}/>
          <p>{grocery.description}</p>
        </div>
      </div>
      </section>
      
      </>
    )
  
}

export default Cart