console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

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





sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]) //=> [-1, 150, 160, 170, -1, -1, 180, 190]