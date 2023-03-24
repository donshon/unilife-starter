import React from 'react'
import './BedroomPrices.css'
//npm install number-to-words

function BedroomPrices({home}) {
  
  //generate array of strings acting as key names for 'bedroom_prices' object
  // const bedroomKeys = (num) => {
  //   const keys = []
  //   var numberToWords = require('number-to-words');
  //   for(let i = 0; i < num; i++) {
  //     keys.push(`bedroom_${numberToWords.toWords(i+1)}`)
  //   }
  //   console.log(keys)
  //   return keys
  // }

  const bedPrices = () => {
    const bedroomCount = home?.bedroom_count
    let bedroomArray = []
    const keys = ["bedroom_one", "bedroom_two", "bedroom_three", "bedroom_four", "bedroom_five", "bedroom_six", "bedroom_seven", "bedroom_eight", "bedroom_nine", "bedroom_ten"]

    //turn bedroom_prices object into array
    for(let i = 0; i < bedroomCount; i++) {
      bedroomArray.push({room: `Bedroom ${i+1}`, price: `${home?.bedroom_prices[keys[i]]}`})
    }
    return bedroomArray
  }


  return (
    <div className="price-container">
        <h2>Bedroom Prices</h2>
        <div className="price">
            { 
              bedPrices().map(item => (
                <div className="price-section" key={item?._id}>
                  <p>{item.room}</p>
                  <p>${item.price} per week</p>
                </div>
              ))
            }
        </div>
    </div>
  )
}

export default BedroomPrices