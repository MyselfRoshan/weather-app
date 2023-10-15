import { UilLocationPoint, UilSearch } from "@iconscout/react-unicons";
import getWeatherInfo from "../../services/getWeatherInfo";
import Search from "./Search";
import { useEffect, useState } from "react";
function SearchAndLocation({ setCityWeatherInfo }) {
  const [searchData, setSearchData] = useState({
    lat: "51.50853",
    lon: "-0.12574",
    temperature_unit: "fahrenheit",
    label: "London, England, United Kingdom",
    timezone: "Europe/London",
  });

  function handleSearchChange(searchData) {
    setSearchData(searchData);
    getWeatherInfo(searchData).then((result) => setCityWeatherInfo(result));
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

      setSearchData((prevSearchData) => {
        return {
          ...prevSearchData,
          lat: latitude,
          lon: longitude,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          label: "Kathmandu, Bagmati Province, Nepal",
        };
      });
    }
    function error() {
      console.log("Unable to retrieve your location");
    }
    navigator.geolocation.getCurrentPosition(success, error);
  }

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

  useEffect(() => {
    getWeatherInfo(searchData).then((result) => setCityWeatherInfo(result));
  }, [searchData]);

  return (
    <section className="flex flex-row py-6">
      <div className="flex flex-row justify-center items-center w-3/4 space-x-4">
        <Search
          onSearchChange={handleSearchChange}
          searchData={searchData}
          setSearchData={setSearchData}
        />
        <button onClick={geoFindMe} type="button">
          <UilLocationPoint
            size={25}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
          />
        </button>
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
