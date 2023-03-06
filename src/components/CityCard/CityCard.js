import React from 'react'
import './CityCard.css'

function CityCard({city}) {
    const cardStyle = {
        height: "300px",
        width: "400px",
        backgroundImage: `url("${city.image_url}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative", //needed to to use absolute on stuff on top
        borderRadius: "24px"
    }

  return (
    <div className="city-card-container" style={cardStyle}>
        <div className="card-overlay"></div>
        <h1>{city.name}</h1>
        <p>{city.property_count} Properties</p>
    </div>
  )
}

export default CityCard