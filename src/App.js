import React, { useState } from 'react';
import './App.css';
import SearchInput from './components/SearchInput';
import WeatherCard from './components/WeatherCard';

const App = () => {
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(false);

  return (
    <div className="main-container">
      <SearchInput setWeather={setWeather} setError={setError} />
      {weather.main && <WeatherCard weather={weather} error={error} />}
    </div>
  );
};

export default App;
