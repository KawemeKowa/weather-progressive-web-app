import React, { useState } from 'react';
import { fetchWeather } from '../api/fetchWeather';
import '../App.css';

const SearchInput = ({ setWeather }) => {
  const [query, setQuery] = useState('');

  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery('');
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <input
      type="text"
      className="search"
      placeholder="search..."
      data-testid="search_input"
      value={query}
      onChange={handleChange}
      onKeyPress={search}
    />
  );
};

export default SearchInput;
