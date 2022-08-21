// this keyword in node with strict mode
"use strict";
console.log("Global ", this); // returns empty object

function fun() {
  console.log("In function: ", this); // returns undefined
}
fun();

let obj = {
  name: "Divy",
  funObject: function () {
    console.log("In Object: ", this); // returns object itself
  },
};
obj.funObject();

let obj1 = {
  name: "Divy",
  funObject: function () {
    function funInFunction() {
      console.log("Function in Function: ", this); // returns undefined
    }
    funInFunction();
  },
};
obj1.funObject();
