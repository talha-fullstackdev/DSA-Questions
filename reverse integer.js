// let number = 3456;
// let string = number.toString().split("").reverse().join("");
// let reverseNum = parseInt(string)
// console.log(reverseNum)

// let reverseNum = (num) => {
// //   let numStr = num.toString().split("").reverse().join("");
// //   let output = parseInt(numStr);
//   let output = parseInt(num.toString().split("").reverse().join("")); // also we do like this
//   console.log(output);
// };
// reverseNum(12345);

/////////////////////////////////////
let reverse = "";
const reversedNum = (num) => {
    let numStr = num.toString(); // Convert number to string
    for (let i = numStr.length - 1; i >= 0; i--) {
        reverse += numStr[i]; // Access characters from the string
    }
    console.log(reverse);
};
reversedNum(23456);
