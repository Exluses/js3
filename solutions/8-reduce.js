// BEGIN
export default function groupBy(objects, property) {
  const result = {};
  for (const object of objects) {
    if (!result[object[property]]) {
      result[object[property]] = [];
    }
    result[object[property]].push(object);
  }
  return result;
}
// END
