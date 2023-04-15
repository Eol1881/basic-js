const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let count = 0;
  count += matrix[0].reduce((acc, currValue) => {return acc + currValue}, 0); // first row always adds

  for (let i = 1; i < matrix.length; i++) {
    const mRow = matrix[i];
    for (let j = 0; j < mRow.length; j++) {
      const element = mRow[j];
      const upperRow = matrix[i - 1];
      if (upperRow[j] === 0) continue;
      else count += element;
    }
  }
  console.log(count);
  return count;
}

module.exports = {
  getMatrixElementsSum
};
