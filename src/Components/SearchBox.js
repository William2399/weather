import React, { useEffect, useState} from 'react'

const api = {
  key: "51c9f7d875fce6fd89dc0efe9d649278",
  base: "https://api.openweathermap.org/data/2.5/"
}

const SearchBox = ({weather, setWeather}) => {
    const [query, setQuery] = useState('Los Angeles')
    const [errorMessage, setErrorMessage] = useState("")
  
    const search = (query) => {
      fetch(`${api.base}forecast?q=${query}&units=imperial&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          if (result.count === 0 || !query || result.cod === "404" 
            || result.cod === "400") {
            setErrorMessage("Place not found")
          } else {
            setErrorMessage("")
            fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
              .then(res => res.json())
              .then(result => {
                setWeather(result)
                console.log(result);
              })
              .then(() => {setQuery('')})
          }
        })
    }

    useEffect(() => {search(query)}, [])

    return (
      <div className="search-box">
        <input
          className={typeof weather.main === "undefined" ? 
            "search-bar hidden" : "search-bar"}
          value={query}  
          placeholder="Search Location..."
          onChange={e => setQuery(e.target.value)}
          onKeyPress={evt => {if (evt.key === "Enter") {search(query)}}}
        />
        {errorMessage && (
        <div className="error-message">{errorMessage}</div>
        )}
      </div>
    )
  }

export default SearchBox