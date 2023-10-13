import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  UilTemperaturePlus,
  UilTemperatureMinus,
} from "@iconscout/react-unicons";

function TemperatureSection({ cityWeatherInfo }) {
  console.log(cityWeatherInfo);
  return (
    <section>
      <p className="flex flex-row items-center justify-center py-6 text-xl text-cyan-300">
        Cloudy
      </p>
      <div className="flex flex-row items-center justify-between py-3 text-white">
        <img
          src="https://openweathermap.org/img/wn/01d@2x.png"
          alt=""
          className="w-20"
        />
        <p className="text-5xl">{`${cityWeatherInfo.current.actual_temp}°`}</p>
        <div className="flex flex-col space-y-2 justify-center">
          <div className="flex font-light text-sm items-center justify-start">
            <UilTemperature size={20} className="mr-1" />
            Real feel:
            <span className="font-medium ml-1 ">
              {`${cityWeatherInfo.current.apparent_temp}°`}
            </span>
          </div>
          <div className="flex font-light text-sm items-center justify-start">
            <UilTear size={20} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">
              {`${cityWeatherInfo.current.humidity}%`}
            </span>
          </div>
          <div className="flex font-light text-sm items-center justify-start">
            <UilWind size={20} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">
              {`${cityWeatherInfo.current.windspeed} km/h`}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center py-3 text-white">
        <div className="flex font-light text-sm items-center justify-start">
          <UilSun size={20} className="mr-1" />
          Sun Rise:
          <span className="font-medium ml-1 ">
            {`${cityWeatherInfo.sunrise.match(/\d\d:\d\d/)[0]}`}
          </span>
        </div>
        <p className="font-light mx-2">|</p>
        <div className="flex font-light text-sm items-center justify-start">
          <UilSunset size={20} className="mr-1" />
          Sun Set:
          <span className="font-medium ml-1 ">
            {`${cityWeatherInfo.sunset.match(/\d\d:\d\d/)[0]}`}
          </span>
        </div>
        <p className="font-light mx-2">|</p>
        <div className="flex font-light text-sm items-center justify-start">
          <UilTemperaturePlus size={20} className="mr-1" />
          High:
          <span className="font-medium ml-1 ">
            {`${cityWeatherInfo.max_temp}°`}
          </span>
        </div>
        <p className="font-light mx-2">|</p>
        <div className="flex font-light text-sm items-center justify-start">
          <UilTemperatureMinus size={20} className="mr-1" />
          Low:
          <span className="font-medium ml-1 ">
            {`${cityWeatherInfo.min_temp}°`}
          </span>
        </div>
      </div>
    </section>
  );
}
export default TemperatureSection;
