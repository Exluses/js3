// BEGIN
export default convert = (...dates) => {
  if (!dates.length) {
    return [];
  }
  const convertedDates = [];
  for (const date of dates) {
    const [year, month, day] = date;
    const convertedDate = new Date(year, month, day).toDateString();
    convertedDates.push(convertedDate);
  }
  return convertedDates;
};
// END
