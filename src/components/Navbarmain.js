import React from 'react'
import Searchicon from './../image/search.svg';
import './Navbar.css'
const Search = () => {
  return (
    <div className='search-bar'>
        <input type='text' placeholder='search'/>
        <img  className='icon' src={Searchicon} alt='icon'/>
    </div>
  )
}

export default Search;