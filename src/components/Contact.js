import React, { useRef } from 'react'
import '../Contact.css'
// import { useRef } from 'react'
import emailjs from '@emailjs/browser'

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
    <section>
        <div className="contact-container">
            {/* <div className="header">
                <h2 className="new-title">Contact Us</h2>
            </div> */}

            <div className="contact-image">
                <img src="" alt="contact image"></img>
            </div>

            <form ref={form} onSubmit={sendEmail} className="form">
                <label htmlFor="your_name">YOUR NAME</label>
                <input type="text" placeholder="Your Name" name="your_name" required/>
                <input type="email" placeholder="Email" name="email" required/>
                <input type="text" placeholder="Phone" name="PHONE" required/>
                <textarea name="your_message" cols="30" rows="10"></textarea>
                <div className="message-btn">
                    <button type="submit" ><b>SEND</b></button>
                </div>
            </form>

        </div>
    </section>
  )
}

export default Contact;
