module.exports = function check(str, bracketsConfig) {
  let array = Object.fromEntries(bracketsConfig);
  let result = [];
  for (let item of str.split('')) {
    if (result[0] === item) {
      result.shift();
    } else if (array[item]) {
      result.unshift(array[item])
    } else {
      return false;
    }
  }
  if (result.length === 0) {
    return true;
  } else {
    return false;
  }
}