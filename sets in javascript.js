// set is basically used for unique values
// example 1
// const array = [2,4,5,6,7,8,8,7,6,5,4,3,2,1]
// const uniqueEle = new Set(array)
// console.log([...uniqueEle].sort((a,b)=>a-b))
// EXAMPLE 2
const mixedTypes = [
  "talha",
  "hamza",
  { key: "value" },
  { key: "value" },
  "hamza",
];
const uniqueTypes = new Set(mixedTypes);
console.log([...uniqueTypes]);
