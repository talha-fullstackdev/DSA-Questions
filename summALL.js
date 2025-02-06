function summAll () {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};
let check = summAll(3, 5, 6, 7, 8, 9);
console.log(check);
