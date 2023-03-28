import { sortBy } from "lodash";
// BEGIN
const takeOldest = (users, count = 1) => {
  const sorted = sortBy(users, (user) => Date.parse(user.birthday));
  return sorted.slice(0, count);
};
export default takeOldest;
// END
