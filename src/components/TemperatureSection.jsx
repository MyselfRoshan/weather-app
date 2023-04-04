import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function TemperatureSection() {
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
        <p className="text-5xl">19&deg;</p>
        <div className="flex flex-col space-y-2 justify-center">
          <div className="flex font-light text-sm items-center justify-start">
            <UilTemperature size={18} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1 ">
              {/* {`${feels_like.toFixed()}°`} */}
              32&deg;
            </span>
          </div>
          <div className="flex font-light text-sm items-center justify-start">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">
              {/* {`${humidity.toFixed()}%`} */}
              32%
            </span>
          </div>
          <div className="flex font-light text-sm items-center justify-start">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">
              {/* {`${speed.toFixed()} km/h`} */}
              32 km/h
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default TemperatureSection;
