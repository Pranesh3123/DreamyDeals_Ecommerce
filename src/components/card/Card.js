import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

const Card = ({ item }) => {
  
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate('/Products',{state:{items:item}});
  }
  return (
      <div className='card'>
        <div className='image'>
          <img src={item.img} alt={item.name} className='firstimg' />
          <img src={item.img1} alt={item.name} className='secondimg' />
          <button className='new' onClick={()=>handleClick(item)}>Buy Now</button>
        </div>
        <h4>{item.name}</h4>
        <div className='price'>
          <h4>M.R.P{item.price}</h4>
          <h4>OFFER{ item.price1}</h4>
        </div>
      </div>
  );
}

export default Card;
