import { SearchIcon } from "lucide-react"
import { AsyncPaginate } from "react-select-async-paginate"
function Search({ onSearchChange, searchData }) {
    const sleep = ms =>
        new Promise(resolve => {
            setTimeout(() => {
                resolve(undefined)
            }, ms)
        })

    async function loadOptions(inputValue) {
        const BASE_URL = "https://geocoding-api.open-meteo.com"
        const VERSION = "v1"
        const NO_OF_CITIES = "count=10"
        const LANGUAGE = "language=en"

        if (inputValue.trim()) {
            const response = await fetch(
                `${BASE_URL}/${VERSION}/search?name=${inputValue.trim()}&${NO_OF_CITIES}&${LANGUAGE}`,
            )

            const responseJSON = response.ok
                ? await response.json()
                : await Promise.reject(response)
            // Sleep for 3s if the responseJSON is undefined
            if (responseJSON.results === undefined) await sleep(3000)

            return {
                options: responseJSON.results.map(city => {
                    return {
                        lat: `${city.latitude}`,
                        lon: `${city.longitude}`,
                        temperature_unit:
                            searchData.temperature_unit || "celsius",
                        label: `${city.name}, ${city.admin1}, ${city.country}`,
                        timezone: `${city.timezone}`,
                    }
                }),
            }
        } else
            return {
                options: [],
            }
    }

    return (
        <>
            <AsyncPaginate
                className="w-full p-2 focus:outline-none shadow-5xl capitalize "
                placeholder="search city..."
                debounceTimeout={500}
                value={searchData}
                onChange={onSearchChange}
                loadOptions={loadOptions}
            />
            <SearchIcon className="text-white cursor-pointer transition ease-out hover:scale-125 text-[32px]" />
        </>
    )
}
export default Search
