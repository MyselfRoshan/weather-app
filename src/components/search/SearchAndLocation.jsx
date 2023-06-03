import { UilLocationPoint, UilSearch } from "@iconscout/react-unicons";
// import { AsyncPaginate } from "react-select-async-paginate";
import Search from "./Search";
// import handleSearchChange from "../../services/handleChange";
import { getWeatherData } from "../../services/weatherApi";
import { useEffect, useState } from "react";
function SearchAndLocation() {
  const [searchData, setSearchData] = useState(null);
  function handleSearchChange(searchData) {
    setSearchData(searchData);
    const BASE_URL = "https://api.open-meteo.com";
    const VERSION = "v1";
    // const WEATHER_API_URL = `${BASE_URL}/${VERSION}/forecast?latitude=${searchData.lat}&longitude=${searchData.lon}&hourly=temperature_2m&temperature_unit=${searchData.temperature_unit}`;
    const WEATHER_API_URL = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather`;

    fetch(WEATHER_API_URL).then((response) =>
      response.ok
        ? console.log(response.json())
        : Promise.reject(response).catch((error) => console.log(error)),
    );
  }
  // ! Add User current location on page load
  function geoFindMe() {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
      return;
    }
    function success(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      console.log(longitude, latitude);
      setSearchData({ lat: latitude, lon: longitude });
      // reverseGeocodingWithGoogle(latitude, longitude);
    }
    function error() {
      console.log("Unable to retrieve your location");
    }
    navigator.geolocation.getCurrentPosition(success, error);
  }
  // Integrate london when page load and toggle temperature units
  useEffect(
    () =>
      setSearchData({ lat: 51.51, lon: -0.13, temperature_unit: "celsius" }),
    [],
  );

  function handleTemperatureUnitToCelsius() {
    setSearchData((prevSearchData) => {
      return {
        ...prevSearchData,
        temperature_unit: "celsius",
      };
    });
  }

  function handleTemperatureUnitToFahrenheit() {
    setSearchData((prevSearchData) => {
      return {
        ...prevSearchData,
        temperature_unit: "fahrenheit",
      };
    });
  }
  console.log(searchData);
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
          onClick={handleTemperatureUnitToCelsius}
        >
          &deg;C
        </button>
        <p className="text-white text-xl mx-2">|</p>
        <button
          className="text-white text-xl cursor-pointer transition ease-out hover:scale-125"
          onClick={handleTemperatureUnitToFahrenheit}
        >
          &deg;F
        </button>
      </div>
    </section>
  );
}
export default SearchAndLocation;
