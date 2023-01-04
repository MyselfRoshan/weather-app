import { useEffect } from "react";

function App() {
  useEffect(() => {
    async function getWeatherData() {
      const baseUrl = "https://api.open-meteo.com/";
      const response = await fetch(
        `${baseUrl}v1/forecast?latitude=27.72&longitude=85.36&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,rain&daily=weathercode,sunrise,sunset,rain_sum&current_weather=true&windspeed_unit=ms&timezone=auto&past_days=7`,
      );
      const data = response.json();
    }
    getWeatherData();
  }, []);
  return <div className="App"></div>;
}

export default App;
