// bind
// #1.1 ====================================================================================================

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

// #1.2 ====================================================================================================

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

// #1.3 ====================================================================================================

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

// #1.4 ====================================================================================================

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
// #2.1 - without args ====================================================================================================
const movieObj = {
  name: "Iron man",
  family: "Avengers",
};
const display = {
  name: "Batman",
  family: "Justice League",
  movie: function () {
    return `${this.name} belongs to ${this.family} family`;
  },
};

Object.prototype.superHeroBind = function (nameObj) {
  console.log("this inside bind: ", this);
  console.log("nameObj: ", nameObj);
  nameObj.addMethod = this; // this = display.family
  return function () {
    return nameObj.addMethod();
  };
};
const movieName = display.movie.superHeroBind(movieObj);
console.log("polyfill bind: ", movieName());

// #2.2 - with args ===============================================================================================
const starCast = {
  name: "Iron man",
  family: "Avengers",
};
const production = {
  name: "Batman",
  family: "Justice League",
  movie: function (otherName = "Batman", otherFamily = "Justice League") {
    return `${this.name} belongs to ${this.family} family, while ${otherName} is a ${otherFamily} family`;
  },
};

Object.prototype.movieBind = function (nameObj, ...args) {
  nameObj.addMethod = this; // this = production.family
  return function () {
    return nameObj.addMethod(args[0], args[1]);
  };
};
const film = production.movie.movieBind(starCast, "Maleficent", "Disney");
console.log("polyfill bind: ", film());

// #3.1 - call ====================================================================================================
const animals31 = {
  species: "Dogs",
};

const getAnimals31 = {
  species: "cats",
  displaySpecie: function () {
    console.log(`This animal belongs to ${this.species} category`);
  },
};

getAnimals31.displaySpecie();
getAnimals31.displaySpecie.call(animals31);

// #3.2 - call polyfill ===================================================================================================
const animals = {
  species: "Dogs",
};

const getAnimals = {
  species: "cats",
  displaySpecie: function () {
    console.log(`This animal belongs to ${this.species} category`);
  },
};

Object.prototype.animalCall = function (nameObj) {
  nameObj.newMethod = this;
  return nameObj.newMethod();
};

getAnimals.displaySpecie();
getAnimals.displaySpecie.animalCall(animals);

// #4.1 apply ====================================================================================================
const metal41 = {
  name: "Gold",
};

const alloy41 = {
  name: "steel",
  getName: function (substance = "metal41") {
    console.log(`It's ${this.name} not a ${substance}`);
  },
};

alloy41.getName();
alloy41.getName.apply(metal41, ["toy"]);

// #4.2 - apply polyfill =========================================================================================
const metal = {
  name: "Gold",
};

const alloy = {
  name: "steel",
  getName: function (substance = "metal") {
    console.log(`It's ${this.name} not a ${substance}`);
  },
};

Object.prototype.metalApply = function (nameObj, ...args) {
  nameObj.newMethod = this;
  return nameObj.newMethod(...args);
};

alloy.getName();
alloy.getName.apply(metal, ["toy"]);

// #5 - 'caller' property =========================================================================================
function A() {
  console.log(A.caller);
}
function B() {
  A();
  console.log(B.caller); // anonymous
}
B();

// #6 - arguments - array-ike object, not array
// ========================================================================================================
function myFunc() {
  console.log(arguments);
  console.log(arguments.length);
  console.log(typeof arguments + "\n");

  for (let ele of arguments) {
    console.log(ele);
  }
}
myFunc("Rudolf", "Dasher", "Prancer", "Dancer", "Vixen", "Comet");

// [DEPRECATED] - arguments object has property named 'callee'. Allows the anonymous functions to call recursively.
