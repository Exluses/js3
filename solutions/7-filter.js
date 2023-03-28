// BEGIN
const getGirlFriends = (users) =>
  users
    .flatMap(({ friends }) => friends)
    .filter(({ gender }) => gender === "female");

export default getGirlFriends;
// END
