import React from 'react'
import '../Navbar.css'
import { NavLink } from 'react-router-dom'

function ProductNav(){

    return(
        <div className="navbar">
           <div className="organics">
            <h1>VegMart</h1>
            </div> 
            <div className="nav-components">
                
            <ul>
                <li>
                    <NavLink to="/">HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/products">PRODUCTS</NavLink>
                </li>
                <li>
                    <NavLink to="/carts">CART</NavLink>
                </li>
            </ul>  
            </div>
        </div>
    )

}

export default ProductNav;