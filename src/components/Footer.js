import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaSkype, FaHome, FaPhoneAlt, FaEnvelope } from "react-icons/fa"
import '../App.css'

function Footer() {

    return (
   
        <div className="container1">

        <div className="footer-section">

            <div className="section2">
                <h4 className="heading">VegMart</h4>
                <p>Your one stop organics store.</p>
            </div>

            <div className="section1">
                <h4 className="heading">Our Services</h4>
                <p>Return Policy</p>
                <p>Customer Satisfaction</p>
                <p>Certified Organics Offers</p>
            </div>

            <div className="section1">
                <h4 className="heading">Quick Links</h4>
                <p>Our categories</p>
                <p>Our Products</p>
                <p>About Us</p>
                <p>Contact Us</p>
            </div>
            <div className="section2">
                <h4 className="heading">Contact Us</h4>
                <FaHome className="info"/> Nairobi, Kenya <br/>
                <FaPhoneAlt className="info"/> +(254) 700 222 0000 <br />
                <FaEnvelope className="info"/> info@vegmart.co.ke <br />    
            </div>
        </div>

         <div className="footer-end">
            <div className="copyright">            
                <p >Created by <b>Tania Osano</b> | All Rights Reserved</p>
            </div>
            
            {/* <div className="icons">
                <FaFacebook /> <span></span>
                <FaInstagram /> <span></span>
                <FaLinkedin /> <span></span>
                <FaTwitter /> <span></span>
                <FaSkype /> <span></span>
            </div> */}
        </div>

    </div>      

    )

}

export default Footer;