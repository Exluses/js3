// BEGIN
export default function sayPrimeOrNot(num) {
  {
    if (simplecount(num)) {
      console.log("yes");
    } else {
      console.log("no");
    }
  }
  function simplecount(n) {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}
console.log(sayPrimeOrNot(5));
// END
