let nums = [2, 4, 5, 6, 7, 8, 2, 1];
// let nums = [25, 42, 51, 65, 77, 85, 28, 12];
// let nums =[2,3,4]
let target = 9;
// let target = 6;
let found = false;
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] === target) {
      console.log(`the number has been found at index ${[i]} and index ${[j]}`);
      console.log(
        `the sum of number ${nums[i]} and ${nums[j]} is equal to ${target}`
      );
      found = true;
    }
  }
}
if (!found) {
  console.log("not found");
}
