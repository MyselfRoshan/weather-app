import { useState, useEffect } from "react";

import TopCities from "./components/TopCities";
import TemperatureSection from "./components/TemperatureSection";
import TimeAndLocation from "./components/TimeAndLocation";
import Forecast from "./components/Forecast";
import SearchAndLocation from "./components/search/SearchAndLocation";
import getWeatherInfo from "./services/getWeatherInfo";

function App() {
  const [cityWeatherInfo, setCityWeatherInfo] = useState({
    country: "London, England, GB",
    timezone: "Europe/London",
    max_temp: 17.3,
    min_temp: 13.3,
    sunrise: "2023-10-12T07:19",
    sunset: "2023-10-12T18:14",
    current: {
      actual_temp: 15.4,
      apparent_temp: 15.2,
      humidity: 83,
      time: "2023-10-12T12:45",
      windspeed: 6.1,
      weathercode: 3,
    },
    daily: [
      {
        time: [
          "2023-10-12",
          "2023-10-13",
          "2023-10-14",
          "2023-10-15",
          "2023-10-16",
          "2023-10-17",
          "2023-10-18",
        ],
        sunrise: [
          "2023-10-12T07:19",
          "2023-10-13T07:20",
          "2023-10-14T07:22",
          "2023-10-15T07:24",
          "2023-10-16T07:26",
          "2023-10-17T07:27",
          "2023-10-18T07:29",
        ],
        sunset: [
          "2023-10-12T18:14",
          "2023-10-13T18:12",
          "2023-10-14T18:10",
          "2023-10-15T18:08",
          "2023-10-16T18:06",
          "2023-10-17T18:04",
          "2023-10-18T18:01",
        ],
        uv_index_max: [0.9, 2.45, 3.05, 3.05, 3.05, 2.4, 1.55],
        temperature_2m_max: [17.3, 20.5, 12.8, 10.9, 11.2, 14.4, 15],
        temperature_2m_min: [13.3, 11.9, 7.2, 4.3, 2.8, 5.6, 8.3],
      },
    ],
  });

  useEffect(
    () => async () => {
      const data = await getWeatherInfo({
        lat: "51.50853",
        lon: "-0.12574",
        temperature_unit: "celsius",
        label: "London, England, GB",
        timezone: "Europe/London",
      });
      setCityWeatherInfo(data);
    },
    []
  );

  console.log(cityWeatherInfo);
  return (
    <div className="mx-auto max-w-screen-xl mt-10 py-6 px-32 bg-gradient-to-br from-cyan-700 to-blue-800 h-fit shadow-xl shadow-gray-600">
      <TopCities setCityWeatherInfo={setCityWeatherInfo} />
      <SearchAndLocation setCityWeatherInfo={setCityWeatherInfo} />
      <TimeAndLocation cityWeatherInfo={cityWeatherInfo} />
      <TemperatureSection cityWeatherInfo={cityWeatherInfo} />
      {/* <Forecast heading="hourly forecast" cityWeatherInfo={cityWeatherInfo} /> */}
      <Forecast
        heading="daily forecast"
        time={cityWeatherInfo.daily[0].time}
        temp={cityWeatherInfo.daily[0].temperature_2m_max}
      />
    </div>
  );
}

export default App;
