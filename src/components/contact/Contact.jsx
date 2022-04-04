import React, {userEffect, useState} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jwqp99x', 'template_4outh1o', form.current, 'm9rLiLonB7dJoMWYk')
    
    e.target.reset(); //reset the message value field
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Kalyan_Mishra</h5>

            <a href="mailto:kalyanjimishra692@gmail.com" target="_blank">Send a msg</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Kalyan_Mishra</h5>

            <a href="https://m.me/TheKalyanMishra" target="_blank">Send a msg</a>
          </article>


          {/* <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>

            <a href="https://wa.me/+917643942357" target="_blank">Send a msg</a>
          </article> */}
        </div>

       {/*End of contact option*/}
        <form ref={form} onSubmit={sendEmail}>  {/*onsubmit call a fun*/}
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message'  required></textarea>
          <button type='submit' class='btn btn-primary' >Send Message</button>
        </form> 

      </div>
    </section>
  )
}

export default Contact