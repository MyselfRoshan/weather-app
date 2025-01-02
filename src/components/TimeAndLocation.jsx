function TimeAndLocation({ cityWeatherInfo }) {
    return (
        <div>
            <div className="flex items-center justify-center my-6">
                <p className="text-white text-xl font-extralight">
                    {cityWeatherInfo.current.locale_time.full}
                    {` | `}
                    Locale Time: {cityWeatherInfo.current.locale_time.time}
                </p>
            </div>

            <div className="flex items-center justify-center my-3">
                <p className="text-white text-3xl font-medium">
                    {cityWeatherInfo.country}
                </p>
            </div>
        </div>
    )
}
export default TimeAndLocation
