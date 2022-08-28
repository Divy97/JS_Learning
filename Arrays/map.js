const numbers = [1, 2, 3, 4, 5];

let multipliedArray = numbers.map(multiply);

function multiply(number, index, array) {
  return number * 2;
}

console.log(multipliedArray);
