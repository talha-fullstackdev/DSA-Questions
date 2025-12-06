// insert element at the start of array
// let array = [1, 2, 3, 4, 5];
// let newArray = [];
// newArray[0] = 0;
// for (let i = 0; i < array.length; i++) {
//   newArray[i + 1] = array[i];
// }
// console.log(newArray);
///////////////////////////////////////////////////////////
// insert element at the last of array
// let array = [1, 2, 3, 4, 5, 6];
// let newArray = [];
// for (let i = 0; i < array.length; i++) {
//   newArray[i] = array[i];
// }
// newArray[newArray.length] = 7;
// console.log(newArray);
///////////////////////////////////////////////
// insert element at specific position of array
let array = [1, 2, 3, 4, 6, 7];
let index = 4;
let newArray = [];

for (let i = 0; i < array.length; i++) {
  if (i < index) {
    newArray[i] = array[i];
  } else {
    newArray[i + 1] = array[i];
  }
}

newArray[index] = 5;

console.log(newArray);
