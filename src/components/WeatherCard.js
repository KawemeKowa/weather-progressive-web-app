import React from 'react';
import PropTypes from 'prop-types';

const WeatherCard = ({ weather, error }) => {
  if (!error) {
    return (
      <div className="city">
        <h2 className="city-name">
          <span>{weather.name}</span>
          <sup>{weather.sys.country}</sup>
        </h2>
        <div className="city-temp">
          {Math.round(weather.main.temp)}
          <sup>&deg;C</sup>
        </div>
        <div className="info">
          <img
            className="city-icon"
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <p> {weather.weather[0].description}</p>
        </div>
      </div>
    );
  } else if (weather === null) {
    <h2 className="error">Oops, something went wrong </h2>;
  } else {
    return <h2 className="error">Invalid search parameter</h2>;
  }
};

WeatherCard.propTypes = {
  weather: PropTypes.object,
  error: PropTypes.bool
};

export default WeatherCard;
