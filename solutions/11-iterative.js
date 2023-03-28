const smallestDivisor = (num) => {
  // BEGIN
  const iter = (acc) => {
    if (acc > num / 2) {
      return num;
    }
    if (num % acc === 0) {
      return acc;
    }
    return iter(acc + 1);
  };
  return iter(2);
  // END
};
// END
export default smallestDivisor;
