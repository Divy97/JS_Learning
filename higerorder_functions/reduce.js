//reduce

let myArr = [1, 2, 3, 4, 5];

let sumArray = myArr.reduce(function (accumulator, x) {
  return accumulator + x;
}, 0);

console.log(myArr);
console.log(sumArray);

// find the user, age below 30

const users = [
  { firstName: "Amar", age: 25 },
  { firstName: "Akbar", age: 35 },
  { firstName: "Anthony", age: 27 },
  { firstName: "Edward", age: 40 },
];

const output = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }

  return acc;
}, []);

console.log(output);
