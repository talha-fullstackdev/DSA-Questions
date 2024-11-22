const array = [23, 54, 67, 87, 142, 45, 67, 124, 12];
let found = false;
const findNum = (num) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      console.log(
        `yes the number ${array[i]} is find in the array at index ${[i]}`
      );
      found = true;
    }
  }
  if (!found) {
    console.log("not found!");
  }
};
findNum(10);
