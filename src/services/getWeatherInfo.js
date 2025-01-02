import getDateTime from "./getDateTime"
import getWMOIcon from "./wmo_description"

async function getWeatherInfo(city) {
    const { lat, lon, temperature_unit, label, timezone } = city
    const BASE_URL = "https://api.open-meteo.com"
    const VERSION = "v1"
    const CURRENT_WEATHER =
        "&current=temperature_2m,relativehumidity_2m,apparent_temperature,windspeed_10m,weathercode,is_day"
    const HOURLY_WEATHER = "&hourly=temperature_2m,weathercode,is_day"
    const DAILY_WEATHER =
        "&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,weathercode"
    const WEATHER_API_URL = `${BASE_URL}/${VERSION}/forecast?latitude=${lat}&longitude=${lon}&temperature_unit=${temperature_unit}&timezone=${timezone}${CURRENT_WEATHER}${HOURLY_WEATHER}${DAILY_WEATHER}&forecast_days=6`

    const response = await fetch(WEATHER_API_URL)
    const weatherData = response.ok
        ? await response.json()
        : await Promise.reject(response)

    function getHourlyWeatherData(weatherData) {
        let hourly = {
            time: [],
            temp: [],
            weathercode: [],
            is_day: [],
        }

        let NO_OF_HOURS_TO_DISPLAY = 0
        weatherData.hourly.time.forEach((t, i) => {
            const CURRENT_HOUR_IN_TARGET_LOCATION = new Date(
                new Date().toLocaleString("en-US", {
                    timeZone: timezone,
                }),
            ).getHours()
            const FETCHED_HOUR = new Date(t).getHours()
            if (
                CURRENT_HOUR_IN_TARGET_LOCATION <= FETCHED_HOUR &&
                NO_OF_HOURS_TO_DISPLAY < 6
            ) {
                hourly.time.push(weatherData.hourly.time[i])
                hourly.temp.push(weatherData.hourly.temperature_2m[i])
                hourly.weathercode.push(weatherData.hourly.weathercode[i])
                hourly.is_day.push(weatherData.hourly.is_day[i])
                NO_OF_HOURS_TO_DISPLAY++
            }
        })

        return hourly
    }

    //   Filter temperature after current temperature
    return {
        country: label,
        timezone: weatherData.timezone,
        max_temp: weatherData.daily.temperature_2m_max[0],
        min_temp: weatherData.daily.temperature_2m_min[0],
        sunrise: weatherData.daily.sunrise[0],
        sunset: weatherData.daily.sunset[0],
        current: {
            is_day: weatherData.current.is_day,
            wmo_description: getWMOIcon(
                weatherData.current.weathercode,
                weatherData.current.is_day,
            ),
            actual_temp: weatherData.current.temperature_2m,
            apparent_temp: weatherData.current.apparent_temperature,
            humidity: weatherData.current.relativehumidity_2m,
            locale_time: getDateTime(weatherData.current.time),
            windspeed: weatherData.current.windspeed_10m,
            weathercode: weatherData.current.weathercode,
        },
        hourly: getHourlyWeatherData(weatherData),
        daily: weatherData.daily,
    }
}

export default getWeatherInfo
