losure

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