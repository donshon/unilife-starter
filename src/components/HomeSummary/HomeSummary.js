import React from 'react'
import './HomeSummary.css'
import divider from '../../assets/Rectangle_34.png'
import heart from '../../assets/heart.png'
import bed from '../../assets/blue_bed.png'
import shower from '../../assets/blue_shower.png'

function HomeSummary({home}) {
  return (
    <div className="summary-container">
        <div className="summary">
            <div className="address">
                <h1>{home?.address.street}, {home?.address.city}, {home?.address.postcode}</h1>
            </div>
            <img src={divider}/>
            <div className="box-container">
              <div className="box">
                <h4>Bedrooms</h4>
                <div className="sub-box">
                  <img src={bed}/>
                  <p>{home?.bedroom_count}</p>
                </div>
              </div>
              <div className="box">
                <h4>Bathrooms</h4>
                <div className="sub-box">
                  <img src={shower}/>
                  <p>{home?.bathroom_count}</p>
                </div>
              </div>
              <div className="box">
                <h4>Property Type</h4>
                <p>{home?.property_type}</p>
              </div>
              <div className="box">
                <h4>Price</h4>
                <p>${home?.rent} USD</p>
              </div>
              <div className="box">
                <h4>Furnished Type</h4>
                <p>{home?.furnished}</p>
              </div>
              <div className="box">
                <h4>Available From</h4>
                <p>{home?.availability}</p>
              </div>
            </div>
        </div>
        <div className="buttons">
            <button className="shortlist-btn"><img src={heart}/>Shortlist</button>
            <button className="booking-btn">Book Viewing</button>
        </div>
    </div>
  )
}

export default HomeSummary