// const insertionSort = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     let j = i;
//     while (j > 0 && array[j - 1] > array[j]) {
//       let temp = array[j - 1];
//       array[j - 1] = array[j];
//       array[j] = temp;
//       j--;
//     }
//   }
//   return array;
// };
// let sorted = insertionSort([9, 5, 9, 3, 92, 98, 45, 34, 92, 98]);
// console.log(sorted);
// using for loop
const insertionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; array[j - 1] > array[j]; j--) {
      let temp = array[j - 1];
      array[j - 1] = array[j];
      array[j] = temp;
    }
  }
  return array;
};
let sorted = insertionSort([
  9, 8, 6, 5, 4, 3, 2, 16, 97, 35, 65, 45, 78, 145, 345, 762, 8, 1, 5, 89,
]);
console.log(sorted);
