// BEGIN
export default function getChildren1(users) {
  const callback = function (user) {
    return user.children;
  };

  const children = users.map(callback);
  const result = [];
  children.forEach((child) => {
    if (child.length > 0) {
      child.forEach((elem) => {
        result.push(elem);
      });
    }
  });
  return result;
}
// END
