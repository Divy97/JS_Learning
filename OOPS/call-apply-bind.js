let person1 = {
  name: "Divy",
  age: 19,

  // showDetails: function () {
  //   console.log(this.name + " is " + this.age + " years old ");
  // },
};

let person2 = {
  name: "Vishwa",
  age: 20,
};

// function borrowing
// person1.showDetails.call(person2); // call method

let showDetails = function (city, car) {
  console.log(
    `${this.name} is ${this.age} years old, He lives in ${city} and drives ${car}`
  );
};

// showDetails.call(person1, "Delhi", "Alto"); // call
// showDetails.apply(person2, ["Mumbai", "Thar"]); // apply

let showDetailsBind = showDetails.bind(person2, "Mumbai", "Thar"); // bind
showDetailsBind();
