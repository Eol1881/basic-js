const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let result = [];
  let filteredArr = arr.filter(x => x !== -1).sort((a, b) => a - b)
  console.log(filteredArr);
  let filteredIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === -1) {
      result.push(-1);
      continue;
    }

    result.push(filteredArr[filteredIndex]);
    filteredIndex++;

  }
  console.log(result);
  return result;
}


module.exports = {
  sortByHeight
};
