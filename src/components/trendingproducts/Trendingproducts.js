import React from 'react'
import Card from '../card/Card'
import Watch from '../featuredproducts/Productsimages/03_f7453fd7-db93-42f7-9cc7-0604b836273c_2048x.jpeg'
import Sys from  '../featuredproducts/Productsimages/color_back_green__buxxfjccqjzm_large_2x.jpeg'
import Ipad from   '../featuredproducts/Productsimages/ipadpro11-digitalmat-gallery-1-202210.png'
import Head from  '../featuredproducts/Productsimages/39bf4d07b80f99034f09db5d7644e036.png'
import Bag from  '../featuredproducts/Productsimages/61vketKNnGL._UL1000_.jpeg'

const Trendingproducts = () => {
    const data=[
        {
            id:1,
            img:Watch,
            title:"Amazfit-GTR 3 pro",
            isNew:true,
            OldPrice:"MRP:₹25,999",
            price:"OFFER:₹18,999",
        },
        {
            id:2,
            img: Sys,
            title:"iMac 24",
            isNew:true,
            OldPrice:"MRP:₹1,29,990",
            price:"OFFER:₹1,10,000",
        },
        {
            id:3,
            img: Ipad,
            title:"iPad pro",
            isNew:true,
            OldPrice:" MRP:₹76,900",
            price:" OFFER:₹70000",
        },
        {
            id:4,
            img: Head,
            title:"Sony INZONE H9",
            isNew:true,
            OldPrice:" MRP:₹27,900",
            price:" OFFER:₹25,000",
        },
        {
            id:5,
            img:Bag,
            title:"BANGE BACKPACK",
            isNew:true,
            OldPrice:" MRP:₹6,999",
            price:" OFFER:₹3,799",
        },
    ];
  return (
    <div className='trending'>
        <div className='top'>
            <h1> Trending Products</h1>
            <p className='top'>
            Discover cutting-edge products that elevate your lifestyle. 
            Explore our collection of gadgets, devices, and accessories, 
            designed to bring convenience and innovation to your fingertips. 
            Upgrade your tech game today!.
            </p>
            </div>
            <div className='bottom'>
            {data.map(item =>(
                <Card item={item} key={item.id}/>
            ))}
            </div>
    </div>
  )
}

export default Trendingproducts