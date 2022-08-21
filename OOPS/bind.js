let person1 = {
  name: "Divy",
  age: 20,
};
let showDetails = function (city, car) {
  console.log(
    `${this.name} is ${this.age} years old, He lives in ${city} and drives ${car}`
  );
};

// let showBind = showDetails.bind(person1, "Delhi", "Alto");
// showBind();

// polyfill of bind

Function.prototype.myBind = function (...args) {
  let object = this;
  params = args.slice(1);
  return function (...args2) {
    object.apply(args[0], [...params, ...args2]);
  };
};

let showDetailsMyBind = showDetails.myBind(person1, "Delhi");
showDetailsMyBind("Alto");
