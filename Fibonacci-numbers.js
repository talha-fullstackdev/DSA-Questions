////////////////////////// fibnocci number using loop
// let prev2 = 0;
// let prev1 = 1;
// console.log(prev2);
// console.log(prev1);

// for (let fibo = 0; fibo < 18; fibo++) {
//     let newFibo = prev1 + prev2;
//     console.log(newFibo);
//     prev2 = prev1;
//     prev1 = newFibo;
// }
//////////////////////////
// let secondPrev = 0;
// let firstPrev = 1;
// console.log(secondPrev);
// console.log(firstPrev);
// for (let fib = 0; fib < 20; fib++) {
//   let newFeb = firstPrev + secondPrev;
//   console.log(newFeb);
//   secondPrev = firstPrev;
//   firstPrev = newFeb;
// }
///////////using reccurison
// console.log(0);
// console.log(1);
// let count = 2;
// function fibonacci(prev1, prev2) {
//     if (count <= 19) {
//         let newFibo = prev1 + prev2;
//         console.log(newFibo);
//         count++;
//         fibonacci(newFibo, prev1);
//     } else {
//         return;
//     }
// }

// fibonacci(1, 0);
// console.log(1);
// console.log(2);
// let count = 2;
// const fibonacci = (prev1, prev2) => {
//   if (count <= 20) {
//     let newFeb = prev1 + prev2;
//     console.log(newFeb);
//     count++;
//     fibonacci(newFeb, prev1);
//   } else {
//     return;
//   }
// };
// fibonacci(1, 0);
/////////////////practice
let secondPrev = 0;
let firstPrev = 1;
console.log(secondPrev);
console.log(firstPrev);
for (let fib = 0; fib <= 20; fib++) {
  let newFeb = secondPrev + firstPrev;
  secondPrev = firstPrev;
  firstPrev = newFeb;
  console.log(newFeb);
}
/////////////
