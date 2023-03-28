const run = (text) => {
  // BEGIN
  function takeLast(str, num) {
    if (str === "" || num > str.length) {
      return null;
    } else {
      return str.slice(-num).split("").reverse().join("");
    }
  }
  // END
  return takeLast(text, 4);
};

export default run;
