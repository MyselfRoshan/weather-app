function HourlyForecast({ heading, time, temp }) {
  console.log(time);
  return (
    <div className="my-6">
      <h2 className="text-medium text-white uppercase">{heading}</h2>
      <hr className="my-2" />
      <div className="flex items-center justify-between text-white">
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm text-white">{time[0]}</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="w-20 my-1"
          />
          <p className="font-medium">{temp[0]}°</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm text-white">{time[1]}</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="w-20 my-1"
          />
          <p className="font-medium">{temp[1]}°</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm text-white">{time[2]}</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="w-20 my-1"
          />
          <p className="font-medium">{temp[2]}°</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm text-white">{time[3]}</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="w-20 my-1"
          />
          <p className="font-medium">{temp[3]}°</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm text-white">{time[4]}</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="w-20 my-1"
          />
          <p className="font-medium">{temp[4]}°</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm text-white">{time[5]}</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="w-20 my-1"
          />
          <p className="font-medium">{temp[5]}°</p>
        </div>
      </div>
    </div>
  );
}
export default HourlyForecast;
