export function formatDate(date) {
  const newDate = new Date(date);
  const options = { month: "short", day: "numeric", year: "numeric" };
  const [day, month, year] = newDate
    .toLocaleDateString("es-us", options)
    .split(" ");
  return [day, month, year];
}
