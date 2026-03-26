import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';

export default function SearchBox({ updateWeatherData }) {
  let [city, setCity] = useState('');
  let [error, seterror] = useState(false);

  const Api_URL = "https://api.openweathermap.org/data/2.5/weather"
  const API_KEY = import.meta.env.VITE_API_KEY;

  // This function will be responsible for fetching the weather data for the new city and then calling the updateWeatherData function with the new data.
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
      let newinfo = await getWeatherInfo(); // This will fetch the new weather data for the city entered by the user and return it as an object. We will then call the updateWeatherData function with this new data to update the state in the parent component (WeatherApp).
      updateWeatherData(newinfo); // This will update the state in the parent component (WeatherApp) with the new weather data, which will trigger a re-render of the component and display the new weather data in the Infobox component.
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
          value={city} // This will set the value of the text field to the city state variable, which will be updated as the user types in the text field.
          onChange={handlechange} // This will update the city state variable with the value entered by the user in the text field.
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