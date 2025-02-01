const array = [1, 2, 3, 4, 5, 6];
const sumArray = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};
let a = sumArray(array);
console.log(a);
