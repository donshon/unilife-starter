import React from 'react'
import './PhotoBox.css'

function PhotoBox({home}) {
  return (
    <div className="photo-container">

        <div className="main-photo">
            {
                home?.images[0]?
                <img src={home?.images[0]}/>
                :
                <p>No image</p>
            }
        </div>
        <div className="three-photos">
            {
                home?.images[1]?
                <img src={home?.images[1]}/>
                :
                <p>No image</p>
            }
            {
                home?.images[2]?
                <img src={home?.images[2]}/>
                :
                <p>No image</p>
            }
            {
                home?.images[3]?
                <img src={home?.images[3]}/>
                :
                <p>No image</p>
            }
        </div>
    </div>
  )
}

export default PhotoBox