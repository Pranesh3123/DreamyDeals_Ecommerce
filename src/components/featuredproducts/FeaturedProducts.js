import React, { useEffect, useState } from 'react'
import './Featureimg.js'
import Card from '../card/Card.js'
import Featureimg from './Featureimg.js'
import './Featuredproducts.css'
 const FeaturedProducts = ({type}) => {
    return (
        <div className='featuredproducts'>
            <div className='top'>
            <h1 className='titlef'>{type} DEALS</h1>
            </div>
            <div>
                <h1 className='titlp'>Shop smart, save big – explore our top deals now!</h1>
            </div>
            <div className='bottom'>
            {Featureimg.map(item =>(
                <Card item={item} key={item.id}/>
            ))}
            <br/>
            <br/>
            </div>
        </div>

    )
    }
    export default FeaturedProducts