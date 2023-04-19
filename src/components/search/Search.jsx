import { AsyncPaginate } from "react-select-async-paginate";
import { UilSearch } from "@iconscout/react-unicons";
import { useState } from "react";
function Search() {
  const [search, setSearch] = useState(null);

  function handleChange(searchData) {
    setSearch(searchData);
  }
  handleChange();
  console.log(search);
  async function loadOptions(inputValue) {
    const BASE_URL = "https://geocoding-api.open-meteo.com";
    const VERSION = "v1";
    const NO_OF_CITIES = "count=10";
    const LANGUAGE = "language=en";
    const response = await fetch(
      `${BASE_URL}/${VERSION}/search?name=${inputValue}&${NO_OF_CITIES}&${LANGUAGE}`,
    );
    const responseJSON = response.ok
      ? await response.json()
      : Promise.reject(response);

    console.log(responseJSON.results);
    return {
      options: responseJSON.results.map((city) => {
        return {
          lat: `${city.latitude}`,
          lon: `${city.longitude}`,
          label: `${city.name}, ${city.country_code}`,
        };
      }),
    };
  }
  return (
    <>
      <AsyncPaginate
        className="w-full p-2 focus:outline-none shadow-xl capitalize placeholder:lowercase"
        placeholder="search city..."
        debounceTimeout={600}
        value={search}
        onChange={handleChange}
        loadOptions={loadOptions}
      />
      <UilSearch
        size={25}
        className="text-white cursor-pointer transition ease-out hover:scale-125"
      />
    </>
  );
}
export default Search;
