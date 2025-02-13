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
const checkPalin =(input)=>{
  const string = input.toString()
  let left = 0
  let right = string.length-1
  while(left<right){
    if(string[left]!==string[right]){
      return "not palindrom"
    }
    left++
    right--
  }
  return "palindrom"
}
const check = checkPalin("aba")
console.log(check)