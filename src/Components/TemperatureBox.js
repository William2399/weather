import React from 'react'

const WeatherIcon = ({icon}) => {
    const iconUrl = `http://openweathermap.org/img/wn/${icon}@4x.png`
    return <img className="icon" src={iconUrl} alt="Weather Icon" />
  }

const TemperatureBox = ({temp, icon}) => {
  return (
    <div className="temperature-box">
      <div className="temp">{Math.round(temp)} °F</div>
      <WeatherIcon icon={icon} />
    </div>
  )
}

export default TemperatureBox
