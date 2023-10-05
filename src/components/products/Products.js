import React, { useState } from 'react'
import './Products.css'
import Shoes from './Productsimg/71+KbSB0AGL._UY695_.jpeg'
import Shoes1 from './Productsimg/71ZUFbHzXVL._UY695_.jpeg'
import Addcard from './Productsimg/cart-outline.svg'
import Wishlist from './Productsimg/heart-circle-outline.png'
import Compare from './Productsimg/git-compare-outline.png'
import Navbar from '../Navbar'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import { useEffect } from 'react'
const Products = () => {
    const [selectedimg,setSelectedimg]=useState(0)
    const [quantity,setQuantity]=useState(1);
    const images = [Shoes,Shoes1];

  useEffect(()=>{
    window.scrollTo(0,0);
  })
  return (
    <div className='product'>
      <Navbar/>
    <div className='products'>
        <div className='pleft'>
            <div className='pimag'>
              <img className='pimg1' src={images[0]} alt='shoes' onClick={e => setSelectedimg(0)}/>
              <img className='pimg1' src={images[1]} alt='shoes' onClick={e => setSelectedimg(1)}/>
            </div> 
            <div className='mainimg'>
                <img src={images[selectedimg]} alt=''/>
            </div>
        </div>
        <div className='pright'>
            <span className='title'>Men's running shoes</span>
            <span className='price'>Price:₹799</span>
            <p>AVANT Men's X Running & Training Shoes 100% Pure Rubber Outsole 
               | Natural Rubber EVA Insole 
               | Enhanced Grip for Low Abrasion 
               | Quick Dry Polo Mesh
            </p>
            <div className='quantity'>
              <button className='but' onClick={()=>setQuantity(prev=>prev === 1 ? 1 : prev-1)}><h1>-</h1></button>
              {quantity}
              <button className='but' onClick={()=>setQuantity(prev=>prev+1)}><h1>+</h1></button>
            </div>
            <button className='add'>
                <img  className='add'src={Addcard} alt='add'/>ADD TO CART
            </button>
            <div className='link'>
                <img src={Wishlist} alt='wishlist'/> ADD TO WISHLIST
                <img src={Compare} alt='wishlist'/> ADD TO COMPARE
            </div>
            <div className='info'>
                <span>Vendor: AVANT</span>
                <span>Product: Shoes</span>
                <span>Tag: Men, Women</span>
                <hr className='full'/>
            </div>
            <div className='info'>
            <span>DESCRIPTION</span>
            <hr className='half'/>
            <span>ADDITIONAL INFORMATION</span>
            <hr className='half'/>
            <span>FAQ</span>
            </div>
        </div>
    </div>
    <Contact/>
    <Footer/>
  </div>  
  )
}

export default Products