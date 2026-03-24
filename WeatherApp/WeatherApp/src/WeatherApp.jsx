import { useState } from "react";
import SearchPlace from './SearchBox';
import Infobox from './Infobox';

export default function WeatherApp( ) {
    const [weatherData, setWeatherData] = useState({
        city: "Delhi",
        country: "India",
        temp: 25,
        temp_min: 20,
        temp_max: 30,
        humidity: 60,
        pressure: 1017,
        weather: "Clear",
    });

    let updateWeatherData = (newinfo) => {
        setWeatherData(newinfo);
    }

  return (
    <div style={{textAlign:"center"}} className="WeatherApp">
      <h1>Weather App</h1>
        <SearchPlace updateWeatherData={updateWeatherData} />
        <Infobox info={weatherData}/>
    </div>
  );
}