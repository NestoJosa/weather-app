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

const getWeather = async (city) => {
  try {
    const results = await fetchWeather(city);
    return results;
  } catch (error) {
    console.log(`Error fetching weather data for "${city}":`, error);
    return 0;
  }
};

export default getWeather;
