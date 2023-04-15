const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char !== str[i + 1]) result += char;
    else {
      let counter = 1;
      let j = i;
      while (str[i] === str[i + 1]) {
        i++
        counter++;
      }
      result += counter + str[i];
    }
  }
  console.log('res:', result);
  return result;
}

module.exports = {
  encodeLine
};
