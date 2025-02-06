// const removeChar = (input, charToRemove) => {
//   const string = input.toString();
//   let result = "";
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] !== charToRemove.toString()) {
//       result += string[i];
//     }
//   }
//   return result;
// };
// let check = removeChar(847268230242820000000, 0);
// console.log(check);
/////////////////////////////////////////////////////////
const removeChar = (input, charToRemove) => {
  let string = input.toString();
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== charToRemove.toString()) {
      result += string[i];
    }
  }
  return result;
};
let check = removeChar("talha nawaz", "a");
console.log(check);
