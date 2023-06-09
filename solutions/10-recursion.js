const sequenceSum = (begin, end) => {
  // BEGIN
  if (begin > end) {
    return NaN;
  } else if (begin === end) {
    return begin;
  }
  return begin + sequenceSum(begin + 1, end);
};
export default sequenceSum;
