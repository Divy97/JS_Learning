// impure function
// let a = 4;
// function add(b) {
//   console.log("sum is: ", a + b);
// }

// add(3);

// pure function :-- is a function that always return a same result for same set of arguments

function add(a, b) {
  //   console.log("sum: ", a + b); side effect is not good
  return a + b;
}

console.log(add(3, 2));
