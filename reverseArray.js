// solution one
// const array = [2, 3, 4, 5, 6, 78, 9];
// let reverseArray = [];
// for (let i = array.length - 1; i >= 0; i--) {
//   reverseArray.push(array[i]);
// }
// console.log(reverseArray);
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// solution 2
// let array = [3, 5, 6, 7, 8, 9, 5, 6, 7, 8, 90, 6];
// let reversedArray = (array) => {
//   let left = 0;
//   let right = array.length - 1;
//   while (left < right) {
//     let temp = array[left];
//     array[left] = array[right];
//     array[right] = temp;
//     left++;
//     right--;
//   }
//   return array;
// };
// let reversed = reversedArray(array);
// console.log(array);

/// practice
// let array = [2, 3, 4, 5, 6, 7, 8, 9];
// let reversedArray = (array) => {
//   let pointerOne = 0;
//   let pointerTwo = array.length - 1;
//   while (pointerOne < pointerTwo) {
//     let temp = array[pointerOne];
//     array[pointerOne] = array[pointerTwo];
//     array[pointerTwo] = temp;
//     pointerOne++;
//     pointerTwo--;
//   }
//   return array;
// };
// console.log(array,"original")
// let a = reversedArray(array)
// console.log("reversed",a)

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let reversedArray = (array) => {
  let pointerOne = 0;
  let pointerTwo = array.length - 1;
  while (pointerOne < pointerTwo) {
    let temp = array[pointerOne];
    array[pointerOne] = array[pointerTwo];
    array[pointerTwo] = temp;
    pointerOne++;
    pointerTwo--;
  }
  return array;
};
console.log("original", array);
let reverse = reversedArray(array);
console.log("revrsed", reverse);
