// const bubbleSort = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] > array[j]) {
//         // [array[i], array[j]] = [array[j], array[i]]; // simple way of swaping elements in js
//         let temp = array[i]; // manualy swapiing elements using temp variable
//         array[i] = array[j];
//         array[j] = temp;
//       }
//     }
//   }
//   return array;
// };
// let sorted = bubbleSort([2, 10, 6, 24, 8, 3, 20,56,43,27,87,93]);
// console.log(sorted);

////////// in this method in every iteration the last sorted element is not check because it is already sorted
// const bubbleSort = (array) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[j] > array[j + 1]) {
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   return array;
// };
// let sorted = bubbleSort([9, 45, 7, 1, 2, 78, 34, 97, 42, 62, 56]);
// console.log(sorted);

///////////////////////////////////////
const employees = [
  {
    id: 1,
    name: "John Doe",
    position: "Software Engineer",
    salary: 75000,
    department: "Development",
    hireDate: "2022-05-15",
    email: "john.doe@example.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "UI/UX Designer",
    salary: 68000,
    department: "Design",
    hireDate: "2021-03-22",
    email: "jane.smith@example.com",
  },
  {
    id: 3,
    name: "Samuel Green",
    position: "Backend Developer",
    salary: 80000,
    department: "Development",
    hireDate: "2020-08-10",
    email: "samuel.green@example.com",
  },
  {
    id: 4,
    name: "Emily Johnson",
    position: "Project Manager",
    salary: 90000,
    department: "Management",
    hireDate: "2019-11-01",
    email: "emily.johnson@example.com",
  },
  {
    id: 5,
    name: "Michael Brown",
    position: "DevOps Engineer",
    salary: 85000,
    department: "Operations",
    hireDate: "2022-02-17",
    email: "michael.brown@example.com",
  },
  {
    id: 6,
    name: "Sophia Wilson",
    position: "Frontend Developer",
    salary: 72000,
    department: "Development",
    hireDate: "2023-07-05",
    email: "sophia.wilson@example.com",
  },
  {
    id: 7,
    name: "David Lee",
    position: "Data Analyst",
    salary: 70000,
    department: "Analytics",
    hireDate: "2021-12-15",
    email: "david.lee@example.com",
  },
  {
    id: 8,
    name: "Emma Davis",
    position: "QA Engineer",
    salary: 65000,
    department: "Quality Assurance",
    hireDate: "2020-09-25",
    email: "emma.davis@example.com",
  },
  {
    id: 9,
    name: "Chris Martin",
    position: "HR Manager",
    salary: 78000,
    department: "Human Resources",
    hireDate: "2018-04-09",
    email: "chris.martin@example.com",
  },
  {
    id: 10,
    name: "Olivia Taylor",
    position: "Content Strategist",
    salary: 60000,
    department: "Marketing",
    hireDate: "2021-06-30",
    email: "olivia.taylor@example.com",
  },
];

const bubbleSort = (employees) => {
  for (let i = 0; i < employees.length; i++) {
    for (let j = i + 1; j < employees.length; j++) {
      if (employees[i].salary > employees[j].salary) {
        let temp = employees[i];
        employees[i] = employees[j];
        employees[j] = temp;
        // another method of swapping
        // [employees[i], employees[j]] = [employees[j], employees[i]];
      }
    }
  }
  return employees;
};
let sorted = bubbleSort(employees);
console.log(sorted);
