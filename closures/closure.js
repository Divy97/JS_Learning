// A function bundled with its lexical scope forms a closure

// example : 1

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  a = 100;
  return y;
}
var z = x();
console.log("ZZZZ ", z);
z();

// use Cases
// 1. Module design pattern
// 2. currying
// 3. functions like once
// 4. memoize
// 5. maintaining state in async world
// 6. setTimeout
// 7. iterators
// ...
