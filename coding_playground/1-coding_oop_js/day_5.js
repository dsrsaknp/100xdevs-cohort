// prototypal inheritance

// #1
function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.draw = function () {
  console.log("draw");
};

const s = new Shape();
const c = new Circle(1);

// #1.1 - Prototypal inhertance of Shape's prototype by circle.
function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
  console.log("draw");
};

let s1 = new Shape();
let c1 = new Circle(1);

// #1.2 - calling the super constructor using call()
function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
  console.log("draw");
};

let s2 = new Shape();
let c2 = new Circle(1, "white");

// #1.3 - Intermediate function Inheritance using custom extend function
function Shape(color) {
  this.color = color;
}
Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
  console.log("draw");
};

function Square(size) {
  this.size = size;
}
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

let s3 = new Shape();
let c3 = new Circle(1, "white");

// Refactoring the prototype assignment to a function
function Shape(color) {
  this.color = color;
}
Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;
extend(Circle, Shape);

Circle.prototype.draw = function () {
  console.log("draw");
};

function Square(size) {
  this.size = size;
}
// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Square;
extend(Square, Shape);

let s4 = new Shape();
let c4 = new Circle(1, "white");
let sq4 = new Square(20);

// #1.4 - circle method overidding
function Shape(color) {
  this.color = color;
}
Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}
extend(Circle, Shape);

Circle.prototype.duplicate = function () {
  Shape.prototype.duplicate.call(this);
  console.log("duplicate circle");
};

let s5 = new Shape();
let c5 = new Circle(1, "white");

// #1.5 - Polymorphism
// SHAPE constructor function
function Shape(color) {
  this.color = color;
}
Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

// extend for prototypal inheritance
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.construcor = Child;
}

// CIRCLE constructor function
function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}
extend(Circle, Shape);
Circle.prototype.draw = function () {
  console.log("draw circle");
};
Circle.prototype.duplicate = function () {
  // override shape duplicate
  console.log("dupicate Circle");
};

// SQUARE constructor function
function Square(size, color) {
  Shape.call(this, color);
  this.size = size;
}
extend(Square, Shape);
Square.prototype.duplicate = function () {
  // override shape duplicate
  console.log("duplicate Square");
};

const c6 = new Circle(1, "black");
const sq6 = new Square(23, "blue");

const shapes = [new Circle(), new Square()];

for (let shape of shapes) {
  shape.duplicate();
}
