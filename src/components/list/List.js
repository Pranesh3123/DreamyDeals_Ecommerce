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
import Bag1 from '../featuredproducts/Productsimages/61vketKNnGL._UL1000_.jpeg'
import Bag from '../featuredproducts/Productsimages/51iwjAm9P6L._UL1000_.jpeg'
import Shoes from '../featuredproducts/Productsimages/71IAY--t6FL._UY695_.jpeg'
import Shoes1 from '../featuredproducts/Productsimages/71p4xXqQExL._UY695_.jpeg'
import TV from '../featuredproducts/Productsimages/l55m8-a2in-xiaomi-original-imagrzmzm3tvpaww.jpeg'
import TV1 from '../featuredproducts/Productsimages/l50m8-a2in-xiaomi-original-imagrzmzg2kvdbef.jpeg'
import EV from '../featuredproducts/Productsimages/-original-imagg3v3qcfpkcnu.jpeg';
import EV1 from '../featuredproducts/Productsimages/-original-imagg3v3v5sskvhf.jpeg'
import Airpods from '../featuredproducts/Productsimages/61YCXQGqVEL._SX679_.jpeg'
import Aripods1 from '../featuredproducts/Productsimages/61nBzZ6gPxL._SX679_.jpeg'
import Phone from '../featuredproducts/Productsimages/61VfL-aiToL._SX679_.jpeg'
import Phone1 from '../featuredproducts/Productsimages/71Q7QmC1X1L._SX679_.jpeg'
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
        {
            id:5,
            img:Bag,
            img1:Bag1,
            title:"BANGE BACKPACK",
            isNew:true,
            OldPrice:" MRP:₹6,999",
            price:" OFFER:₹3,799",
        },
        {
            id:6,
            img:Shoes,
            img1:Shoes1,
            title:"AVANT SHOES",
            isNew:true,
            OldPrice:" MRP:₹1,799",
            price:" OFFER:₹1,000",
        },
        {
            id:7,
            img:TV,
            img1:TV1,
            title:"MI X SERIES",
            isNew:true,
            OldPrice:" MRP:₹54,999",
            price:" OFFER:₹36,999",
        },
        {
            id:8,
            img:EV,
            img1:EV1,
            title:"WALTX SPARK 5 V2",
            isNew:true,
            OldPrice:" MRP:₹44,,731",
            price:" OFFER:₹35,004",
        },
        {
            id:9,
            img:Airpods,
            img1:Aripods1,
            title:"VIVO TWS AIR",
            isNew:true,
            OldPrice:" MRP:₹3,999",
            price:" OFFER:₹2,999",
        },
        {
            id:10,
            img:Phone,
            img1:Phone1,
            title:"SAMSUNG S23 ULTRA",
            isNew:true,
            OldPrice:" MRP:₹1,61,999",
            price:" OFFER:₹1,34,999",
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