///////////////// min value in array
let aray = [6, 5, 3, 2, 5, 6, 7, 1, 0, -1,100];
let min = aray[0];
let max = aray[0]
for (let i = 0; i < aray.length; i++) {
  if (aray[i] < min) {
    min = aray[i];
  }
  if (aray[i] > max) {
    max = aray[i];
  }
}
console.log("the min value in array issss",min);
console.log("the max value in array issss",max);
