import React from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import About from "../components/About";
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
            </div>
         </div>  
         {/* <div className="link-btn">
          <button onClick={() => {navigate ('/about')} }  type="button" className="btn btn-success mt-3"><b>Get Started</b></button> 
         </div>  */}
        </div>
        <About />
        <Footer/>
        </>
  )
}

export default Home;