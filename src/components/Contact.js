import React, { useRef } from 'react'
import '../Contact.css'
import Footer from './Footer'
import emailjs from '@emailjs/browser'
import Navbar from './Navbar'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_yzkis55', 
        'template_u4exfgb',
         form.current, 
         'WNtk1xCDaDETitO-W')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
      };


  return (
    <>
    <Navbar/>
    <section>
        <div className="contact-container">
            {/* <div className="header">
                <h2 className="new-title">Contact Us</h2>
            </div> */}

            <div className="contact-image">
                <img src="" alt="contact image"></img>
            </div>

            <form ref={form} onSubmit={sendEmail} className="form">
            <div className="location">
                    <h4>LOCATION: Nairobi, Kenya: TEL +2547306050190</h4>
                </div>

                <label htmlFor="your_name">YOUR NAME</label>
                <input type="text" placeholder="Your Name" name="your_name" required/>
                <label htmlFor="email">EMAIL</label>
                <input type="email" placeholder="Email" name="email" required/>
                <label htmlFor="phone">PHONE</label>
                <input type="text" placeholder="Phone" name="phone" required/>
                <textarea type="text" name="your_message" cols="30" rows="10" placeholder="YOUR MESSAGE"></textarea>
                <div className="message-btn">
                    <button type="submit" ><b>SEND</b></button>
                </div>
            </form>

        </div>
    </section>
    <Footer/>
    </>
  )
}

export default Contact;
