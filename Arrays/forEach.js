const numbers = [1, 2, 3, 4, 5, 5, 3, 3];

let sum = 0;
numbers.forEach((number) => (sum = sum + number));
console.log(sum);

let count = {};
numbers.forEach((number) => {
  if (count[number]) {
    count[number]++;
  } else {
    count[number] = 1;
  }
});

console.log(count);
