// #Functional Programming

// #1 - ES6 .map() method

// multiply by two
function map(args) {
  let newArr = [];
  for (let ele of args) {
    newArr.push(mapFunc(ele));
  }
  return newArr;
}

function mapFunc(ele) {
  return ele * 2;
}

console.log(map([1, 2, 3, 4, 5]));

// #2 - ES6 filter method

function filter(args) {
  let newArr = [];
  for (let index in args) {
    let val = filterFunc(args[index], index);
    if (val) newArr.push(val);
  }
  return newArr;
}

function filterFunc(ele, i) {
  if (ele > 12) return ele;
}

console.log(filter([10, 11, 12, 13, 14, 15, 16]));

