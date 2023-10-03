import React from 'react'
import './Productcategories.css'
import Happ from './productcategoriesimg/65667746c8d6bab69017f26cb6202df7 (1).jpeg'
import List from '../list/List'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../footer/Footer'
import Contact from '../contact/Contact'

const Productcategories = () => {
    const catId=parseInt(useParams().id)
    const [maxPrice,setMaxPrice]=useState(1000)
    const [sort,setSort]=useState(null)
  return (
<div className='product'>
    <Navbar/>
    <div className='products'>
        <div className='left'>
            <div className='filteritem'>
                <h2>Product Categories</h2>
                <div className='inputitem'>
                    <input type='checkbox' id='1' value={1}/>
                    <label htmlFor='1'> Phone</label>
                </div>
                <div className='inputitem'>
                    <input type='checkbox' id='2' value={1}/>
                    <label htmlFor='2'> Watch</label>
                </div>
                <div className='inputitem'>
                    <input type='checkbox' id='3' value={1}/>
                    <label htmlFor='3'> Headphone</label>
                </div>
                <div className='inputitem'>
                    <input type='checkbox' id='4' value={4}/>
                    <label htmlFor='4'> TV</label>
                </div>
                <div className='inputitem'>
                    <input type='checkbox' id='5' value={5}/>
                    <label htmlFor='5'> Bags</label>
                </div>
                <div className='inputitem'>
                    <input type='checkbox' id='6' value={6}/>
                    <label htmlFor='6'> Playstation</label>
                </div>
                <div className='inputitem'>
                    <input type='checkbox' id='7' value={7}/>
                    <label htmlFor='7'> Bicycle</label>
                </div>
                <div className='inputitem'>
                    <input type='checkbox' id='8' value={8}/>
                    <label htmlFor='8'> Home appliances</label>
                </div>
            </div>
            <div className='filteritem'>
                <h2>Filter by price</h2>
                <div className='inputitems'>
                    <span>0</span>
                    <input type='range' min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)}/>
                    <span>{maxPrice}</span>
                </div>
            </div>
            <div className='filteritem'>
               <h2>Sort by</h2>
               <div className='inputitem'>
                <input type='radio' id='asc' value='asc' name='price' onChange={e => setSort("asc")}/> 
                <label htmlFor='asc'> LowPrice</label>
               </div>
               <div className='inputitem'>
                <input type='radio' id='desc' value='desc' name='price'  onChange={e => setSort("desc")}/> 
                <label htmlFor='desc'> HighPrice</label>
               </div>
            </div>
        </div>
        <div className='right'>
            <img className='catimg' src={Happ} alt='Happ'></img>
            <div className='container'>
            </div>    
            <List  catId={catId} maxPrice={maxPrice} sort={sort}/>
        </div>
    </div>
    <Contact/>
    <Footer/>
</div>
  )
}

export default Productcategories