const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 23, 45, 12, 34, 65, 47, 87, 45];
const target = 12;
let found = false;
let iteration = 1;
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    for (let k = j + 1; k < nums.length; k++) {
      if (nums[i] + nums[j] + nums[k] === target)
        console.log(
          `iteration ${iteration++} the sum of ${nums[i]}, ${nums[j]} and ${
            nums[k]
          } is = ${target} `
        );
      found = true;
    }
  }
}
console.log("total valid matches", iteration - 1);
if (!found) {
  console.log("no match found");
}
