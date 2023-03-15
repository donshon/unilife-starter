import React, {useState, useEffect} from 'react'
import './Homepage.css'
import Cover from './../../components/Cover/Cover';
import Search from '../../components/Search/Search';
import InfoBox from './../../components/InfoBox/InfoBox';
import searchImg from '../../assets/home_search.png';
import compareImg from '../../assets/home_compare.png';
import billImg from '../../assets/home_bill.png';
import person from '../../assets/person.png';
import hand from '../../assets/hand_home.png';
import heart from '../../assets/heart.png';
import axios from 'axios'
import CityCard from './../../components/CityCard/CityCard';
import { Link } from 'react-router-dom';

function Homepage() {
  //state for array of cities
  const [cities, setCities] = useState([])

  //api call to get cities https://unilife-server.herokuapp.com/cities?
  useEffect(
    ()=>{
        axios.get("https://unilife-server.herokuapp.com/cities")
        .then( res => {
            //console.log(res.data.response)
            //store data in state
            setCities(res.data.response.slice(0,9))
        })
        .catch(err=>console.log(err))
    }, [] //if nothing in [], useEffect only runs once on page loading
  )


  return (
    <div className="homepage-container">
        <Cover headline="Find student homes with bills included" text="A simple and faster way to search for student accomodation"/>
        
        <Search />
        
        <div className="city-container">
          <h2>Student accomodations in our top cities</h2>
          <div className="city-cards">
            {
              cities.map(city => 
              <Link key= {city?._id} to={`/details/${city?._id}`}>
                <CityCard 
                  city= {city}
                />
                </Link>
              )
            }
          </div>
          <Link to={'/cities'}>
            <button>See All Cities</button>
          </Link>
        </div>
        
        <div className="info-container">
          <h2>Compare all inclusive student homes.</h2>
          <div className="info-boxes">
            <InfoBox img={searchImg} title="Search" text="Find your dream home in the perfect area near your university."/>
            <InfoBox img={compareImg} title="Compare" text="Compare student accommodation to find the right home for you."/>
            <InfoBox img={billImg} title="Bills Included" text="Bills are included in all rent prices. No hidden fees."/>
          </div>
        </div>
        
        <div className="homepage-other">
          <div className="other-left">
            <div className="other-box">
              <img src={hand}/>
              <div className="other-box-text">
                <h3>Best Selection</h3>
                <p>Best selection of student accommodations. Never been easier to find a home that's right for you.</p>
              </div>
            </div>
            <div className="other-box">
              <img src={heart}/>
              <div className="other-box-text">
                <h3>Your Favorite</h3>
                <p>Shortlist your favourite properties and send enquiries in one click.</p>
              </div>
            </div>
            <button>Search & Compare</button>
          </div>
          <img src={person}/>
        </div>

    </div>
  )
}

export default Homepage