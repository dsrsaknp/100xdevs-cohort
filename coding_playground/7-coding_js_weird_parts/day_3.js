// // Object-orientation and Prototype

// // #1
// console.log("#[1]");
// function Person(firstname, lastname) {
//   return "RETURNED";
//   this.firstname = firstname;
//   this.lastname = lastname;
//   console.log("This is Person constructor function");
// }

// const jack = new Person("Jack", "Doe");
// console.log(jack);

// // #1.1
// console.log("#[1.1]");
// function Person1(firstname, lastname) {
//   this.firstname = firstname;
//   this.lastname = lastname;
//   console.log("This is Person constructor function");
//   return "RETURNED";
// }

// const jill = new Person1("Jill", "Doe");
// console.log(jill);

// #2
console.log("#[2]");
function Person2(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

const john = new Person2("John", "Doe");

Person2.prototype.getFullname = function () {
  return `${this.firstname} ${this.lastname}`;
};

const jane = new Person2("Jane", "Doe");

console.log(john);
console.log(john.getFullname());

console.log(jane);
console.log(jane.getFullname());
