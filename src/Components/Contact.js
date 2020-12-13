import React, { useState, } from 'react';
import ContactFrom from './ContactForm'

const Contact = () => {

  // const [formValue, setFormValue] = useState('')

  // const clearForm = () => {
  //   setTimeout(() => document.getElementById("contact-form").reset(), 5000)
  // }

  return (
    <div className="contact-container">

    <h3>email: <a href = "mailto:melindadiaz@me.com" > melindadiaz@me.com</a></h3>
    <h3>linkedIn: <a target="_blank" href="https://www.linkedin.com/in/melindadiaz/"> linkedin.com/in/melindadiaz/</a></h3>
    <h3>gitHub: <a href="https://github.com/melindadiaz07" > github.com/melindadiaz07</a></h3>
    <h3>blog: <a href="https://melindadiaz-75942.medium.com/" > melindadiaz-75942.medium.com/</a></h3>
    <br /> <br />

    {/* <hr /> */}

    <h3>Or send me a message right here ▾ </h3>
    <ContactFrom />
  


      
    </div>
  )
}

export default Contact;