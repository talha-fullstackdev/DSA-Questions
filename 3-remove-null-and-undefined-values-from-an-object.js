const object = {
  a: 1,
  b: "Talha",
  d: null,
  e: undefined,
};
const objToArray = Object.fromEntries(
  Object.entries(object).filter(([_, val]) => val != null && )
); // convert the values of the object into array and then filter this and remove null and undefined (note in filter call back function it take two argument the first one is key which we dont need so we give him value of _ and the seconnd one is value)
console.log(objToArray);

