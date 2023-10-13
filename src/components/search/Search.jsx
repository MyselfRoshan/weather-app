import { AsyncPaginate } from "react-select-async-paginate";
import { UilSearch } from "@iconscout/react-unicons";
import { useState } from "react";
function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);

  function handleChange(searchData) {
    setSearch(searchData);
    onSearchChange(searchData);
  }
  const sleep = (ms) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(undefined);
      }, ms);
    });

  async function loadOptions(inputValue) {
    const BASE_URL = "https://geocoding-api.open-meteo.com";
    const VERSION = "v1";
    const NO_OF_CITIES = "count=10";
    const LANGUAGE = "language=en";

    if(inputValue.trim()){
      const response = await fetch(
        `${BASE_URL}/${VERSION}/search?name=${inputValue}&${NO_OF_CITIES}&${LANGUAGE}`,
      );

      const responseJSON = response.ok
        ? await response.json()
        : await Promise.reject(response);
      // Sleep for 3s if the responseJSON is undefined
      if (responseJSON.results === undefined) await sleep(3000);
      console.log(responseJSON.results);
      return {
        options: responseJSON.results.map((city) => {
          return {
            lat: `${city.latitude}`,
            lon: `${city.longitude}`,
            temperature_unit: "celsius",
            label: `${city.name}, ${city.admin1}, ${city.country_code}`,
            timezone:`${city.timezone}`
            // Add image of flag in the select options
            /* (
                <img
                  src="https://flagcdn.com/16x12/za.png"
                  srcset="https://flagcdn.com/32x24/za.png 2x, https://flagcdn.com/48x36/za.png 3x"
                  width="16"
                  height="12"
                  alt="South Africa"
                />
              )  */
          };
        }),
      };
    }
  }

  return (
    <>
      <AsyncPaginate
        className="w-full p-2 focus:outline-none shadow-5xl capitalize "
        placeholder="search city..."
        debounceTimeout={500}
        value={search}
        onChange={handleChange}
        loadOptions={loadOptions}

        // closeMenuOnSelect={false}
        // menuIsOpen={true}
        // onMenuOpen={onMenuOpen}
      />
      <UilSearch
        size={25}
        className="text-white cursor-pointer transition ease-out hover:scale-125"
      />
    </>
  );
}
export default Search;
