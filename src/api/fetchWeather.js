import axios from 'axios';
import PropTypes from 'prop-types';

const URL = process.env.REACT_APP_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const fetchWeather = async (query) => {
  const { data } = await axios
    .get(URL, {
      params: {
        q: query,
        units: 'metric',
        APPID: API_KEY
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return data;
};

fetchWeather.propTypes = {
  query: PropTypes.string
};

export default fetchWeather;
