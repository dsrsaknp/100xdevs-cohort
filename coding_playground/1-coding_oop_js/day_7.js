// // # ES6 classes

// // #1 - class syntax of ES6
// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//     this.move = function () {
//       console.log("move");
//     };
//   }
//   draw() {
//     // added in object's prototype
//     console.log("draw");
//   }
// }

// let c = new Circle();

// // #2 - Hoisting
// sayHello();
// sayHi(); // hoisting not supported

// // function declaration
// function sayHello() {
//   console.log("Say Hello!");
// }

// // function expression
// const sayHi = function () {
//   console.log("Say Hi!");
// };

// // #3 - Static method or Utility method
// class Circle {
//   constructor(radius = null) {
//     this.radius = radius;
//   }

//   // Instance method
//   draw() {
//     console.log("draw");
//   }

//   // static method
//   static parse(str) {
//     const radius = JSON.parse(str).radius;
//     return new Circle(radius);
//   }
// }

// const circle = new Circle();
// Circle.parse(`{"radius": 1}`);

// // #4.1 - Method call vs. function call
// ("use strict");
// const Circle = function () {
//   this.draw = function () {
//     console.log(this);
//   };
// };
// const c4 = new Circle();

// // method call
// c4.draw();

// // function call
// let draw = c4.draw;
// draw(); // factory function call -> points to global/ window object.

// #4.2 - using class syntax
class Circle41 {
  draw() {
    console.log(this);
  }
}
const circle41 = new Circle41();
let draw41 = circle41.draw;
draw41(); // undefined instead of the gobal object. ES6 internally uses 'use strict'
