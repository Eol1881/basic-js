const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const longestString = s1.length >= s2.length ? s1 : s2;
  const shortestString = longestString === s1 ? s2 : s1;
  let count = 0;
  const shortestSet = [...new Set(shortestString)].join('');

  for (let i = 0; i < shortestSet.length; i++) {
    const regex = new RegExp(shortestSet[i], 'g');
    if (!longestString.includes(shortestSet[i])) continue;

    inShortest = shortestString.match(regex).length || 0;
    inLongest = longestString.match(regex).length || 0;
    count += Math.min(inShortest, inLongest);
  }
  console.log(count);
  return count;
}

module.exports = {
  getCommonCharacterCount
};
