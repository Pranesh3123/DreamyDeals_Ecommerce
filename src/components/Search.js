import React from 'react'
import Searchicon from './../image/search.svg';

const Search = () => {
  return (
    <div className='search-bar'>
        <input  className='stxt' type='text' placeholder='search'/>
        <button className='sbut'>
        <img  className='icon' src={Searchicon} alt='icon'/>
        </button>
    </div>
  )
}

export default Search;