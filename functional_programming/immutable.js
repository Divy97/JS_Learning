const person1 = {
  name: "abc",
  age: 25,
};

// const person2 = Object.assign({}, person1);
const person2 = { ...person1 };

person2.name = "pqr";

console.log(person1);
console.log(person2);
