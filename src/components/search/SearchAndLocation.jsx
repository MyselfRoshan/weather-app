import { MapPinIcon } from "lucide-react"
import Search from "./Search"
function SearchAndLocation({ searchData, setSearchData }) {
    function handleSearchChange(searchData) {
        setSearchData(searchData)
    }

    function geoFindMe() {
        if (!navigator.geolocation) {
            console.log("Geolocation is not supported by your browser")
            return
        }
        function success(position) {
            var latitude = position.coords.latitude
            var longitude = position.coords.longitude

            setSearchData(prevSearchData => ({
                ...prevSearchData,
                lat: latitude,
                lon: longitude,
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                label: "Kathmandu, Bagmati Province, Nepal",
            }))
        }
        function error() {
            console.log("Unable to retrieve your current location")
        }
        navigator.geolocation.getCurrentPosition(success, error)
        console.log(searchData, "error", error())
    }
    console.log("new", searchData)

    function updateTemperatureUnit(to) {
        setSearchData(prevSearchData => {
            return {
                ...prevSearchData,
                temperature_unit: to,
            }
        })
    }

    return (
        <section className="flex flex-row py-6">
            <div className="flex flex-row justify-center items-center w-3/4 space-x-4">
                <Search
                    onSearchChange={handleSearchChange}
                    searchData={searchData ?? {}}
                    setSearchData={setSearchData}
                />
                <button onClick={geoFindMe} type="button">
                    <MapPinIcon className="text-white cursor-pointer transition ease-out hover:scale-125 text-[32px]" />
                </button>
            </div>
            <div className="flex flex-row items-center justify-center w-1/4 ">
                <button
                    className="text-white text-xl cursor-pointer transition ease-out hover:scale-125"
                    onClick={() => updateTemperatureUnit("celsius")}
                >
                    &deg;C
                </button>
                <p className="text-white text-xl mx-2">|</p>
                <button
                    className="text-white text-xl cursor-pointer transition ease-out hover:scale-125"
                    onClick={() => updateTemperatureUnit("fahrenheit")}
                >
                    &deg;F
                </button>
            </div>
        </section>
    )
}
export default SearchAndLocation
