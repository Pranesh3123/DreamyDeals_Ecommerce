import React from 'react'
import Search from './Navbarmain'
import Cart from '../image/cart-outline.svg'
import User from '../image/person-circle-outline.svg'
import Fav from '../image/heart-outline.svg'
import Logo from '../image/Dreamydeals-logos_black.png'
import Slider from 'react-slick'
const Navbar = () => {
  return (
    <div>
        <div className="nav-container">
        <img className='logo' src={Logo} alt='logo'></img>
        <Search/>
        <nav className="navbar">
            <ul>
              <li className='light'>Home</li>
              <li className='light'>About</li>
              <li className='light'>Contact</li>
              <li className='light'>Stores</li>
              <li><img  className='img' src={Cart} alt='cart'/><span className='count'></span></li>
              <li><img  className='img' src={Fav} alt='fav'/></li>
              <li><img  className='img'  src={User} alt='User'/></li>
            </ul>
        </nav>
        </div>
        <Slider/>
    </div>
  )
}

export default Navbar;