// Intersection
let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [4, 5, 6, 7, 8, 9];
let intersection = array1.filter((val) => array2.includes(val));
console.log(intersection);
// union
let unionarray = [...new Set([...array1, ...array2])];
console.log(unionarray);
