import React from 'react'
import './OpenWeatherIcon.css';

const OpenWeatherIcon = ({
 weather
}) => (
  <div className='weather-icon-container'>
    <img
      className='weather-icon'
      src={`http://openweathermap.org/img/w/${weather.icon}.png`}
      alt={weather.description}
    />
  </div>
)

export default OpenWeatherIcon
