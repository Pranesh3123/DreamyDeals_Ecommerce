import React from 'react';
import Watch from './Categoriesimg/G6-New-Smart-Watch-Men-Full-Touch-Screen-Sport-Fitness-Watch-IP68-Waterproof-Bluetooth-For-Android.jpg_ (1).webp';
import Phones from './Categoriesimg/news-1682434257257-9a4b9.jpeg'
import Shoes from './Categoriesimg/premium_photo-1682435561654-20d84cef00eb.jpeg'
import TWS from './Categoriesimg/airpods-black-500x500.jpeg'
import Camera from './Categoriesimg/GAS.jpeg'
import Ev from './Categoriesimg/the-weel-ev-b-is-a-self-driving-ev-cosplaying-as-an-e-bike.jpeg'
import TV from './Categoriesimg/4299128d-1d39-445b-be7e-46cdf76b9efb-1.jpeg'
import './Categories.css';
import { useNavigate } from 'react-router-dom'
export const Categories = () => {
  const navigate = useNavigate();
  const handleClick =()=>{
    navigate('/productcategories');
  };
  return (
    <div className='categories' id='cat'>
      <div className='head'>AVAILABLE PRODUCTS</div>
      <div className='head1'>Stay connected, stay ahead. Explore our world of electronic innovation</div>
    <div className='col'>
      <div className='row'>
        <img className='imgc' src={Watch} alt='watch' />
        <p className='titlep'>Watch</p>
        <div className='overlay'></div>
        <div className='cbtn'>
          <button className='cbt' onClick={() => handleClick('Watch')}>Explore</button>
        </div>
      </div>
      <div className='row'>
        <img className='imgc' src={Shoes} alt='shoes' />
        <p className='titlep'>Shoes</p>
        <div className='overlay'></div>
        <div className='cbtn'>
          <button className='cbt' onClick={() => handleClick('Shoes')}>Explore</button>
        </div>
      </div>
    </div>
    <div className='col'>
      <div className='row'>
        <img className='imgc' src={Phones} alt='phone' />
        <p className='titlep'>Phones</p>
        <div className='overlay'></div>
        <div className='cbtn'>
          <button className='cbt' onClick={() => handleClick('Phones')}>Explore</button>
        </div>
      </div>
      <div className='row'>
        <img className='imgc' src={Camera} alt='camera' />
        <p className='titlep'>Camera</p>
        <div className='overlay'></div>
        <div className='cbtn'>
          <button className='cbt' onClick={() => handleClick('Camera')}>Explore</button>
        </div>
      </div>
      <div className='row'>
        <img className='imgc' src={TV} alt='TV' />
        <p className='titlep'>TV</p>
        <div className='overlay'></div>
        <div className='cbtn'>
          <button className='cbt' onClick={() => handleClick('TV')}>Explore</button>
        </div>
      </div>
    </div>
    <div className='col'>
      <div className='row'>
        <img className='imgc' src={TWS} alt='tws' />
        <p className='titlep'>TWS</p>
        <div className='overlay'></div>
        <div className='cbtn'>
          <button className='cbt' onClick={() => handleClick('TWS')}>Explore</button>
        </div>
      </div>
      <div className='row'>
        <img className='imgc' src={Ev} alt='ev' />
        <p className='titlep'>EV</p>
        <div className='overlay'></div>
        <div className='cbtn'>
          <button className='cbt' onClick={() => handleClick('EV')}>Explore</button>
        </div>
      </div>
    </div>
  </div>  
  );
};