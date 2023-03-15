import React from 'react'
import './Search.css'

function Search() {
  return (
    <div className="search-container">
      <select className="city">
        <option disabled selected>Select your option</option>
        
      </select>
      <select className="bedroom">
        <option disabled selected>Select your option</option>
        <option value=""></option>
      </select>
      <button className="find-homes">Find Homes</button>
    </div>
  )
}

export default Search