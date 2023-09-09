import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9wb7eaa', 'template_i7mx8un', form.current, 'dErtVBnCABS1SftK3')
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className='container contact__container' >
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>warutniy@gmail.com</h5>
            <a href='mailto:dummyegator@gmail.com' target='_blank'>Send a message</a>
          </article>

          
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>Call Me</h4>
            <h5>065-952-6462</h5>
            {/* <a href='#' target='_blank'>Send a message</a> */}
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail} >
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required ></textarea>
          <button type="submit" className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact