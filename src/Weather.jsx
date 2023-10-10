import fetchWeather from "./fetchWeather";

const Weather = ({ city }) => {
  const results = fetchWeather(city);

  console.log(results);

  return <div>Weather goes here:</div>;
};

export default Weather;
