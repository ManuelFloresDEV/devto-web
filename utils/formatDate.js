export function formatDate(date) {
  const newDate = new Date(date);
  const options = { month: "short", day: "numeric" };
  const [day, month] = newDate.toLocaleDateString("es-us", options).split(" ");
  return `${month} ${day}`;
}
