// Merge Two Array sort them in Ascending order and  remove Duplicates
let array1 = [2, 3, 4, 5, 6];
let array2 = [4, 33, 2, 6, 7, 8, 9, 10];
let mergeSortArray = [...array1, ...array2].sort((a, b) => a - b); // chaining here
// mergeSortArray.sort((a, b) => a - b);
let uniqueArray = new Set(mergeSortArray);
console.log([...uniqueArray]);




