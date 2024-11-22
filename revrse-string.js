const reversedNum = (name) => {
  let reversed = "";
  for (let i = name.length - 1; i >= 0; i--) {
    reversed += name[i];
  }
  return reversed;
};
let myName = reversedNum("Talha");
console.log(myName)
