// import { useEffect } from "react";
import TopCities from "./components/TopCities";
import Search from "./components/Search";
import TemperatureSection from "./components/TemperatureSection";

function App() {
  // useEffect(() => {
  //   async function getWeatherData() {
  //     const baseUrl = "https://api.open-meteo.com/";
  //     const response = await fetch(
  //       `${baseUrl}v1/forecast?latitude=27.72&longitude=85.36&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,rain&daily=weathercode,sunrise,sunset,rain_sum&current_weather=true&windspeed_unit=ms&timezone=auto&past_days=7`,
  //     );
  //     const data = response.json();
  //   }
  //   getWeatherData();
  // }, []);
  return (
    <div className="mx-auto max-w-screen-xl mt-4 py-6 px-32 bg-gradient-to-br from-cyan-700 to-blue-800 h-fit shadow-xl shadow-gray-600">
      <TopCities />
      <Search />
      <TemperatureSection />
    </div>
  );
}

export default App;
