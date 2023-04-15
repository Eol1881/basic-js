const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let x = n.toString();
  let count = 0;
  for (let i = 0; i < x.length; i++) {
    const char = parseInt(x[i]);
    count += char;
  }

  if (count.toString().length === 1) {
    console.log(count);
    return count
  } else {
    console.log(parseInt(x[x.length - 1]));
    return parseInt(x[x.length - 1]);
  }
}

module.exports = {
  getSumOfDigits
};
