const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

const fetchWeather = async (city) => {
  const apiRes = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );

  if (!apiRes.ok) {
    throw new Error(`Weather API call failed with status ${apiRes.status}`);
  }

  return apiRes.json();
};

const Weather = ({ city }) => {
  console.log(city);

  const results = fetchWeather(city);

  console.log(results);

  return <div>Weather goes here:</div>;
};

export default Weather;
