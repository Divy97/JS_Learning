// map

let mapArray = [1, 2, 3, 4, 5];

function myPolyfillMap(arr, callBack) {
  let newArrayMap = [];

  for (let element of arr) {
    newArrayMap.push(callBack(element));
  }

  return newArrayMap;
}

function square(x) {
  return x * x;
}

console.log("MAP: ", myPolyfillMap(mapArray, square));

// 2nd method

let myMapArray = [1, 2, 3, 4, 5];
Array.prototype.myMap = function (callBack) {
  let tempArray = [];

  for (let i = 0; i < this.length; i++) {
    tempArray.push(callBack(this[i], i, this));
  }

  return tempArray;
};

const multiply = myMapArray.myMap((ele, i, arr) => {
  return ele * 2;
});

console.log("MY_MAP: ", multiply);
// filter

let filterArray = [1, 2, 3, 4, 5, 6];

function myPolyfillFilter(arr, callBack) {
  let newArrayFilter = [];

  for (let element of arr) {
    if (callBack(element)) {
      newArrayFilter.push(element);
    }
  }

  return newArrayFilter;
}

function isEven(x) {
  if (x % 2 === 0) {
    return x;
  }
}
console.log("FILTER: ", myPolyfillFilter(filterArray, isEven));

// 2nd method

let myFilterArray = [1, 2, 3, 4, 5];
Array.prototype.myFilter = function (callBack) {
  let tempArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callBack(this[i], i, this)) {
      tempArray.push(this[i]);
    }
  }
  return tempArray;
};

const filter = myFilterArray.myFilter((ele) => {
  return ele > 2;
});

console.log("MY_FILTER: ", filter);

// Polyfill of Reduce

let myReduceArray = [1, 2, 3, 4, 5];

Array.prototype.myReduce = function (callBack, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator
      ? callBack(accumulator, this[i], i, this)
      : this[i];
  }

  return accumulator;
};

const reduce = myReduceArray.myReduce((acc, curr, i, arr) => {
  return acc + curr;
});

console.log("MY_REDUCE", reduce);
