import { useEffect, useState } from "react"

import Forecast from "./components/Forecast"
import SearchAndLocation from "./components/search/SearchAndLocation"
import TemperatureSection from "./components/TemperatureSection"
import TimeAndLocation from "./components/TimeAndLocation"
import TopCities from "./components/TopCities"
import getWeatherInfo from "./services/getWeatherInfo"

function App() {
    const [cityWeatherInfo, setCityWeatherInfo] = useState(null)
    const [searchData, setSearchData] = useState({
        lat: "51.50853",
        lon: "-0.12574",
        temperature_unit: "celsius",
        label: "London, England, United Kingdom",
        timezone: "Europe/London",
    })

    useEffect(() => {
        const fetchData = async () => {
            const result = await getWeatherInfo(searchData)
            setCityWeatherInfo(result)
        }
        fetchData()
    }, [searchData])
    return (
        <div className="mx-auto max-w-screen-xl my-10 py-6 px-32 bg-gradient-to-br from-cyan-700 to-blue-800 h-fit shadow-xl shadow-gray-600">
            <TopCities setSearchData={setSearchData} />
            <SearchAndLocation
                searchData={searchData}
                setSearchData={setSearchData}
            />
            {cityWeatherInfo ? (
                <>
                    <TimeAndLocation cityWeatherInfo={cityWeatherInfo} />
                    <TemperatureSection cityWeatherInfo={cityWeatherInfo} />

                    <Forecast
                        heading="hourly forecast"
                        time={cityWeatherInfo.hourly.time}
                        temp={cityWeatherInfo.hourly.temp}
                        is_day={cityWeatherInfo.hourly.is_day}
                        weathercode={cityWeatherInfo.hourly.weathercode}
                    />
                    <Forecast
                        heading="daily forecast"
                        time={cityWeatherInfo.daily.time}
                        temp={cityWeatherInfo.daily.temperature_2m_max}
                        is_day={cityWeatherInfo.current.is_day}
                        weathercode={cityWeatherInfo.daily.weathercode}
                    />
                </>
            ) : (
                <div className="flex items-center justify-center">
                    <p className="text-white text-3xl font-medium">
                        Loading...
                    </p>
                </div>
            )}
        </div>
    )
}

export default App
