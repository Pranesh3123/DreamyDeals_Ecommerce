import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { actions } from '../../store';
import './Products.css'
import Addcard from './Productsimg/cart-outline.svg'
import Navbar from '../Navbar'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import '../productslider/ProductDate'

const Products = () => {
  const location = useLocation();
  const [path,setPath]=useState(1)
  const [quantity,setQuantity]=useState(1);
  const dispatch = useDispatch();
  const items = location.state.items;
  console.log(items);
  const ar =Object.keys(items);
  const handleClick=()=>{
    delete items.img1;
    delete items.price;
    
    const amount=parseInt(items.price1.substring(1).replace(",",''));
    const cartItem={...items,cnt:quantity,total:amount*quantity};
    dispatch(actions.addItem(cartItem));
  }
  useEffect(()=>{
    window.scrollTo(0,0);
  })
  return (
    <div className='product'>
      <Navbar/>
    <div className='products' >
        <div className='pleft'>
            <div className='pimag'>
              <img className='pimg1' src={items[ar[1]]} alt={items[ar[1]]} onClick={()=>setPath(1)}/>
              <img className='pimg1' src={items[ar[2]]} alt={items[ar[2]]} onClick={()=>setPath(2)}/>
            </div> 
            <div className='mainimg'>
                <img src={items[ar[path]]} alt=''/>
            </div>
        </div>
        <div className='pright'>
            <span className='title'>Product:{items[ar[3]]}</span>
            <span className='price'>Price:{items[ar[5]]}</span>
            <p>Description:{items[ar[6]]}</p>
            <div className='quantity'>
              <button className='but' onClick={()=>setQuantity(prev=>prev === 1 ? 1 : prev-1)}><h1>-</h1></button>
              {quantity}
              <button className='but' onClick={()=>setQuantity(prev=>prev+1)}><h1>+</h1></button>
            </div>
            <button className='add' onClick={()=>handleClick(items)}>
                <img  className='add'src={Addcard} alt='add'/>ADD TO CART
            </button>
            <div className='info'>
                <span>Product: {items[ar[3]]}</span>
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