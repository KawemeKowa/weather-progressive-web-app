import React from 'react';
import { fetchWeather } from '../api/fetchWeather';
import '../App.css';

const SearchInput = ({ query, setQuery, setWeather }) => {
  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery('');
    }
  };

  return (
      <input
        type="text"
        className="search"
        placeholder="search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
  );
};

export default SearchInput;
