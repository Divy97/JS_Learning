// this in browser with non strict

console.log(this); // window object

function browser() {
  console.log(this); // window object
}
browser();

let browserObj = {
  name: "divy",
  funObject: function () {
    console.log("In Object: ", this); // object itself
  },
};
browserObj.funObject();

let browserObj1 = {
  name: "divy",
  funObject: function () {
    function funInFunction() {
      console.log("Function in Function: ", this); // window object
    }
    funInFunction();
  },
};
browserObj1.funObject();

// this in browser with strict

console.log("strict ", this); // window object

function browserStrict() {
  console.log(this); // undefined
}
browserStrict();

let browserObjStrict = {
  name: "divy",
  funObject: function () {
    console.log("In Object: ", this); // object itself
  },
};
browserObjStrict.funObject();

let browserObj1Strict = {
  name: "divy",
  funObjectStrict: function () {
    function funInFunction() {
      console.log("Function in Function: ", this); // undefined
    }
    funInFunction();
  },
};
browserObj1Strict.funObject();
