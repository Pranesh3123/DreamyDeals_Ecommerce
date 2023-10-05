import React from 'react';
import Insta from './contactimages/logo-instagram.png';
import Face from './contactimages/logo-facebook.png';
import Tweet from './contactimages/logo-twitter.png';
import Whatsapp from './contactimages/logo-whatsapp.png';
import Mail from './contactimages/mail-open-outline.png';
import './Contact.css'
const Contact = () => {
  return (
    <div className='contact' id='Contact'>
      <div className='wrapper'>
        <span>BE IN TOUCH WITH US:</span>
        <div className='mail'>
          <input type='text' placeholder='Enter your E-mail...' />
          <button className='btn'>Join us</button>
        </div>
        <div className='icons'>
          <img  src={Insta} alt='Instagram' />
          <img src={Face} alt='Facebook' />
          <img src={Whatsapp} alt='WhatsApp' />
          <img src={Tweet} alt='Twitter' />
          <img src={Mail} alt='Mail' />
        </div>
      </div>
    </div>
  );
};

export default Contact;
