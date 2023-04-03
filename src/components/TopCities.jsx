function TopCities() {
  const cities = [
    {
      id: 1,
      name: "London",
    },
    {
      id: 2,
      name: "Califorina",
    },
    {
      id: 3,
      name: "Islambad",
    },
    {
      id: 4,
      name: "Tokyo",
    },
    {
      id: 5,
      name: "Seoul",
    },
  ];

  return (
    <section className="flex items-center justify-around py-6">
      {cities.map((city) => {
        return (
          <button key={city.id} className="text-white text-lg font-medium">
            {city.name}
          </button>
        );
      })}
    </section>
  );
}
export default TopCities;
