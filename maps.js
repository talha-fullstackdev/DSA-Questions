const data = new Map([
  ["name", "Talha Nawaz"],
  [10, "Number Key"],
]);
// console.log(data);
// console.log(data.get(10));
// console.log(data.get("name"));
// console.log(data.keys()); // this will gives us all the keys of map
// console.log(data.values())// to get the values of set
data.set("city", "abbottabad"); // add new values in
// data.delete(10)
// console.log(data.size) // checks for the size of map
// console.log(data)
// method 1 for iterating over map
// data.forEach((val, key) =>
//   console.log(`The key is ${key} and its value is ${val}`)
// );
//method 2 for iterating over map 
for([key,value] of data){
    console.log(key,value)
}