// A function which takes another function as an argument or returns a function from it is known as ....

const radius = [3, 4, 1, 2];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }

  return output;
};

console.log("AREA ", radius.calculate(area));
console.log("CIRCUMFERENCE ", radius.calculate(circumference));
console.log("DIAMETER ", radius.calculate(diameter));
