// import { useEffect } from "react";
import TopCities from "./components/TopCities";
import TemperatureSection from "./components/TemperatureSection";
import TimeAndLocation from "./components/TimeAndLocation";
import Forecast from "./components/Forecast";
import SearchAndLocation from "./components/search/SearchAndLocation";

function App() {
  return (
    <div className="mx-auto max-w-screen-xl mt-10 py-6 px-32 bg-gradient-to-br from-cyan-700 to-blue-800 h-fit shadow-xl shadow-gray-600">
      <TopCities />
      <SearchAndLocation />
      <TimeAndLocation />
      <TemperatureSection />
      <Forecast heading="hourly forecast" />
      <Forecast heading="daily forecast" />
    </div>
  );
}

export default App;
