// #1
//1.1
let baseSalary = 4000000;
let overtime = 2;
let rate = 20;

function getWages(baseSalary, overtime, rate) {
  return baseSalary + rate * overtime;
}

//1.2
/* the best functions are those with no parameters */
let employee = {
  baseSalary: 4000000,
  overtime: 2,
  rate: 20,
  getWages: function () {
    return this.baseSalary + this.overtime * this.rate;
  },
};

//====================================================================================================
// #2 - Object literals to Factory functions
//2.1
const circle1 = {
  radius: 3,
  location: {
    x: 1,
    y: 2,
  },
  draw: function () {
    console.log("draw");
  },
};

const circle2 = {
  radius: 2,
  location: {
    x: 10,
    y: 20,
  },
  draw: function () {
    console.log("draw");
  },
};

/** let circle3 ...and so on..*/

// 2.2
/** Factory function */
function createCircle(radius) {
  // camel case naming convention
  console.log("'this' in factory function: ", this); // refers to global object since it's node env
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}
const circleA = createCircle(1);
circleA.draw();

// 2.3
/** Constructor function */
function CreateCircle(radius) {
  console.log("'this' inside constructor function", this); // refers to current object
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
// 'new' operator enables automatic object return without explicit definition.
// omitting 'new' operator will make it a factory function call, and then 'this' will refer to global object again.
const circleB = new CreateCircle(5);
circleB.draw();

//====================================================================================================
// #3 Every object has 'constructor' property, whcih refers to the function that created it.
// 3.0
console.log(circleA.constructor); // created using factory function
console.log(circleB.constructor); // created using constructor function i.e. using new operator

//3.1
const str1 = "";
const str2 = new String();
console.log(str1.constructor);
console.log(str2.constructor);

//3.2
function CreateString(str) {
  this.str = str;
}
const str3 = new CreateString("new string");
console.log(str3.constructor);

//3.3
const bool1 = false;
const bool2 = new Boolean(false);
console.log(bool1.constructor);
console.log(bool2.constructor);

//3.4
const num = new Number(2);
console.log(num.constructor);
