const calculator = (a, b, opr) => {
    switch (opr) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : "Error: Division by zero";
        default:
            return "Error: Invalid operator";
    }
};

let a = calculator(67, 87, '+');
console.log(a); // Output: 154

