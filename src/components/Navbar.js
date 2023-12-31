import React, { useState } from 'react'
import {   useSelector } from 'react-redux';
import Flag from '../image/india-61-692112.png'
import Carts from '../image/cart (1).svg'
import User from '../image/user.svg'
import Fav from '../image/heart.svg'
import Logo from '../image/Dreamydeals-logos_white.png'
import { Link } from 'react-scroll'
import { useNavigate } from 'react-router'
import Cart from './cart/Cart'
import './Navbar.css'
import { useEffect } from 'react'
import Search  from './search/Search'

const Navbar = () => {

  const[Open,setOpen]=useState(false)
  
  const count=useSelector(state=>state.cartState.count);
  const data=useSelector(state=>state.cartState.items);
  const togglecart =  () =>{
    setOpen(!Open);
  }
  const homenavigate=useNavigate();
  const handleClick=()=>{
    homenavigate('/Home');
  }

  useEffect(()=>{
    window.scrollTo(0,0);
  })
  
  return (
    <div className="nav-container">
      <img  className='flag' src={Flag} alt='flag'/>
      <p className='flag1'>IND</p>
          <div className='nleft'>
            <Link className='op' to='/Home' onClick={handleClick}>Home</Link>
            <Link className='op' to='Footer'spy={true} smooth={true} offset={50} duration={500}>About</Link>
            <Link className='op' to='Contact' spy={true} smooth={true} offset={-50} duration={500}>Contact</Link>
            <Link className='op' to='Product' spy={true} smooth={true} offset={-50} duration={500}>Stores</Link>
          </div>
          <img className='logo' src={Logo} alt='logo'/>
        <div className="navbar">
            <div  className='light'>
              <Search  className='op'/>
              <img  className='img' src={Fav} alt='fav'/>
              <img  className='img'  src={User} alt='User'/>
              <div className='carticon' onClick={togglecart}>
              <img  className='img' src={Carts} alt='cart'/><span className='count'>{count}</span>
              </div>
            </div>
         </div>
         {Open && <Cart/>}
    </div>     
  )
}

export default Navbar;