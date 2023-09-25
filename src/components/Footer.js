import React from 'react'
import payment from '../image/payment.png';
import Logo from '../image/Dreamydeals-logos_black.png'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
            <div className='items'>
             <h1>Categories</h1>
             <span>New Arrivals</span>
             <span>Accessories</span>

            </div>
            <div className='items'>
             <h1>Links</h1>
             <span>FAQ</span>
             <span>Pages</span>
            </div>
            <div className='items'>
                <h1>About</h1>
                <span>
                Discover cutting-edge electronic products that elevate your lifestyle. 
                Explore our collection of gadgets, devices, and accessories, 
                designed to bring convenience and innovation to your fingertips.Upgrade your tech game today!.
                </span>
            </div>
            <div className='items'>
                <h1>Content</h1>
                <span>
                Explore a wide range of top-tier electronic products in our ecommerce store. 
                From state-of-the-art, we offer unbeatable deals and swift shipping. 
                Elevate your tech lifestyle today!.
                </span>
            </div>
        </div>
        <div className='bottom'>
             <img  className='logo' src={Logo} alt='logo'/><h1 className='copyrights'>© copyrights 2023.All Rights Reserved</h1>
            <img  className='logo' src={payment} alt='payment'></img>
        </div>
    </div>
  )
}

export default Footer