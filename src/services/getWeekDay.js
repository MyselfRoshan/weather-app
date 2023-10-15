function getDayName(dateStr) {
  let date = new Date(dateStr);
  let locale = navigator.language || navigator.languages[0];
  //   return date.toLocaleDateString(locale, { weekday: "long" });
  return date.toLocaleDateString(locale, { weekday: "short" });
}
export default getDayName;
