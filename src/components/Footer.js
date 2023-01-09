import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaSkype, FaHome, FaPhoneAlt, FaEnvelope } from "react-icons/fa"
import '../App.css'

function Footer() {

    return (
        <div className="dark">
        {/* <div className="container">

            <div className="row py-5 text-white">

                <div className="col-md-3 col-sm-12">
                    <h4 className="text-warning">VegMart</h4>
                    <p>Your one stop organics store.</p>
                </div>

                <div className="col-md-3 col-sm-12">
                    <h4 className="text-warning">Our Services</h4>
                    <p>About us</p>
                    <p>Return Policy</p>
                    <p>Customer satisfaction</p>
                </div>

                <div className="col-md-3 col-sm-12">
                    <h4 className="text-warning">Quick Links</h4>
                    <p>Our categories</p>
                    <p>Our Products</p>
                    <p>Our Offers</p>
                    <p>Contact Us</p>
                </div>
                <div className="col-md-3 col-sm-12">
                    <h4 className="text-warning">Contact Us</h4>
                    <FaHome className="me-4" /> West End Place, Nairobi. <br/>
                    <FaPhoneAlt className="me-4" /> +(254) 30 6050190 <br />
                    <FaEnvelope className="me-4" /> info@vegmart.co.ke <br />    
                </div>
            </div>

            <p className="text-white pb-5">Created by: <span>Tania Osano</span> @All Rights Reserved 2022 <br />
                <FaFacebook className='text-white me-2 '/> 
                <FaInstagram className='text-white me-2'/>
                <FaLinkedin className='text-white me-2'/> 
                <FaTwitter className='text-white me-2'/>
                <FaSkype className='text-white me-2'/>
            </p>
            
        </div> */}



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
                <FaHome className="info" /> West End Place, Nairobi. <br/>
                <FaPhoneAlt className="info" /> +(254) 792 596040 <br />
                <FaEnvelope className="info" /> info@vegmart.co.ke <br />    
            </div>
        </div>

         <div className="footer-end">
            <div className="copyright">            
                <p > <b>Tania Osano</b> @ All Rights Reserved 2023</p>
            </div>
            
            <div className="icons">
                <FaFacebook /> <span></span>
                <FaInstagram /> <span></span>
                <FaLinkedin /> <span></span>
                <FaTwitter /> <span></span>
                <FaSkype /> <span></span>
            </div>
        </div>

    </div> 
       

    </div>

    )

}

export default Footer;