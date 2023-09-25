import React from 'react';
import Watch from './Categoriesimg/G6-New-Smart-Watch-Men-Full-Touch-Screen-Sport-Fitness-Watch-IP68-Waterproof-Bluetooth-For-Android.jpg_ (1).webp';
import Phones from './Categoriesimg/news-1682434257257-9a4b9.jpeg'
import Shoes from './Categoriesimg/asics_blog_hero_desktop_should_i_have_more_than_one_pair_of_running_shoes_092222.jpg'
import TWS from './Categoriesimg/airpods-black-500x500.jpeg'
import Camera from './Categoriesimg/GAS.jpeg'
import Ev from './Categoriesimg/images.jpeg'
import './Categories.css';
import { useNavigate } from 'react-router-dom'
export const Categories = () => {
  const navigate = useNavigate();
  const handleClick =()=>{
    navigate('/productcategories');
  };
  return (
    <div className='categories'>
      <div className='col'>
        <div className='row'>
          <img  className='imgc'src={Watch} alt='watch'></img>
          <button className='cbtn' onClick={handleClick}>Explore</button>
        </div>
        <div className='row'>
        <img className='imgc' src={Shoes} alt='watch'></img>
          <button className='cbtn' onClick={handleClick}>Explore</button>
        </div>
      </div>
      <div className='col'>
        <div className='row'>
        <img className='imgc' src={Phones} alt='phone'></img>
          <button className='cbtn' onClick={handleClick}>Explore</button>
        </div>
        <div className='row'>
        <img className='imgc' src={Camera} alt='phone'></img>
          <button className='cbtn' onClick={handleClick}>Explore</button>
        </div>
      </div>
      <div className='col'>
        <div className='row'>
          <div className='col'>
            <div className='row'>
            <img className='imgc' src={TWS} alt='tws'></img>
             <button className='cbtn' onClick={handleClick}>Explore</button>
            </div>
          </div>
          <div className='row'>
          <img className='imgc' src={Ev} alt='tws'></img>
             <button className='cbtn' onClick={handleClick}>Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};