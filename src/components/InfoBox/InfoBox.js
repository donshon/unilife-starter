import React from 'react'
import './InfoBox.css'

function InfoBox({img, title, text}) {
  return (
    <div className="info-box-container">
        <img src={img} alt="image"/>
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default InfoBox