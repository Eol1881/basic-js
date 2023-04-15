const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let catCount = 0;
  for (subArr of matrix) { // could have used .reduce() method
    for (let i = 0; i < subArr.length; i++) {
      if (subArr[i] === '^^') catCount++;
    }
  }
  console.log(catCount);
  return catCount;
}

module.exports = {
  countCats
};
