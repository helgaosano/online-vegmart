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
       <div className="super-container">
               <div className="contact-header">
                   {/* <h1>Contact Us</h1> */}
                   <h2 className="new-title">Talk to Us</h2>
               </div>
           {/* <div className="contact-container"> */}

               <form ref={form} onSubmit={sendEmail} className="form">
                    <label>Your Name</label>
                   <input type="text" placeholder="Your Name" name="your_name" required/>
                   <label>Email</label>
                   <input type="email" placeholder="Email" name="email" required/>
                   <label>Phone Number</label>
                   <input type="text" className="last-input" placeholder="Phone" name="phone" required/>
                   <textarea type="text" name="your_message" cols="30" rows="10" placeholder="YOUR MESSAGE"></textarea>
                   <div className="message-btn">
                       <button type="submit" ><b>SEND</b></button>
                   </div>
               </form>
           </div>
       {/* </div> */}
   </section>
   </>
  )
}

export default Contact;
