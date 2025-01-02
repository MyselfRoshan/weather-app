import getDateTime from "../services/getDateTime"
import getDayName from "../services/getWeekDay"
import getWMOIcon from "../services/wmo_description"

function HourlyForecast({ heading, time, temp, is_day, weathercode }) {
  let dayName
  let wmo_description
  if (heading.includes("daily")) {
    wmo_description = weathercode.map(weathercode => {
      return getWMOIcon(weathercode, is_day)
    })
    dayName = time.map(t => {
      return getDayName(t)
    })
  } else {
    dayName = time.map(t => {
      return getDateTime(t).time
    })

    wmo_description = weathercode.map((w, i) => {
      return getWMOIcon(w, is_day[i])
    })
  }

  return (
    <div className="my-6">
      <h2 className="text-medium text-white uppercase">{heading}</h2>
      <hr className="my-2" />
      <div className="flex items-center justify-between text-white">
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm text-white">{dayName[0]}</p>
          <img
            src={wmo_description[0].image}
            alt={wmo_description[0].description}
            className="w-20 my-1"
          />
          <p className="font-medium">{Math.round(temp[0])}°</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm text-white">{dayName[1]}</p>
          <img
            src={wmo_description[1].image}
            alt={wmo_description[1].description}
            className="w-20 my-1"
          />
          <p className="font-medium">{Math.round(temp[1])}°</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm text-white">{dayName[2]}</p>
          <img
            src={wmo_description[2].image}
            alt={wmo_description[2].description}
            className="w-20 my-1"
          />
          <p className="font-medium">{Math.round(temp[2])}°</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm text-white">{dayName[3]}</p>
          <img
            src={wmo_description[3].image}
            alt={wmo_description[3].description}
            className="w-20 my-1"
          />
          <p className="font-medium">{Math.round(temp[3])}°</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm text-white">{dayName[4]}</p>
          <img
            src={wmo_description[4].image}
            alt={wmo_description[4].description}
            className="w-20 my-1"
          />
          <p className="font-medium">{Math.round(temp[4])}°</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm text-white">{dayName[5]}</p>
          <img
            src={wmo_description[5].image}
            alt={wmo_description[5].description}
            className="w-20 my-1"
          />
          <p className="font-medium">{Math.round(temp[5])}°</p>
        </div>
      </div>
    </div>
  )
}
export default HourlyForecast
