// bind
// #1.1
const obj11 = {
  name: "bind",
  display: function () {
    console.log(`This is ${this.name} example`);
  },
};

function borrowDisplay() {
  console.log(`Borrowed the method dispayed for ${this.name} example`);
}

let logExampleName = borrowDisplay.bind(obj11); // bind creates and returns a new function

borrowDisplay(); // 'this' points to global
logExampleName(); // 'this' points to obj1

// #1.2
const obj12 = {
  name: "bind",
  display: function () {
    console.log(`This is ${this.name} example`);
  },
};

const obj121 = {
  name: "bind_obj121",
};

let log_obj121 = obj12.display.bind(obj121);
log_obj3();

// #1.3
const obj13 = {
  name: "bind",
  display: function (number = 0) {
    console.log(`This is ${this.name} example with number ${number}`);
  },
};
function borrowDisplay(number) {
  console.log(
    `Borrowed the method dispay for ${this.name} example with serial number ${number}`
  );
}
let logExampleName13 = borrowDisplay.bind(obj13, 3); // bind creates and returns a new function
logExampleName13(); // 'this' points to obj1

// #1.4
const obj14 = {
  name: "bind",
  display: function (str) {
    console.log(`This is ${this.name} example. ${str} example`);
  },
};
const obj141 = {
  name: "bind_obj141",
};
let log_obj141 = obj14.display.bind(obj141, "it's just 1.4");
log_obj141();

// bind polyfill

// call 
// call polyfill

// apply 
// apply polyfill

// caller

// 'prototype' property of functions in js

// arguments - array-ike object, not array

// arguments object has property named 'callee'. Allows the anonymous functions to call recursively.
