import { useState, useEffect } from "react";
import getWeather from "./getWeather";

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWeather(city);
      setWeatherData(data);
    };

    fetchData();
  }, [city]);

  return (
    <div>
      {weatherData ? (
        <div>
          <h2>Weather in {city}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Conditions: {weatherData.weather[0].description}</p>
          <img
            src={
              "https://openweathermap.org/img/wn/" +
              weatherData.weather[0].icon +
              "@2x.png"
            }
            alt=""
          />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Weather;
