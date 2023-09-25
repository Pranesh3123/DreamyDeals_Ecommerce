import React from 'react'
import './List.css'
import Watch from '../featuredproducts/Productsimages/03_f7453fd7-db93-42f7-9cc7-0604b836273c_2048x.jpeg'
import Watch1 from '../featuredproducts/Productsimages/04_369a1132-57b8-4087-81c2-2939586afca7_2048x.jpeg'
import Sys from '../featuredproducts/Productsimages/39bf4d07b80f99034f09db5d7644e036.png'
import Sys1 from '../featuredproducts/Productsimages/a900b53164683e1fc98b8eefb9b6c406.png'
import Ipad from '../featuredproducts/Productsimages/color_back_green__buxxfjccqjzm_large_2x.jpeg'
import Ipad1 from '../featuredproducts/Productsimages/color_front_green__eb8qbnemmre6_large_2x.jpeg'
import Head from '../featuredproducts/Productsimages/ipadpro11-digitalmat-gallery-1-202210.png'
import Head1 from '../featuredproducts/Productsimages/ipadpro11-digitalmat-gallery-3-202210.png'
import {images} from '../featuredproducts/Productsimages/Prouctimg'
import Card from '../card/Card'
const List = () => {
    console.log(images);
    const data=[
        {
            id:1,
            img:Watch,
            img1:Watch1,
            title:"Amazfit-GTR 3 pro",
            isNew:true,
            OldPrice:"MRP:25,999",
            price:"OFFER:18,999",
        },
        {
            id:2,
            img: Sys1,
            img1: Sys,
            title:"iMac 24",
            isNew:true,
            OldPrice:"MRP:1,29,990",
            price:"OFFER:1,10,000",
        },
        {
            id:3,
            img: Ipad,
            img1: Ipad1,
            title:"iPad pro",
            isNew:true,
            OldPrice:" MRP:76,900",
            price:" OFFER:70000",
        },
        {
            id:4,
            img: Head,
            img1: Head1,
            title:"Sony INZONE H9",
            isNew:true,
            OldPrice:" MRP:27,900",
            price:" OFFER:25,000",
        },
    ];
  return (
    <div className='list'>
        {data.map(item =>(
         <Card item={item} key={item.id}/>   
        ))}
    </div>
  )
}

export default List