import React from 'react'
import {FcSearch} from 'react-icons/fc'
import './Search.css'

const Search = () => {
  return (
    <div className='search-bar'>
        <input  className='stxt' type='text' placeholder='search'/>
        <button className='sbut'>
        <FcSearch className='icon'/>
        </button>
    </div>
  )
}

export default Search;