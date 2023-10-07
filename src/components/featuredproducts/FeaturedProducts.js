import React, { useEffect, useState } from 'react'
import './Featureimg.js'
import Card from '../card/Card.js'
import Featureimg from './Featureimg.js'
import  axios from 'axios'
import './Featuredproducts.css'
 const FeaturedProducts = ({type}) => {

        const[data,setData]=useState([])
        
        useEffect(()=>{
            const fetchData=async()=>{
                try{
                 const res=await axios.get(process.env.REACT_APP_API_URL+"/products",
                 {
                   headers:{
                    Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
                    },
                 }
                );
                 
                 setData(res.data.data)
                }
                catch(err){
                    console.log(err);
                }
            };
            fetchData();
        },[]);
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