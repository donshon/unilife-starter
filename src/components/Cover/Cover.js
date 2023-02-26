import React from 'react'
import './Cover.css'
import coverImg from '../../assets/cover-img.png'

function Cover({headline, text}) {
    const coverStyle = {
        height: "420px",
        width: "100%",
        backgroundImage: `url("${coverImg}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    }

  return (
    <div className="cover-container" style={coverStyle}>
      <div className="cover-overlay"></div>
      <h1>{headline}</h1>
      <p>{text}</p>
    </div>
  )
}

export default Cover