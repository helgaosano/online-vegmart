import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaSkype } from "react-icons/fa"
import '../App.css'

function Footer() {

    return (
        <div className='footer-section1'>
            <div className='footer-section2'>
            <h1>PARTNERSHIP</h1>
                <ul> 
                   <li>Websites</li> 
                   <li>Social media</li>
                   <li>blogs</li>
                </ul>

                <h1>OUR BRANCHES</h1>
                <ul>
                   <li>Nairobi</li> 
                   <li>Malindi</li>
                   <li>Naivasha</li>
                </ul>
                <br/>
                <h1>CONTACT US</h1>
                <ul>
                   <li>+2547 002 000 999</li> 
                   <li>Keystone Park Riverside, Nairobi</li>
                   <li>www.vegmartonline.org</li>
                </ul>
            </div>
            <div className='footer-section3'>
                <h1>Created by: <span>Tania Osano</span> AllRightsReserved @2022</h1>
            </div>
            <section className="icons">
          <button>
            <FaFacebook/> Facebook
            </button>
            
            <button>
            <FaInstagram/> Instagram
            </button>
            
            <button>
            <FaLinkedin/> Linkendin
            </button>
            
            <button>
            <FaTwitter/> Twitter
            </button>
            <button>
            <FaSkype/> Skype
            </button>
            </section>
        </div>
    )

}

export default Footer;