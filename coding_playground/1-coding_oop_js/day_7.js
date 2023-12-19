// // # ES6 classes

// // #1 - class syntax of ES6
// // ====================================================================================================
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
// // ====================================================================================================
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
// //====================================================================================================
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
// //====================================================================================================
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

// // #4.2 - using class syntax
// // //====================================================================================================
// class Circle41 {
//   draw() {
//     console.log(this);
//   }
// }
// const circle41 = new Circle41();
// let draw41 = circle41.draw;
// draw41(); // undefined instead of the gobal object. ES6 internally uses 'use strict'

// // #5.1 - Private properties and methods using Symbols

// const _radius = Symbol(); // Note: it's NOT new Symbol()
// const _draw = Symbol();

// class Circle {
//   constructor(radius) {
//     this[_radius] = radius; // private property
//   }
//   [_draw]() {   // private method
//     // present inside object's prototype
//     console.log("draw");
//   }
// }
// const c43 = new Circle(2);
// console.log(Object.getOwnPropertyNames(c43));
// console.log(Object.getOwnPropertySymbols(c43));

// // accessing symbol instance property
// const radius_key = Object.getOwnPropertySymbols(c43)[0];
// console.log(c43[radius_key]);

// // accessing symbol prototype property  _draw
// const draw_key = Object.getOwnPropertySymbols(Circle.prototype)[0];
// console.log(c43[draw_key]);

// // #5.2 - Private properties and methods using Weakmaps
// // ex- radius, move - private props and draw is public prop. Access private props inside public prop.

// const _radius = new WeakMap();
// const _move = new WeakMap();

// class Circle {
//   constructor(radius) {
//     _radius.set(this, radius);
//     // _move.set(this, function () {
//     //   // use arrow function as it inherits the value of this from the containing function i.e. constructor here.
//     //   console.log("move" + " " + this);
//     // });
//     _move.set(this, () => {
//       console.log("move", this);
//     });
//   }

//   draw() {
//     console.log(_radius.get(this));
//     _move.get(this)();
//     console.log("draw");
//   }
// }

// const c44 = new Circle(3);

// // #6 - Getters and setters
// const _radius = new WeakMap();

// class Circle {
//   constructor(radius) {
//     _radius.set(this, radius);
//   }

//   //   getRadius() {
//   //     return _radius.get(this);
//   //   }

//   // writing the above getRadius method using get
//   get radius() {
//     return _radius.get(this);
//   }

//   set radius(value) {
//     _radius.set(this, value);
//   }
// }

// const c45 = new Circle(2);
// console.log(c45.radius);

// c45.radius = 5;
// console.log(c45.radius);

// // #7 - ES6 class inhertance

// class Shape {
//   constructor(color) {
//     this.color = color;
//   }
//   move() {
//     console.log("move");
//   }
// }

// class Circle extends Shape {
//   constructor(radius, color) {
//     super(color);
//     this.radius = radius;
//   }
//   draw() {
//     console.log("draw");
//   }
// }

// let c7 = new Circle(7, "purple");
// console.log(c7);
// console.log(c7.radius);
// console.log(c7.color);
// c7.move();
// c7.draw();

// #8 - Method override
class Shape {
  move() {
    console.log("move");
  }
}

class Circle extends Shape {
  move() {
    super.move();
    console.log("draw circle");
  }
}

const c8 = new Circle();
c8.move();
