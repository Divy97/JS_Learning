//reduce

let myArr = [1, 2, 3, 4, 5];

let sumArray = myArr.reduce(function (accumulator, x) {
  return accumulator + x;
}, 0);

console.log(myArr);
console.log(sumArray);
