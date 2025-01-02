import {
    DropletIcon,
    SunIcon,
    SunsetIcon,
    ThermometerIcon,
    ThermometerSnowflakeIcon,
    ThermometerSunIcon,
    WindIcon,
} from "lucide-react"
import convertTo12Hr from "../services/covertTo12Hr"

function TemperatureSection({ cityWeatherInfo }) {
    return (
        <section>
            <p className="flex flex-row items-center justify-center py-6 text-xl text-cyan-300">
                {cityWeatherInfo.current.wmo_description.description}
            </p>
            <div className="flex flex-row items-center justify-between py-3 text-white">
                <img
                    src={cityWeatherInfo.current.wmo_description.image}
                    alt={cityWeatherInfo.current.wmo_description.description}
                    className="w-20"
                />
                <p className="text-5xl ms-16">{`${Math.round(
                    cityWeatherInfo.current.actual_temp,
                )}°`}</p>
                <div className="flex flex-col space-y-2 justify-center">
                    <div className="flex font-light text-sm items-center justify-start">
                        <ThermometerIcon size={24} className="mr-1" />
                        Real feel:
                        <span className="font-medium ml-1 ">
                            {`${Math.round(
                                cityWeatherInfo.current.apparent_temp,
                            )}°`}
                        </span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-start">
                        <DropletIcon size={24} className="mr-1" />
                        Humidity:
                        <span className="font-medium ml-1">
                            {`${cityWeatherInfo.current.humidity}%`}
                        </span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-start">
                        <WindIcon size={24} className="mr-1" />
                        Wind:
                        <span className="font-medium ml-1">
                            {`${cityWeatherInfo.current.windspeed} km/h`}
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center py-3 text-white">
                <div className="flex font-light text-sm items-center justify-start">
                    <SunIcon size={18} className="mr-1" />
                    Sun Rise:
                    <span className="font-medium ml-1 ">
                        {`${convertTo12Hr(
                            cityWeatherInfo.sunrise.match(/\d\d:\d\d/)[0],
                        )}`}
                    </span>
                </div>
                <p className="font-light mx-2">|</p>
                <div className="flex font-light text-sm items-center justify-start">
                    <SunsetIcon size={18} className="mr-1" />
                    Sun Set:
                    <span className="font-medium ml-1 ">
                        {`${convertTo12Hr(
                            cityWeatherInfo.sunset.match(/\d\d:\d\d/)[0],
                        )}`}
                    </span>
                </div>
                <p className="font-light mx-2">|</p>
                <div className="flex font-light text-sm items-center justify-start">
                    <ThermometerSunIcon size={18} className="mr-1" />
                    High:
                    <span className="font-medium ml-1 ">
                        {`${Math.round(cityWeatherInfo.max_temp)}°`}
                    </span>
                </div>
                <p className="font-light mx-2">|</p>
                <div className="flex font-light text-sm items-center justify-start">
                    <ThermometerSnowflakeIcon size={18} className="mr-1" />
                    Low:
                    <span className="font-medium ml-1 ">
                        {`${Math.round(cityWeatherInfo.min_temp)}°`}
                    </span>
                </div>
            </div>
        </section>
    )
}
export default TemperatureSection
