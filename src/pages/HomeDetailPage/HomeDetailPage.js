import React, {useState, useEffect} from 'react'
import './HomeDetailPage.css'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import arrow from '../../assets/pointer_left.png'
import checkmark from '../../assets/checkmark.png'
import PhotoBox from './../../components/PhotoBox/PhotoBox';
import HomeSummary from '../../components/HomeSummary/HomeSummary'

function HomeDetailPage() {
  const [home, setHome] = useState()
  const {id} = useParams();

  useEffect(
    () => {
      //call api for home
      axios.get(`https://unilife-server.herokuapp.com/properties/${id}`)
      .then (res => {
        console.log(res.data)
        setHome(res.data)
      })
      .catch(err => console.log(err))
    }, []
  )


  return (
    <div className="home-container">
        <div className="nav">
          <Link to={`/details/${home?.city_id._id}`}>
            <img src={arrow}/>
            <p>Back to Search</p>
          </Link>
        </div>
        <PhotoBox home={home}/>
        <HomeSummary home={home}/>
        <div className="desc">
          <h2>Description</h2>
          {/* {
            home.property_description?
            <p>{home?.property_description}</p>
            :
            <p>No description</p>
          } */}
        </div>
        <div className="key-features">
          <h2>Key Features</h2>
          {/* {
            home.key_features[0]?
            home.key_features.map(feature => <div key={feature} className="feature"><img src={checkmark}/><p>{feature}</p></div>)
            :
            <p>N/A</p>
          } */}
        </div>
    </div>
  )
}

export default HomeDetailPage