import _ from "lodash";

// BEGIN
export default average = (...value) => {
  if (_.isEmpty(value)) {
    return null;
  }
  const sum = _.sum(value);
  return sum / value.length;
};
// END
