let array = [2, 3, 4, 1, 5, 6, 7, 8, 9, 2, 4, 6, 7, 8, 1, 5];
let target = 14;
let found = false;
const foundPair = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        console.log(`sum of ${array[i]} and ${array[j]} = ${target}`);
        found = true;
      }
    }
  }
  if (!found) {
    console.log("no matched found");
  }
};
foundPair(array);
