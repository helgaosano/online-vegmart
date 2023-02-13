import React from "react";
import "../Navbar.css"
import { NavLink} from 'react-router-dom'
import { FaShoppingBasket } from "react-icons/fa"
import { TiUser} from "react-icons/ti"



function Navbar(){

    return(
        <nav>
            <div className="nav-container">
            
                <div className="organics">
                    <h1><FaShoppingBasket/></h1>
                    <h2>Vegmart</h2>
                </div> 
                    
                <div className="nav-components">    
                    <ul>
                        <a href="/">Home</a>
                        <a href="/products">Products</a>
                        <a href="/contact">Contacts</a>
                        <a href="/about">Story</a>      
                        <a href="/login">Login</a>  
                    </ul>  
                </div>
            </div>
            
        </nav>
    )

}

export default Navbar;