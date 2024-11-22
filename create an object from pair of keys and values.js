// const arrayData = (arry) => {
//   return Object.fromEntries(arry); // this method simply create an object from key value pair
// };
// console.log(
//   arrayData([
//     ["a", 1],
//     ["b", 2],
//     ["c", 3],
//   ])
// ); // passing an array which contain array of key value pair

// console.log(
//   Object.fromEntries([
//     ["a", 1],
//     ["b", 2],
//     ["c", 3],
//   ])
// );
////////////////////////////////////////////////////////////////////////
// example 2
const array1 = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];
const object = Object.fromEntries(array1);
console.log(object);

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
// const arr = [{name:"talha",uni:"lahore"} , {age:23} , {gender:"Male"}]
// const [{uni} , {age} , {gender}] = arr
// console.log(uni,gender,age)
