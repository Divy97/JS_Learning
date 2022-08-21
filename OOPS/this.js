// this keyword in node with non-strict mode

console.log("Global ", this); // empty object

function fun() {
  console.log("In function: ", this); // global object
}
fun();

let obj = {
  name: "divy",
  funObject: function () {
    console.log("In Object: ", this); // object itself
  },
};
obj.funObject();

let obj1 = {
  name: "divy",
  funObject: function () {
    function funInFunction() {
      console.log("Function in Function: ", this); // global object
    }
    funInFunction();
  },
};
obj1.funObject();
