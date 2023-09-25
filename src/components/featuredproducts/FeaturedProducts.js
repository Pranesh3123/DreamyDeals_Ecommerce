    import React from 'react'
    import '../imagepass/Imagepass'
    import Watch from './Productsimages/03_f7453fd7-db93-42f7-9cc7-0604b836273c_2048x.jpeg'
    import Watch1 from './Productsimages/04_369a1132-57b8-4087-81c2-2939586afca7_2048x.jpeg'
    import Sys from './Productsimages/color_back_green__buxxfjccqjzm_large_2x.jpeg'
    import Sys1 from './Productsimages/color_front_green__eb8qbnemmre6_large_2x.jpeg'
    import Ipad from './Productsimages/ipadpro11-digitalmat-gallery-1-202210.png'
    import Ipad1 from './Productsimages/ipadpro11-digitalmat-gallery-3-202210.png'
    import Head from './Productsimages/a900b53164683e1fc98b8eefb9b6c406.png'
    import Head1 from './Productsimages/39bf4d07b80f99034f09db5d7644e036.png'
    import Bag from './Productsimages/51iwjAm9P6L._UL1000_.jpeg'
    import Bag1 from './Productsimages/61vketKNnGL._UL1000_.jpeg'
    import Card from '../card/Card'
    import './Featuredproducts.css'
    const FeaturedProducts = ({type}) => {
        const data=[
            {
                id:1,
                img:Watch,
                img1:Watch1,
                title:"Amazfit-GTR 3 pro",
                isNew:true,
                OldPrice:"MRP:₹25,999",
                price:"OFFER:₹18,999",
            },
            {
                id:2,
                img: Sys1,
                img1: Sys,
                title:"iMac 24",
                isNew:true,
                OldPrice:"MRP:₹1,29,990",
                price:"OFFER:₹1,10,000",
            },
            {
                id:3,
                img: Ipad,
                img1: Ipad1,
                title:"iPad pro",
                isNew:true,
                OldPrice:" MRP:₹76,900",
                price:" OFFER:₹70000",
            },
            {
                id:4,
                img: Head,
                img1: Head1,
                title:"Sony INZONE H9",
                isNew:true,
                OldPrice:" MRP:₹27,900",
                price:" OFFER:₹25,000",
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
        ];
    return (
        <div className='featuredproducts'>
            <div className='top'>
            <h1>{type}Products</h1>
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
    export default FeaturedProducts