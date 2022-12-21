import React from "react";
import "../Navbar.css"
import { NavLink} from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navbar(){

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
                    <AnchorLink to="/components/about">About</AnchorLink>
                </li>
               
                <li>
                    <NavLink to="/components/login">Login</NavLink>
                </li>
            </ul>  
            </div>
            
        </div>
    )

}

export default Navbar;