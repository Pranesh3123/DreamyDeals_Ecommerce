import React from 'react'
import { Categories } from '../components/Categories/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Contact from '../components/contact/Contact';
import FeaturedProducts from '../components/featuredproducts/FeaturedProducts';
import Imagepass from '../components/imagepass/Imagepass';
import Products from './products/Products';
import Slider from 'react-slick';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Imagepass/>
      <FeaturedProducts type='featured'/>
      <Categories/>
      <Contact/>
      <Footer/>
      <Products/>
      <Slider/>
    </div>
  )
}

export default Home