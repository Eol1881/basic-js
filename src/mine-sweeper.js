const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let myMatrix = new Array(matrix.length);
  for (let i = 0; i < matrix.length; i++) {
    myMatrix[i] = new Array(matrix[i].length).fill(0);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const element = matrix[i][j];
      if (element === false) continue;

      if (myMatrix[i + 1]) {
        myMatrix[i + 1][j - 1]++
        myMatrix[i + 1][j + 0]++
        myMatrix[i + 1][j + 1]++
      }

      myMatrix[i][j - 1]++
      myMatrix[i][j + 1]++

      if (myMatrix[i - 1]) {
        myMatrix[i - 1][j - 1]++
        myMatrix[i - 1][j + 0]++
        myMatrix[i - 1][j + 1]++
      }
    }
  }
  console.log(`xxxxxxxxxxxxxxxxxxxxxxxxxxxx`);
  for (let i = 0; i < myMatrix.length; i++) {
    console.log(myMatrix[i].join(' '));
  }
  return myMatrix;
}

module.exports = {
  minesweeper
};
