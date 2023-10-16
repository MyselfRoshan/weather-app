import { useState, useEffect } from "react";

import TopCities from "./components/TopCities";
import TemperatureSection from "./components/TemperatureSection";
import TimeAndLocation from "./components/TimeAndLocation";
import Forecast from "./components/Forecast";
import SearchAndLocation from "./components/search/SearchAndLocation";
import getWeatherInfo from "./services/getWeatherInfo";

function App() {
  const [cityWeatherInfo, setCityWeatherInfo] = useState({
    country: "London, England, United Kingdom",
    timezone: "Europe/London",
    max_temp: 51,
    min_temp: 40.5,
    sunrise: "2023-10-15T07:24",
    sunset: "2023-10-15T18:08",
    current: {
      is_day: 1,
      wmo_description: {
        description: "Mainly Sunny",
        image: "http://openweathermap.org/img/wn/01d@2x.png",
      },
      actual_temp: 48.9,
      apparent_temp: 42.5,
      humidity: 55,
      locale_time: {
        month: "October",
        day: "Sunday",
        date: 15,
        year: 2023,
        time: "12:15 PM",
        full: "Sunday, 15 October 2023",
      },
      windspeed: 10.9,
      weathercode: 1,
    },
    hourly: {
      time: [
        "2023-10-15T17:00",
        "2023-10-15T18:00",
        "2023-10-15T19:00",
        "2023-10-15T20:00",
        "2023-10-15T21:00",
        "2023-10-15T22:00",
      ],
      temp: [50.3, 49, 47.1, 45.6, 44.4, 43.3],
      weathercode: [0, 0, 1, 3, 3, 3],
      is_day: [1, 1, 0, 0, 0, 0],
    },
    daily: {
      time: [
        "2023-10-15",
        "2023-10-16",
        "2023-10-17",
        "2023-10-18",
        "2023-10-19",
        "2023-10-20",
      ],
      temperature_2m_max: [51, 54.8, 58, 63.2, 68, 61.9],
      temperature_2m_min: [40.5, 38.7, 47.6, 53.2, 60, 55.2],
      sunrise: [
        "2023-10-15T07:24",
        "2023-10-16T07:26",
        "2023-10-17T07:27",
        "2023-10-18T07:29",
        "2023-10-19T07:31",
        "2023-10-20T07:32",
      ],
      sunset: [
        "2023-10-15T18:08",
        "2023-10-16T18:06",
        "2023-10-17T18:04",
        "2023-10-18T18:01",
        "2023-10-19T17:59",
        "2023-10-20T17:57",
      ],
      weathercode: [3, 3, 3, 61, 95, 95],
    },
  });

  useEffect(
    () => async () => {
      const data = await getWeatherInfo({
        lat: "51.50853",
        lon: "-0.12574",
        temperature_unit: "celsius",
        label: "London, England, United Kingdom",
        timezone: "Europe/London",
      });
      setCityWeatherInfo(data);
    },
    [],
  );

  return (
    <div className="mx-auto max-w-screen-xl my-10 py-6 px-32 bg-gradient-to-br from-cyan-700 to-blue-800 h-fit shadow-xl shadow-gray-600">
      <TopCities setCityWeatherInfo={setCityWeatherInfo} />
      <SearchAndLocation setCityWeatherInfo={setCityWeatherInfo} />
      <TimeAndLocation cityWeatherInfo={cityWeatherInfo} />
      <TemperatureSection cityWeatherInfo={cityWeatherInfo} />
      <Forecast
        heading="hourly forecast"
        time={cityWeatherInfo.hourly.time}
        temp={cityWeatherInfo.hourly.temp}
        is_day={cityWeatherInfo.hourly.is_day}
        weathercode={cityWeatherInfo.hourly.weathercode}
      />
      <Forecast
        heading="daily forecast"
        time={cityWeatherInfo.daily.time}
        temp={cityWeatherInfo.daily.temperature_2m_max}
        is_day={cityWeatherInfo.current.is_day}
        weathercode={cityWeatherInfo.daily.weathercode}
      />
    </div>
  );
}

export default App;
