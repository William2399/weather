import React from "react"

const DateDisplay = ({date}) => {
    const dateBuilder = (d) => {
      const months = ["January", "February", "March",
         "April", "May", "June", "July", "August",
         "September", "October", "November", "December"]
      const days = ["Sunday", "Monday", "Tuesday",
         "Wednesday", "Thursday", "Friday", "Saturday"]
  
      const day = days[d.getDay()]
      const date = d.getDate()
      const month = months[d.getMonth()]
      const year = d.getFullYear()

      return `${day} ${date} ${month} ${year}`
    }
  
    return (
      <div className="date">{dateBuilder(date)}</div>
    )
  }

const LocationBox = ({location, date}) => (
    <div className="location-box">
      <div className="location">{location}</div>
      <DateDisplay date={date} />
    </div>
  )


export default LocationBox