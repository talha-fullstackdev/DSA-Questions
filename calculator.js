// const calculator = (a, b, opr) => {
//     switch (opr) {
//         case '+':
//             return a + b;
//         case '-':
//             return a - b;
//         case '*':
//             return a * b;
//         case '/':
//             return b !== 0 ? a / b : "Error: Division by zero";
//         default:
//             return "Error: Invalid operator";
//     }
// };

// let a = calculator(67, 87, '+');
// console.log(a); // Output: 154

const calculator = (a, b, opr) => {
  if (opr === "+") {
    return a + b;
  } else if (opr === "-") {
    return a - b;
  } else if (opr === "*") {
    return a * b;
  } else if (opr === "/") {
    return b !== 0 ? a / b : "Error: Division by zero";
  } else {
    return "Error: Invalid operator";
  }
};
const result = calculator(45, 9, "*");
console.log(result);
