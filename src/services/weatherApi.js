// https://api.open-meteo.com/v1/forecast?latitude=27.70169&longitude=85.3206&hourly=temperature_2m
const BASE_URL = "https://api.open-meteo.com";
const VERSION = "v1";

export const getWeatherData = (LATITUDE, LONGITUDE, TEMPERATURE_UNIT) => {
  const url = new URL(
    `${BASE_URL}/${VERSION}/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&hourly=temperature_2m&temperature_unit=${TEMPERATURE_UNIT}`,
  );
  return url;
};
