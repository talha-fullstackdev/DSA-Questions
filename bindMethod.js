function studentData(section) {
  console.log(`name: ${this.name} , age : ${this.age}. section :${section}`);
}
const student1 = {
  name: "Talha",
  age: 25,
};
const student2 = {
  name: "daud",
  age: 24,
};
const student3 = {
  name: "uzair",
  age: 23,
};

let std1 = studentData.bind(student1);
let std2 = studentData.bind(student2);
let std3 = studentData.bind(student3);
std1("E");
std2("E");
std3("E");
