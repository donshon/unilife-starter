import React from 'react'
import './HomeSummary.css'
import divider from '../../assets/Rectangle_34.png'
import heart from '../../assets/heart.png'

function HomeSummary({home}) {
  return (
    <div className="summary-container">
        <div className="summary">
            <div>
                <h1>{home?.address.street}, {home?.address.city}, {home?.address.postcode}</h1>
            </div>
            <img src={divider}/>
            <div>

            </div>
        </div>
        <div className="buttons">
            <button><img src={heart}/>Shortlist</button>
            <button>Book Viewing</button>
        </div>
    </div>
  )
}

export default HomeSummary