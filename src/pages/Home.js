import React from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Feature from "../components/Feature";
import '../App.css';
import Footer from "../components/Footer";

function Home(){
  
    let navigate=useNavigate();
  return (
        <>
        <Navbar/>
        
        <div className='Home'>
          <div className='text'>
            <div className="tagline">
              <h3>From small organic farms to your table</h3>
              <div className="link-btn">
          <button onClick={() => {navigate ('/about')} }  type="button"><b>Get Started</b></button> 
         </div> 
            </div>
         </div>  
        
        </div>
        <Feature />
        <Footer/>
        </>
  )
}

export default Home;