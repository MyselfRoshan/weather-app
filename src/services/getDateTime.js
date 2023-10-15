import convertTo12Hr from "./covertTo12Hr";

export default function getDateTime(iso8601_string) {
  const d = new Date(iso8601_string);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[d.getMonth()];
  let day = days[d.getDay()];
  let date = d.getDate();
  let year = d.getFullYear();
  let full = `${day}, ${date} ${month} ${year}`;
  let time = convertTo12Hr(
    `${d.getHours().toString().padStart(2, "0")}:${d
      .getMinutes()
      .toString()
      .padStart(2, "0")}`
  );
  return {
    month: month,
    day: day,
    date: date,
    year: year,
    time: time,
    full: full,
  };
}
