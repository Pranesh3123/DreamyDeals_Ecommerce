import React, { useState, useEffect } from 'react';
import Headphone from './homeimage/ExJucbzWgAc3tCG.jpeg';
import Phone from './homeimage/https 3A 2F 2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com 2Fpublic 2Fimages 2F0a50dd7d-0fd1-4d57-aea5-11ba7668e82e_1920x1080.png';
import Tv from './homeimage/KV_Big-TV-days-1920x1080.jpeg';
import Shoes from './homeimage/fe0a5e68993795.5b71430bafae5.jpeg';
import Smartwatch from './homeimage/Fire-Boltt-Cobra-Rugged-Outdoor-Smartwatch-1.png';
import Alexa from './homeimage/amazon-echo-dot-5th-gen-alexa-smart-speaker.jpeg'
import Pc from './homeimage/7244f566923b4bc0844074b064085868.jpeg';
import Gcard from './homeimage/437f84eef0e1526276905b9ab35f3185.jpeg';
import Pstat from './homeimage/8970_04_everything-know-sonys-next-gen-playstation-5.jpeg';
import './Imagepass.css';
const Imagepass = () => {
    const data = [Headphone, Phone, Tv, Shoes,Pc,Alexa];
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [data.length]);

    const showSlide = (index) => {
        const slider = document.querySelector('.slider');
        if (slider) {
            slider.style.transform = `translateX(-${index * 100}%)`;
        }
    };

    showSlide(slideIndex);

    return (
        <div className="slider-container">
            <div className="slider">
                {data.map((imgSrc, index) => (
                    <div key={index} className="slide">
                        <img  className='sliders' src={imgSrc} alt={`slide ${index}`} />
                    </div>
                ))}
            </div>
            <div>
                <img className='rightimg' src={Smartwatch} alt='watch'></img>
            </div>
            <div className='rightdown'>
                <img   src={Gcard} alt='graphics'></img>
                <img   src={Pstat} alt='accessories'></img>
            </div>
         </div>
    );
};

export default Imagepass;
