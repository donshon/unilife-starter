import React, {useState, useEffect} from 'react'
import './Citypage.css'
import Cover from './../../components/Cover/Cover';
import axios from 'axios';
import {Link} from 'react-router-dom'

function Citypage() {
    //state to store all city names
    const [cities, setCities] = useState([])
    //api call to get city names
    useEffect(
      ()=>{
          axios.get("https://unilife-server.herokuapp.com/cities")
          .then( res => {
              console.log(res.data.response)
              //store data in state
              setCities(res.data.response)
          })
          .catch(err=>console.log(err))
      }, []
    )


  return (
    <div className="citypage-container">
        <Cover headline="Student Accomodation" text="UniLife have student accommodation available across the UK. Whatever you're after, we can help you find the right student accommodation for you."/>
        <div className="all-cities-container">
            <h2>Search by City</h2>
            <div className="cities">
                {
                  cities.map( item => 
                  <Link to={`/details/${item._id}`}>
                    <button>{item.name}</button>
                  </Link>
                  )
                }
            </div>
        </div>
    </div>
  )
}

export default Citypage