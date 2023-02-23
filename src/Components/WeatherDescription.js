import React from 'react'

const WeatherDescription = ({description}) => {
    const words = description.split(" ")
    const capitalWords = words.map(word => word.charAt(0).toUpperCase() 
        + word.slice(1))
    const capitalDes = capitalWords.join(" ")
  
    return (
      <div className="weather_description">{capitalDes}</div>
    )
  }

  export default WeatherDescription