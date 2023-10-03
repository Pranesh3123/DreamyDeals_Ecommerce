import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './ProductSlider.css'
import './ProductDate'
import ProductDate from './ProductDate';
import { useNavigate } from 'react-router-dom'
const ProductSlider = () => {
  const navigate = useNavigate();
  const handleClick =()=>{
    navigate('/Products');
  };
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000},
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024},
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div  className='pslider'>
      <div className='ptitl'>
        Find The Deals
      </div>
      <Carousel  className='carousel' responsive={responsive}>
        {ProductDate.map(items=>(
       <div className='productslider' >
        <div className='cardp'>
        <img className='product--image' src={items.img} alt=''/>
        <h1 className='tilp'>{items.name}</h1>
          <p className='pricep1'>M.R.P:{items.price}</p>
          <p className='pricep'>Price:{items.price1}</p>
          <p className='prip'>DESCRIPTION<br/>{items.description}</p>
          <p>
            <button className='butp' onClick={handleClick}>Add To Card</button>
          </p>
          </div>
       </div>
       ))}
      </Carousel>
    </div>
  )
}

export default ProductSlider