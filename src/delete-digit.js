const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  nStr = n.toString();
  let result = 0;
  for (let i = 0; i < nStr.length; i++) {
    let x = nStr.replace(nStr[i], '');
    x > result ? result = x : null;
  }
  console.log(result);
  return parseInt(result);
}

module.exports = {
  deleteDigit
};
