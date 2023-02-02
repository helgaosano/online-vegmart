import React from "react";
import "../Navbar.css"
import { NavLink} from 'react-router-dom'
import { FaHome } from "react-icons/fa"
import { TiUser} from "react-icons/ti"



function Navbar(){

    return(
        <div className="navbar">
            
           <div className="organics">
            <h1>VegMart</h1>
            </div> 
            
            <div className="nav-components">    
                <ul>
                    <a href="/">Home</a>
                    <a href="/products">Products</a>
                    <a href="/components/contact">Contacts</a>
                    <a href="/components/about">Story</a>      
                    <a href="/components/login">Login</a>  
                </ul>  
            </div>
            
        </div>
    )

}

export default Navbar;