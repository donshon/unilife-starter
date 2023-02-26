import React from 'react'
import './Search.css'

function Search() {
  return (
    <div className="search-container">
      <select className="city">
        <option value=""></option>
      </select>
      <select className="bedroom">
        <option value=""></option>
      </select>
      <button className="find-homes">Find Homes</button>
    </div>
  )
}

export default Search