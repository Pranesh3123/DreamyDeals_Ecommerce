import React, { useState } from 'react'
import Search from './Navbarmain'
import Cart from '../image/cart-outline.svg'
import User from '../image/person-circle-outline.svg'
import Fav from '../image/heart-outline.svg'
import Logo from '../image/Dreamydeals-logos_white.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const[open,setOpen]=useState(false)
  return (
    <div className="nav-container">
          <div className='nleft'>
           <Link className='op' to='.products/1'>Mobiles</Link>
           <Link className='op' to='.products/2'>watchs</Link>
           <Link className='op' to='.products/3'>Home Appliances</Link>
           <Link className='op'to='.products/4'>others</Link>
          </div>
          <img className='logo' src={Logo} alt='logo'></img>
        <div className="navbar">
            <div  className='light'>
                <Link className='op' to=''>Home</Link>
                <Link className='op' to=''>About</Link>
                <Link className='op' to=''>Contact</Link>
                <Link className='op' to=''>Stores</Link>
              <img  className='img' src={Cart} alt='cart' onClick={() => setOpen(!open)}/><span className='count'></span>
              <img  className='img' src={Fav} alt='fav'/>
              <img  className='img'  src={User} alt='User'/>
            </div>
         </div>
    </div>     
  )
}

export default Navbar;