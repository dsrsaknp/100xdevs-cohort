//========================================================================================
// #1 - Modules: common js format
// importing Circle class from circle8.js file

const Circle = require("./shapes/circle");

const c = new Circle(3);
c.draw();

//========================================================================================
// #2 - Modules: ES6 format

import { Square } from "./shapes/square.js";
// use type="module" and .js extension as import syntax is not supported in Common js

const s = new Square();
s.draw();
