// const array = [2, 2, 4, 6, 7, 3, 9, 11, 6, 14, 15, 17, 18];
// let even = 0;
// let odd = 0;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 === 0) {
//     even += 1;
//   }
//   if (array[i] % 2 != 0) {
//     odd += 1;
//   }
// }
// console.log("even =", even);
// console.log("odd =", odd);

const EvenOdd = (array) => {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      even += 1;
    } else {
      odd += 1;
    }
  }
  return { even, odd };
};

const array = [1, 2, 3, 4, 5];
// const check = EvenOdd(array);
const { even, odd } = EvenOdd(array);
console.log("even = ", even, "odd = ", odd);
