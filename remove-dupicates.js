let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 4, 7, 2, 6, 8, 3, 10, 10,100,100];
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] === nums[j]) {
      nums.splice(j, 1);// remove 1 element at index j
      j--; // adjust the j index after removing
    }
  }
}
console.log(nums);
