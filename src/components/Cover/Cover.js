import React from 'react'
import './Cover.css'
import coverImg from '../../assets/cover-img.png'

function Cover() {
    const coverStyle = {
        height: "420px",
        width: "100%",
        backgroundImage: {coverImg},
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    }

  return (
    <div className="cover-container" style={coverStyle}>
        <h1>Find student home with bills included</h1>
        <p>A simple and faster way to search for student accomodation</p>
    </div>
  )
}

export default Cover