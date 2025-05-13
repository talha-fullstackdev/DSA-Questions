// function createUser(name) {
//   let password = "123456"; // private

//   return {
//     getName: () => name,
//     checkPassword: (pass) => pass === password
//   };
// }

// const user = createUser("Talha");

// console.log(user.getName()); // "Talha"
// console.log(user.checkPassword("123456")); // true
// console.log(user.checkPassword("wrong"));
const createUser = (name) => {
  let password = 123456;
  return {
    getName: () => name,
    checkPassword: (pass) =>
      pass === password ? "correct password" : "incorrect password",
  };
};
const user = createUser("Talha");
console.log(user.getName());
console.log(user.checkPassword(123456));
