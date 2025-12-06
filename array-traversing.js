// const myArray = [1,2,3,4,5,6,7,8,9,10]
// myArray.forEach((element,index,array)=>{
//     console.log(`The element at index ${index} is ${element}`);

// })

const employees = [
  {
    name: "Ali Khan",
    email: "ali.khan@example.com",
    gender: "Male",
    position: "Software Engineer",
    department: "IT",
    salary: 85000,
  },
  {
    name: "Ayesha Malik",
    email: "ayesha.malik@example.com",
    gender: "Female",
    position: "HR Manager",
    department: "Human Resources",
    salary: 75000,
  },
  {
    name: "Usman Tariq",
    email: "usman.tariq@example.com",
    gender: "Male",
    position: "Frontend Developer",
    department: "IT",
    salary: 70000,
  },
  {
    name: "Sara Ahmed",
    email: "sara.ahmed@example.com",
    gender: "Female",
    position: "UI/UX Designer",
    department: "Design",
    salary: 68000,
  },
  {
    name: "Bilal Hussain",
    email: "bilal.hussain@example.com",
    gender: "Male",
    position: "Backend Developer",
    department: "IT",
    salary: 82000,
  },
  {
    name: "Hina Shah",
    email: "hina.shah@example.com",
    gender: "Female",
    position: "Accountant",
    department: "Finance",
    salary: 65000,
  },
  {
    name: "Ahmed Raza",
    email: "ahmed.raza@example.com",
    gender: "Male",
    position: "Project Manager",
    department: "Management",
    salary: 95000,
  },
  {
    name: "Zara Noor",
    email: "zara.noor@example.com",
    gender: "Female",
    position: "Digital Marketer",
    department: "Marketing",
    salary: 60000,
  },
  {
    name: "Fahad Iqbal",
    email: "fahad.iqbal@example.com",
    gender: "Male",
    position: "QA Engineer",
    department: "Quality Assurance",
    salary: 62000,
  },
  {
    name: "Nadia Siddiqui",
    email: "nadia.siddiqui@example.com",
    gender: "Female",
    position: "Business Analyst",
    department: "Business",
    salary: 78000,
  },
];
let greaterSalary = 0;
for (i = 0; i < employees.length; i++) {
  if (employees[i].salary > greaterSalary) {
    greaterSalary = employees[i].salary;
  }
}
// console.log(greaterSalary);
employees.filter((element,index)=>{
    if(element.salary===greaterSalary){
        console.log(element)
    }
})