// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: function () {
//     console.log("Draw");
//   },
// };

// circle.draw();

// factory function

// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log("Draw", radius);
//     },
//   };
// }

// const circleOne = createCircle(1);
// circleOne.draw();

// const circleTwo = createCircle(10);
// circleTwo.draw();

// constructor function

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("DRAW", this.radius);
  };
}

const circleOne = new Circle(10);
// circleOne.location = { x: 1 };

// const dynamicProperty = "user__Input";
// circleOne[dynamicProperty] = { X: 1 };

// delete circleOne.location;
// functions are object

// for in loop

for (key in circleOne) {
  if (typeof circleOne[key] !== "function") console.log(key, circleOne[key]);
}

console.log(Object.keys(circleOne), Object.values(circleOne));
