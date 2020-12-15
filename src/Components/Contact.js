import React, { useState, } from 'react';
import ContactFrom from './ContactForm'
import github from '../images/githublogo.png'
import email from '../images/email.png'
import medium from '../images/medium.png'
import linkedin from '../images/linkedin.png'



const Contact = () => {


  return (
    <div id="contact-page">
    <div className="contact-container">

    <h3><img src={email} alt="email logo" className="contact-icons" />email: <a href = "mailto:melindadiaz@me.com" > melindadiaz@me.com</a></h3>
    <h3><img src={linkedin} alt="linkedin logo" className="contact-icons" />linkedIn: <a target="_blank" href="https://www.linkedin.com/in/melindadiaz/"> linkedin.com/in/melindadiaz/</a></h3>
    <h3><img src={github} alt="github logo" className="contact-icons" />gitHub: <a href="https://github.com/melindadiaz07" > github.com/melindadiaz07</a></h3>
    <h3><img src={medium} alt="medium logo" className="contact-icons" />blog: <a href="https://melindadiaz-75942.medium.com/" > melindadiaz-75942.medium.com/</a></h3>
    <br /> <br />

    {/* <hr /> */}

    <h3>Or send me a message right here ▾ </h3>
    <ContactFrom />
  


    </div>
    </div>
  )
}

export default Contact;