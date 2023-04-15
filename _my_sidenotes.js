console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

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



//For 100, the result should be 1 (1 + 0 + 0 = 1)
getSumOfDigits(100) //=> 1

//For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
getSumOfDigits(91) //=> 1

getSumOfDigits(35) // 8
getSumOfDigits(99) // 9
getSumOfDigits(123) // 6
