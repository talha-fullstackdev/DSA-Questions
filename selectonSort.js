let myArray = [64, 34, 25, 12, 22, 11, 90, 5];

for (let i = 0; i < myArray.length; i++) {
  let minIndex = i;
  for (let j = i + 1; j < myArray.length; j++) {
    if (myArray[j] < myArray[minIndex]) {
      minIndex = j;
    }
  }
  // Swap the elements
  let temp = myArray[i];
  myArray[i] = myArray[minIndex];
  myArray[minIndex] = temp;
}

console.log("Sorted array:", myArray);
