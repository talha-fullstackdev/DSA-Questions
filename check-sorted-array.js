const isSorted = (array) => {
    if (array.length < 2) { 
        return "Array is sorted"; 
    }
    let ascending = true;
    let descending = true;

    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            ascending = false; 
        }
        if (array[i] > array[i - 1]) {
            descending = false; 
        }
    }
    if (ascending) return "Sorted in ascending order";
    if (descending) return "Sorted in descending order";
    return "Not sorted";
}

let array = [2, 5, 6, 7, 3, 5]; 
console.log(isSorted(array)); 

let sortedArray = [1, 2, 3, 4, 5];
console.log(isSorted(sortedArray));

let descendingArray = [5, 4, 3, 2, 1];
console.log(isSorted(descendingArray));
