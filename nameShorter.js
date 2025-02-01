// this function two argument one is name and other is its length and then works according to the condition

const nameShortner = (name, maxLength) => {
  if (name.length > maxLength) {
    return name.substring(0, maxLength) + "...";
  }
//   return name;
};
const myName = nameShortner("talhahamzabajjaaduedhscb", 10);
console.log(myName);
// the substring() function is used to give string in  rang we want
// let myName = "hamzanawazjdsncsn"
const shortName1 = myName.substring(0,10)
const shortName2 = myName.substring(5,10)
console.log(shortName1)
console.log(shortName2)
// console.log(exactName)

