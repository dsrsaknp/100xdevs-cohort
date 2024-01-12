// #Functional Programming

// #1 - ES6 .map() method

// multiply by two
function map(args, cb) {
  let newArr = [];
  for (let ele of args) {
    newArr.push(cb(ele));
  }
  return newArr;
}

function mapFunc(ele) {
  return ele * 2;
}

console.log(map([1, 2, 3, 4, 5], mapFunc));

// #2 - ES6 filter method

function filter(args, cb) {
  let newArr = [];
  for (let index in args) {
    let val = cb(args[index], index);
    if (val) newArr.push(val);
  }
  return newArr;
}

function filterFunc(ele, i) {
  if (ele > 12) return ele;
}

console.log(filter([10, 11, 12, 13, 14, 15, 16], filterFunc));

// #3
const arr1 = [1, 2, 3, 4, 5, 6, 7];
function mapForEach(args, fn) {
  const newArr = [];
  for (let ele of args) {
    newArr.push(fn(ele));
  }
  return newArr;
}
function checkForLimit(limiter, item) {
  return item > limiter;
}

const arr2 = mapForEach(arr1, checkForLimit.bind(this, 4));
console.log(arr2);

var checkForLimitSimplified = function (limiter) {
  return function (limiter, item) {
    return item > limiter;
  }.bind(this, limiter); //seeing bind here means a preset parameter
};

const arr5 = mapForEach(arr1, checkForLimitSimplified(4));
console.log(arr5);

// when called, fn becomes equivalent to following
function fn(item) {
  let limiter = 4;
  return item > limiter;
}
