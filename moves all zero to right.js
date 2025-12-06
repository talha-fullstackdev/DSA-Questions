const array = [7, 4, 3, 6, 0, 2, 0, 7, 0, 2, 0, 3, 0, 8, -1, -2];
for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] == 0 ) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}
console.log(array);



///////////////////////////////////////////////////
const movesZeroToEnd = (array) => {
  let nonZeroIndex = 0;
  // Move all non-zeros forward
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      array[nonZeroIndex] = array[i];
      nonZeroIndex++;
    }
  }
  // Fill remaining with zeros
  for (let i = nonZeroIndex; i < array.length; i++) {
    array[i] = 0;
  }

  return array;
}

const check = movesZeroToEnd([0,0,0,0,2,3,4,5]);
console.log(check); // [2,3,4,5,0,0,0,0]
