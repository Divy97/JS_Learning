//filter

let myArr = [1, 2, 3, 4, 5];

let newArray = myArr.filter(function (x) {
  return x % 2 === 0;
});

console.log(myArr);
console.log(newArray);
