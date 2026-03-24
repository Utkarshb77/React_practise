import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';

export default function SearchBox({ updateWeatherData }) {
  let [city, setCity] = useState('');
  let [error, seterror] = useState(false);

  const Api_URL = "https://api.openweathermap.org/data/2.5/weather"
  const API_KEY = import.meta.env.VITE_API_KEY;

  const getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${Api_URL}?q=${city}&appid=${API_KEY}&units=metric` // units=metric -> “Give me weather data in Celsius instead of Kelvin”
      );
      let data = await response.json();
      console.log(data);
      const res = {
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        weather: data.weather[0].main,
      }
      console.log(res);
      return res;
    }
    catch (err) {
      seterror(true);
      throw err;
    }
  };

  let handlechange = (evt) => {
    setCity(evt.target.value);
  }

  let handlesubmit = async (evt) => {
    try {
      evt.preventDefault();
      let newinfo = await getWeatherInfo();
      updateWeatherData(newinfo);
      setCity("");
      seterror(false);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      seterror(true);
    }
  };

  return (
    <div className='center'>
      <h2>Search for  Weather:</h2>
      <form onSubmit={handlesubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handlechange}
        />
        <br />
        <br />
        <Button variant="outlined" type='submit'>
          Search
        </Button>
        {error && <p style={{ color: 'red' }}>City not found. Please try again.</p>}
      </form>
    </div>
  );
}