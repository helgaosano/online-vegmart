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
                <li>
                    <NavLink to="/"><b>HOME</b></NavLink>
                </li>
                <li>
                    <NavLink to="/products">PRODUCTS</NavLink>
                </li>
                <li>
                    <NavLink to="/components/contact">CONTACT</NavLink>
                </li>
                <li>
                     <NavLink to="/components/login">LOGIN</NavLink>
                </li>
            </ul>  
            </div>
            
        </div>
    )

}

export default Navbar;