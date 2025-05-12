const array = [
  9, 8, 7, 6, 5, 3, 7, 8, 9, 5, 4, 3, 5, 7, 8, 9, 1, 4, 7, 8, 9, 3, 2, 6, 8, 4,
];
let target = 9;
for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    for (let k = j + 1; k < array.length; k++) {
      // Fix: Condition now checks `k`
      if (array[i] + array[j] + array[k] === target) {
        console.log(`${array[i]},${array[j]} and ${array[k]} = ${target}`);
      }
    }
  }
}
