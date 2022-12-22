import React from 'react'

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
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/products">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/carts">Cart</NavLink>
                </li>
            </ul>  
            </div>
        </div>
    )

}

export default ProductNav;