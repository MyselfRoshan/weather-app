import { UilLocationPoint, UilSearch } from "@iconscout/react-unicons";
// import { AsyncPaginate } from "react-select-async-paginate";
import Search from "./Search";
// import handleSearchChange from "../../services/handleChange";
import { getWeatherData } from "../../services/weatherApi";
import { useEffect, useState } from "react";
function SearchAndLocation() {
  //? Call weather api ehen celcis or fahrenheit button is clicked
  const [temperatureUnit, setTemperatureUnit] = useState("celsius");
  const [searchData, setSearchData] = useState(null);
  // useEffect(() => handleSearchChange, [temperatureUnit]);
  function handleSearchChange(searchData) {
    setSearchData(searchData);
    const BASE_URL = "https://api.open-meteo.com";
    const VERSION = "v1";
    const WEATHER_API_URL = `${BASE_URL}/${VERSION}/forecast?latitude=${searchData.lat}&longitude=${searchData.lon}&hourly=temperature_2m&temperature_unit=${searchData.temperature_unit}`;

    fetch(WEATHER_API_URL).then((response) =>
      response.ok
        ? console.log(response.json())
        : Promise.reject(response).catch((error) => console.log(error)),
    );
  }

  function handleTemperatureUnit(e) {
    // setTemperatureUnit(e.target.innerText === "°C" ? "celsius" : "fahrenheit");
    // handleSearchChange(searchData, temperatureUnit);
    setSearchData((prevSearchData) => {
      return {
        ...prevSearchData,
        temperature_unit:
          e.target.innerText === "°C" ? "celsius" : "fahrenheit",
      };
    });
  }
  console.log(temperatureUnit);
  return (
    <section className="flex flex-row py-6">
      <div className="flex flex-row justify-center items-center w-3/4 space-x-4">
        <Search onSearchChange={handleSearchChange} />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
      <div className="flex flex-row items-center justify-center w-1/4 ">
        <button
          className="text-white text-xl cursor-pointer transition ease-out hover:scale-125"
          onClick={handleTemperatureUnit}
        >
          &deg;C
        </button>
        <p className="text-white text-xl mx-2">|</p>
        <button
          className="text-white text-xl cursor-pointer transition ease-out hover:scale-125"
          onClick={handleTemperatureUnit}
        >
          &deg;F
        </button>
      </div>
    </section>
  );
}
export default SearchAndLocation;
