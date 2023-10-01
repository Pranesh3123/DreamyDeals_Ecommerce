import React from 'react'
import Watch from './03_f7453fd7-db93-42f7-9cc7-0604b836273c_2048x.jpeg'
import Watch1 from './04_369a1132-57b8-4087-81c2-2939586afca7_2048x.jpeg'
import Sys from '../featuredproducts/Productsimages/color_back_green__buxxfjccqjzm_large_2x.jpeg'
import Sys1 from '../featuredproducts/Productsimages/color_front_green__eb8qbnemmre6_large_2x.jpeg'
import Ipad from '../featuredproducts/Productsimages/ipadpro11-digitalmat-gallery-1-202210.png'
import Ipad1 from '../featuredproducts/Productsimages/ipadpro11-digitalmat-gallery-3-202210.png'
import Delete from './trash-sharp.svg'
import './Cart.css'

const Cart = () => {

  const data=[
    {
      id:1,
      img:Watch,
      img1:Watch1,
      title:"Amazfit",
      desc:"AVANT Men's X Running & Training Shoes 100% Pure Rubber Outsole |Natural Rubber EVA Insole",
      isNew:true,
      OldPrice:"MRP:25,999",
      price:"18,999",
  },
  {
    id:2,
    img: Sys1,
    img1: Sys,
    title:"iMac 24",
    desc:"AVANT Men's X Running & Training Shoes 100% Pure Rubber Outsole |Natural Rubber EVA Insole",
    isNew:true,
    OldPrice:"MRP:1,29,990",
    price:"1,10,000",
},
{
  id:3,
  img: Ipad,
  img1: Ipad1,
  title:"iPad pro",
  desc:"AVANT Men's X Running & Training Shoes 100% Pure Rubber Outsole |Natural Rubber EVA Insole",
  isNew:true,
  OldPrice:" MRP:76,900",
  price:"70000",
},
];
  return (
    <div className='cart'>
        <h1 className='name'>Products in your Cart</h1>
        {data?.map(item =>(
          <div className='item' key={item.id}>
          <img  className='cimg' src={item.img} alt='cart' />
          <div className='details'>
            <h1 className='pname'>{item.title}</h1>
            <p className='desc'>{item.desc}</p>
          <div className='cprice'>{item.OldPrice}<br/>1 X ₹{item.price}</div>
          </div>
          <img  className='delete' src={Delete} alt=" "/>
          </div>
        ))} 
        <div className='total'>
          <span className='cdeatails'>TOTAL</span>
          <span className='cdeatails'>
            {data?.map(item =>(
             <div> {item.price}</div>
            ))}
          </span>
        </div>
        <button className='cbut'>PROCEED TO CHECKOUT </button><br/>
        <button className='rest'>Reset Card</button>
    </div>
  )
}

export default Cart