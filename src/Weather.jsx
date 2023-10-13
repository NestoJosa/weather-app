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
    <div className="Weather">
      {(() => {
        if (weatherData) {
          return (
            <div className="mt-4">
              <h2>Weather in {city}</h2>
              <p className="mt-3">Temperature: {weatherData.main.temp}°C</p>
              <p className="mb-0">
                Conditions: {weatherData.weather[0].description}
              </p>
              <img
                src={
                  "https://openweathermap.org/img/wn/" +
                  weatherData.weather[0].icon +
                  "@2x.png"
                }
                alt="Weather Info Icon"
              />
            </div>
          );
        } else if (weatherData === 0) {
          return <p>Something went wrong...</p>;
        } else {
          return <p>Loading...</p>;
        }
      })()}
    </div>
  );
};

export default Weather;
