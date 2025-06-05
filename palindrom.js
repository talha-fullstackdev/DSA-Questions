// const checkIfPalindrome =  (string)=> {
//   let left = 0;
//   let right = string.length - 1;
//   while (left < right) {
//     if (string[left] != string[right]) {
//       return "not palindrom";
//     }
//     left++;
//     right--;
//   }

//   return "palindrom";
// };
///////////////////////// practice
// const check = checkIfPalindrome("level")
// console.log(check)
// const checkPalindrom = (input) => {
//   const string = input.toString();
//   let left = 0;
//   let right = string.length - 1;
//   while (left < right) {
//     if (string[left] != string[right]) {
//       return "not palindrom";
//     }
//     left++;
//     right--;
//   }
//   return "palindrom";
// };
// const check = checkPalindrom(1241);
// console.log(check);
//////////////////practice
// const checkPalin = (input) => {
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
// const check = checkPalin("aba");
// console.log(check);

// const checkPalindrom = (input) => {
//   let string = input.toString();
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
// const check = checkPalindrom("aaabaaa")
// console.log(check)
//////////////////////////
const isPalindrom = (input) => {
  let string = input.toString();
  let left = 0;
  let right = string.length - 1;
  if (string.length === 0) {
    return "please provide an input!";
  }
  if (string.length === 1) {
    return "one char is always a palindrom";
  }
  while (left < right) {
    if (string[left] !== string[right]) {
      return "input is not palindrom";
    }
    left++;
    right--;
  }
  return "palindrom";
};
let test = isPalindrom(98);
console.log(test);
