import React from 'react'
import './CityCard.css'

function CityCard({img, name, property}) {
    const cardStyle = {
        height: "300px",
        width: "400px",
        backgroundImage: `url("${img}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative", //needed to to use absolute on stuff on top
        borderRadius: "24px"
    }

  return (
    <div className="city-card-container" style={cardStyle}>
        <h1>{name}</h1>
        <p>{property} Properties</p>
    </div>
  )
}

export default CityCard