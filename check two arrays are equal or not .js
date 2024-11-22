const array1 = [5, 4, 3, 2, 1];
const array2 = [1, 2, 3, 4, 7];
// console.log(array1 == array2); // this will give false
// we can also prove this like that
const equalArray = array1.every((ele) => {
  return array2.includes(ele);
});
if (equalArray) {
  console.log("Both arrays are equal");
}
if (!equalArray) {
  console.log("Arrays are not equal");
}
// const a = [3, 4, 5];
// const b = [3, 4, 5];
// console.log(a===b) // this is false because these arrys are different object in memory
// console.log(JSON.stringify(a) == JSON.stringify(b)); // this is aslo a method to compare arrrays based on there values 

