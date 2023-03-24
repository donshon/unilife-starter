import React from 'react'
import './PropertyCard.css'
import pin from '../../assets/map_pin.png'
import homeIcon from '../../assets/home2.png'
import shower from '../../assets/shower.png'
import bed from '../../assets/bed.png'
import { Link } from 'react-router-dom';

function PropertyCard({property}) {
  return (
    <div className="property-container">
        {
          property?.images[0]?
          <img src={property?.images[0]} alt="image"/>
          :
          <p>No Image</p>
        }
        
        <div className="prices">
          <div className="price-box">
            <h3>${property?.rent}</h3>
            <p>pppw including bills</p>
          </div>
          <div className="bed-shower">
            <div className="bed-box">
              <img src={bed} alt="image"/>
              <p>{property?.bedroom_count}</p>
            </div>
            <div className="bed-box">
              <img src={shower} alt="image"/>
              <p>{property?.bathroom_count}</p>
            </div>
          </div>
        </div>
        
        <div className="details-container">
          <div className="details">
            <h4>{property?.property_type}</h4>
            <h4>{property?.furnished}</h4>
          </div>
          <div className="address">
            <img src={pin} alt="image"/>
            {
              property?.address?
              <p>{property?.address.street}, {property?.address.city}, {property?.address.postcode}</p>
              :
              <p>unknown</p>
            }
          </div>
        </div>
        
        
        <div className="view">
          <img src={homeIcon} alt="image"/>
          <Link to={`/properties/${property?._id}`}>
          <p>View Home</p>
          </Link>
        </div>
        
    </div>
  )
}

export default PropertyCard