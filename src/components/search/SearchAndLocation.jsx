import { UilLocationPoint, UilSearch } from "@iconscout/react-unicons";
import getWeatherInfo from "../../services/getWeatherInfo";
import Search from "./Search";
import { useEffect, useState } from "react";
function SearchAndLocation({setCityWeatherInfo}) {
  // const [searchData, setSearchData] = useState(null);
  const [searchData, setSearchData] = useState({});
  async function handleSearchChange(searchData) {
    setSearchData(searchData);
    getWeatherInfo(searchData).then(result=>setCityWeatherInfo(result))
    // function convertTime (isoTime) {
    //   var hours   = parseInt(isoTime.substring(0, 2), 10),
    //       minutes = isoTime.substring(3, 5),
    //       ampm    = 'am';
    
    //   if (hours == 12) {
    //     ampm = 'pm';
    //   } else if (hours == 0) {
    //     hours = 12;
    //   } else if (hours > 12) {
    //     hours -= 12;
    //     ampm = 'pm';
    //   }
    
    //   return hours + ':' + minutes + ' ' + ampm;
    // }
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

  // useEffect(()=>  setCityWeatherInfo(getWeatherInfo(searchData)) ,[])


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
