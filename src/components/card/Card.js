import React from 'react';
import './Card.css';

const Card = ({ item }) => {
  return (
      <div className='card'>
        <div className='image'>
          {item.isNew && <button className='new'>New Arrival</button>}
          <img src={item.img} alt={item.title} className='firstimg' />
          <img src={item.img1} alt={item.title} className='secondimg' />
        </div>
        <h4>{item.title}</h4>
        <div className='price'>
          <h4>{item.OldPrice}</h4>
          <h4>{ item.price}</h4>
        </div>
      </div>
  );
}

export default Card;
