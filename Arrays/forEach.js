// const numbers = [1, 2, 3, 4, 5, 5, 3, 3];

// // let sum = 0;
// // numbers.forEach((number) => (sum = sum + number));
// // console.log(sum);

// let count = {};
// numbers.forEach((number) => {
//   if (count[number]) {
//     count[number]++;
//   } else {
//     count[number] = 1;
//   }
// });

// console.log(count);

let array = [1, 2, 3, 4, 5];

function miniMaxSum(arr) {
  let smallest = Math.min(...arr);
  let largest = Math.max(...arr);

  let smallestArray = arr.filter((element) => element !== largest);
  let largestArray = arr.filter((element) => element !== smallest);

  let sumOfSmallestArray = 0;
  let sumOfLargestArray = 0;

  for (let i = 0; i < smallestArray.length; i++) {
    sumOfSmallestArray += smallestArray[i];
  }

  for (let i = 0; i < largestArray.length; i++) {
    sumOfLargestArray += largestArray[i];
  }

  return [sumOfSmallestArray, sumOfLargestArray].toString();
}

console.log(miniMaxSum(array));
