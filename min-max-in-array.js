///////////////// min value in array
let array = [6, 5, 3, 2, 5, 6, 7, 1, 0, -1, 100];
let min = array[0];
let max = array[0];
for (let i = 0; i < array.length; i++) {
  if (array[i] < min) {
    min = array[i];
  }
  if (array[i] > max) {
    max = array[i];
  }
}
console.log("the min value in array is", min);
console.log("the max value in array is", max);
