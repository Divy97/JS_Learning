map;

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
