import React, {useState, useEffect} from 'react'
import './CityDetailsPage.css'
import Cover from './../../components/Cover/Cover';
import {useParams} from 'react-router-dom'
import axios from 'axios'
import studentImg from '../../assets/students.png'
import PropertyCard from './../../components/PropertyCard/PropertyCard';

function CityDetailsPage() {
    //need id from url
    const {id} = useParams();
    //create state for city data
    const [city, setCity] = useState()
    //state for properties
    const [properties, setProperties] = useState([])

    useEffect(
        () => {
            //call api get info on city
            axios.get(`https://unilife-server.herokuapp.com/cities/${id}`)
            .then(res => {
                //console.log(res.data.data[0])
                setCity(res.data.data[0])
            })
            .catch(err => console.log(err))

            //call api for list of properties
            axios.get(`https://unilife-server.herokuapp.com/properties/city/${id}`)
            .then(res => {
                //console.log(res.data.response)
                setProperties(res.data.response)
                //console.log(properties)
            })
            .catch(err => console.log(err))
            //eslint-disable-next-line
        }, []
    )

  return (
    <div className="city-details-container">
        <Cover headline="Search Accomodation" text="Whatever you're after, we can help you find the right student accommodation for you."/>
        <div className="filter-container">
            <div className="select-container">
                <h3>Min Bedroom</h3>
                <select>
                    <option disabled selected>Any bedrooms</option>
                    
                </select>
            </div>
            <div className="select-container">
                <h3>Min Bathroom</h3>
                <select>
                    <option disabled selected>Any bathrooms</option>
                    <option value=""></option>
                </select>
            </div>
            <div className="select-container">
                <h3>Max Price</h3>
                <select>
                    <option disabled selected>Any price</option> 
                </select>
            </div>
            <div className="select-container">
                <h3>Home Type</h3>
                <select>
                    <option disabled selected>Any home</option>
                </select>
            </div>
        </div>
        
        <div className="properties-container">
            <h2>{city?.property_count} homes in {city?.name}</h2>
            <div className="properties">
                {
                    properties.map( item =>
                        <PropertyCard key={item._id} property={item}/>
                    )
                }
            </div>
        </div>
        
        <div className="info-container">
            <div className="info-box">
                <div className="info-text">
                    <h2>Being a student in {city?.name}</h2>
                    <br/>
                    <p>{city?.student_life}</p>
                    <br/>
                    <p>{city?.universities}</p>
                </div>
                <img src={studentImg} alt={`Student in ${city?.name}`}/>
            </div>
        </div>
    </div>
  )
}

export default CityDetailsPage