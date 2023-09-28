import React, { useState } from 'react'
import Search from './Search'
import Flag from '../image/india-61-692112.png'
import Cart from '../image/cart (1).svg'
import User from '../image/user.svg'
import Fav from '../image/heart.svg'
import Logo from '../image/Dreamydeals-logos_white.png'
import { Link } from 'react-router-dom'
import Home from './Home'
const Navbar = () => {
  const[open,setOpen]=useState(false)
  return (
    <div className="nav-container">
      <img  className='flag' src={Flag} alt='flag'/>
      <p className='flag1'>IND</p>
          <div className='nleft'>
           <Link className='op' to='.products/1'>Mobiles</Link>
           <Link className='op' to='.products/2'>watches</Link>
           <Link className='op' to='.products/3'>Cameras</Link>
           <Link className='op'to='.products/4'>others</Link>
          </div>
          <img className='logo' src={Logo} alt='logo'/>
        <div className="navbar">
            <div  className='light'>
                <Link className='op' to=''>Home</Link>
                <Link className='op' to=''>About</Link>
                <Link className='op' to=''>Contact</Link>
                <Link className='op' to=''>Stores</Link>
              <img  className='img' src={Cart} alt='cart' onClick={() => setOpen(!open)}/>
              <img  className='img' src={Fav} alt='fav'/>
              <img  className='img'  src={User} alt='User'/>
            </div>
         </div>
    </div>     
  )
}

export default Navbar;