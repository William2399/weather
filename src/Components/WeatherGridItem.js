import React from 'react';
import '../styles/weather-grid-item.css';

function WeatherGridItem(props) {
  return (
    <div className={props.weatherData ? "grid-item" : "grid-item hidden"}>
      <i className={`${props.iconClass} grid_icon`}></i>
      <div className={`${props.className} grid_label`}>{props.label}</div>
      <div className="grid_data">{props.weatherData && 
        props.weatherData[props.dataField]}</div>
    </div>
  );
}

export default WeatherGridItem;
