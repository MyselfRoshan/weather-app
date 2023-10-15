import getWeatherInfo from "../services/getWeatherInfo";

function TopCities({ setCityWeatherInfo }) {
  const cities = [
    {
      id: 1,
      name: "London",
      info: {
        lat: "51.50853",
        lon: "-0.12574",
        temperature_unit: "celsius",
        label: "London, England, United Kingdom",
        timezone: "Europe/London",
      },
    },
    {
      id: 2,
      name: "Califorina",
      info: {
        lat: "38.62753",
        lon: "-92.56658",
        temperature_unit: "celsius",
        label: "California, Missouri, United States",
        timezone: "America/Chicago",
      },
    },
    {
      id: 3,
      name: "Sydney",
      info: {
        lat: "-33.86785",
        lon: "151.20732",
        temperature_unit: "celsius",
        label: "Sydney, New South Wales, Australia",
        timezone: "Australia/Sydney",
      },
    },
    {
      id: 4,
      name: "Tokyo",
      info: {
        lat: "35.6895",
        lon: "139.69171",
        temperature_unit: "celsius",
        label: "Tokyo, Tokyo, Japan",
        timezone: "Asia/Tokyo",
      },
    },
    {
      id: 5,
      name: "Seoul",
      info: {
        lat: "37.566",
        lon: "126.9784",
        temperature_unit: "celsius",
        label: "Seoul, Seoul, South Korea",
        timezone: "Asia/Seoul",
      },
    },
  ];
  function handleClick(e) {
    cities.filter((city) => {
      if (city.name === e.target.textContent)
        getWeatherInfo(city.info).then((result) => setCityWeatherInfo(result));
    });
  }

  return (
    <section className="flex items-center justify-around py-6">
      {cities.map((city) => {
        return (
          <button
            onClick={(e) => handleClick(e)}
            key={city.id}
            className="text-white text-lg font-medium"
          >
            {city.name}
          </button>
        );
      })}
    </section>
  );
}
export default TopCities;
