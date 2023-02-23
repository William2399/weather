import React, { useState } from 'react'
import WeatherDescription from './Components/WeatherDescription.js'
import LocationBox from './Components/LocationBox.js'
import TemperatureBox from './Components/TemperatureBox.js'
import SearchBox from './Components/SearchBox.js'
import WeatherGridItem from './Components/WeatherGridItem.js'

function App() {

  const [weather, setWeather] = useState({})

  return (
    <div className="app">
      <main>
        <div className={typeof weather.main === "undefined" ? "left-content hidden" : "left-content"}>
          {(typeof weather.main != "undefined") ? (
              <>
                <WeatherDescription description={weather.weather[0].description} />          
                <LocationBox location={`${weather.name}, ${weather.sys.country}`} date={new Date()}/>
                <TemperatureBox temp={weather.main.temp} icon={weather.weather[0].icon} />
              </>
            ) : ('')}
          <SearchBox weather={weather} setWeather={setWeather} />
        </div>

        <div className={typeof weather.main === "undefined" ?
           "right-content hidden" : "right-content"}>
          <WeatherGridItem
              className="feels_like"
              weatherData={weather.main}
              label="FEELS LIKE"
              dataField="feels_like"
              iconClass="fa-solid fa-temperature-three-quarters"
            />
            <WeatherGridItem
              className="humidity"
              weatherData={weather.main}
              label="HUMIDITY"
              dataField="humidity"
              iconClass="fa-solid fa-droplet"
            />
            <WeatherGridItem
              className="wind_speed"
              weatherData={weather.wind}
              label="WIND SPEED"
              dataField="speed"
              iconClass="fa-solid fa-wind"
            />
            <WeatherGridItem
              className="pressure"
              weatherData={weather.main}
              label="PRESSURE"
              dataField="pressure"
              iconClass="fa-solid fa-arrow-up-wide-short"
            />
            <WeatherGridItem
              className="temp_max"
              weatherData={weather.main}
              label="MAX TEMP"
              dataField="temp_max"
              iconClass="fa-solid fa-maximize"
            />
            <WeatherGridItem
              className="temp_min"
              weatherData={weather.main}
              label="MIN TEMP"
              dataField="temp_min"
              iconClass="fa-solid fa-minimize"
            />
        </div>
      </main>
    </div>
  )
}

export default App
