async function getWeatherInfo(city) {
  const BASE_URL = "https://api.open-meteo.com";
  const VERSION = "v1";
  const CURRENT_WEATHER =
    "&current=temperature_2m,relativehumidity_2m,apparent_temperature,windspeed_10m,weathercode";
  const HOURLY_WEATHER =
    "&hourly=temperature_2m&daily=sunrise,sunset,uv_index_max";
  const DAILY_WEATHER = "&daily=temperature_2m_max,temperature_2m_min";
  const WEATHER_API_URL = `${BASE_URL}/${VERSION}/forecast?latitude=${city.lat}&longitude=${city.lon}&temperature_unit=${city.temperature_unit}&timezone=${city.timezone}${CURRENT_WEATHER}${HOURLY_WEATHER}${DAILY_WEATHER}`;

  const response = await fetch(WEATHER_API_URL);
  const weatherData = response.ok
    ? await response.json()
    : await Promise.reject(response);

  console.log(weatherData);
  //   Filter temperature after current temperature
  return {
    country: city.label,
    timezone: weatherData.timezone,
    max_temp: weatherData.daily.temperature_2m_max[0],
    min_temp: weatherData.daily.temperature_2m_min[0],
    sunrise: weatherData.daily.sunrise[0],
    sunset: weatherData.daily.sunset[0],
    current: {
      actual_temp: weatherData.current.temperature_2m,
      apparent_temp: weatherData.current.apparent_temperature,
      humidity: weatherData.current.relativehumidity_2m,
      time: weatherData.current.time,
      windspeed: weatherData.current.windspeed_10m,
      weathercode: weatherData.current.weathercode,
    },
    daily: [weatherData.daily],
  };
}

export default getWeatherInfo;
