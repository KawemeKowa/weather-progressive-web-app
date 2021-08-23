import React, { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';
import './App.css';
import SearchInput from './components/SearchInput';
import WeatherCard from './components/WeatherCard';

const App = () => {
  
  const [weather, setWeather] = useState({});

  return (
    <div className="main-container">
      <SearchInput setWeather={setWeather} />
      {weather.main && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;
