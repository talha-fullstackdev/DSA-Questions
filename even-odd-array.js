const array = [2,2,4,6,7,3,9,11,6,14,15,17,18];
let even = 0;
let odd = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    even += 1;
  }
  if (array[i] % 2 != 0) {
    odd += 1;
  }
}
console.log("even =",even)
console.log("odd =",odd)
