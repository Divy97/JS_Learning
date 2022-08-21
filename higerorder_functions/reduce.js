//reduce

let myArr = [1, 2, 3, 4, 5];

let sumArray = myArr.reduce(function (accumulator, x) {
  return accumulator + x;
}, 0);

console.log(myArr);
console.log(sumArray);

// find the user, age below 30

// const users = [
//   { firstName: "Amar", age: 25 },
//   { firstName: "Akbar", age: 35 },
//   { firstName: "Anthony", age: 27 },
//   { firstName: "Edward", age: 40 },
// ];

// const output = users.reduce((acc, curr) => {
//   if (curr.age < 30) {
//     acc.push(curr.firstName);
//   }

//   return acc;
// }, []);

// console.log(output);

// return total marks for students with marks greater than 60
// after 20 marks have been added to those who scored less than 60

const students = [
  { firstName: "Amar", age: 25, marks: 66 },
  { firstName: "Akbar", age: 35, marks: 76 },
  { firstName: "Anthony", age: 27, marks: 56 },
  { firstName: "Edward", age: 40, marks: 36 },
];

const result = students
  .map((student) => {
    if (student.marks < 60) {
      student.marks += 20;
    }

    return student;
  })
  .filter((student) => {
    return student.marks > 60;
  })
  .reduce((acc, curr) => (acc += curr.marks), 0);

console.log(result);
