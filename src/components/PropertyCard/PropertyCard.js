import React from 'react'
import './PropertyCard.css'

function PropertyCard({property}) {
  return (
    <div className="property-container">
        <img src={property.images[0]}/>
        <div className="prices">

        </div>
        <div className="details-container">

        </div>
        <div className="view">

        </div>
    </div>
  )
}

export default PropertyCard