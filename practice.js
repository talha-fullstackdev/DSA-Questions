///////////////////////////////////////////////////////////palindrom
// const isPalindrom = (input) => {
//   const string = input.toString();
//   let left = 0;
//   let right = string.length - 1;
//   while (left < right) {
//     if (string[left] !== string[right]) {
//       return "not palindrom";
//     }
//     left++;
//     right--;
//   }
//   return "palindrom";
// };
// let check = isPalindrom("")
// console.log(check)
////////////////////////////////////////////////////////
// const isSorted = (array) => {
//   let assending = true;
//   let descending = true;
//   if (array.length === 0) {
//     return "array is empty";
//   }
//   if (array.length < 2) {
//     return "need minimum 2 array element to check for sorting";
//   }
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < array[i - 1]) {
//       assending = false;
//     }
//     if (array[i] > array[i - 1]) {
//       descending = false;
//     }
//   }
//   if (assending) return "sorted in assending order";
//   if (descending) return "sorted in descending order";
//   return "array do not have any order";
// };
// let check = isSorted([2, 1]);
// console.log(check);
let array = [1,2,3,4,5,6,7,8];
let even = 0;
let odd = 0;
if(array.length==0){
    console.log("empty array")
    return
}
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    even += 1;
  } else {
    odd += 1;
  }
}
console.log(even, "evens");
console.log(odd, "odds");
