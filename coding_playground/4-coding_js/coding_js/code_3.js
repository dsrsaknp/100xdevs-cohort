// #1 =======================================================================================================
const person = {
  family: "Parkers",
  place: "NYC",
};
console.log(person);
console.log(person.__proto__);

// using Object.create()
const peter = Object.create(person); // peter gets its protoytpe object equal to person.
console.log("#Peter: ", peter);
console.log(peter.__proto__);
console.log(person.isPrototypeOf(peter));
console.log(Object.getPrototypeOf(peter));
console.log(Object.getPrototypeOf(peter) === person);

// using Object.assign()
const mary = Object.assign({ adjective: "aunt" }, person);
// A new object created here with all properties of person object as mary's own properties, not the prototype props.
console.log("#Mary: ", mary);
console.log(mary.__proto__);
console.log(person.isPrototypeOf(mary));
console.log(Object.getPrototypeOf(mary));
console.log(Object.getPrototypeOf(mary) === person);

// #2 =======================================================================================================
// above implementation using js constructor function

function Person(family, place) {
  this.family = family;
  this.place = place;
}
const peter2 = new Person("Parker", "New York city");
console.log(peter2);
console.log(peter2.__proto__);
console.log(peter2.constructor);
console.log(peter2.constructor.prototype);
console.log(Object.getPrototypeOf(peter2));
console.log(Object.getPrototypeOf(peter2) === Person.prototype);
console.log(Person.prototype);
console.dir(Person);
console.log(Person.prototype.constructor.prototype);
