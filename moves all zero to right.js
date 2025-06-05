// two loop time complexity = order of N square
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
////////////////////////////