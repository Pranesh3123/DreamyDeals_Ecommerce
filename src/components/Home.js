import React from 'react'
import { Categories } from '../components/Categories/Categories';
import Footer from './footer/Footer';
import Navbar from '../components/Navbar';
import Contact from '../components/contact/Contact';
import FeaturedProducts from '../components/featuredproducts/FeaturedProducts';
import Imagepass from '../components/imagepass/Imagepass';
import Slider from 'react-slick'
import ProductSlider from './productslider/ProductSlider';


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Imagepass/>
      <FeaturedProducts type='TOP'/>
      <Categories/>
      <ProductSlider/>
      <Contact/>
      <Footer/>
      <Slider/>
    </div>
  )
}

export default Home