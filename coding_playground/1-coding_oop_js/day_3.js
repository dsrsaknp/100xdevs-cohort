// //====================================================================================================
// // #1 - Own Property vs. prototype properties
// //====================================================================================================

function Gadget(name, color) {
  this.name = name;
  this.color = color;
  this.whatAreYou = function () {
    return `I'm a ${this.color} ${this.name}`;
  };
}
const gadget1 = new Gadget("speaker", "black");

// console.log(gadget1.constructor);
// console.log(gadget1.constructor.prototype);
// console.log(gadget1.name);
// console.log(gadget1.color);
// console.log(gadget1.whatAreYou());

// // add price, rating and getInfo using prototype of the constructor function.
// // the existing object be inherit the properties added in the prototype its constructor function.

Gadget.prototype.price = 100;
Gadget.prototype.rating = 3;
Gadget.prototype.getInfo = function () {
  return `Rating is ${this.rating} and price is ${this.price}`;
};
Gadget.prototype.get = function (what) {
  return this[what];
};

// console.log(gadget1.constructor);
// console.log(gadget1.constructor.prototype);
// console.log(gadget1.constructor.prototype.constructor);
// console.log(gadget1.constructor.prototype.constructor.prototype);
// console.log(gadget1.toString());

// console.log(gadget1.price);
// console.log(gadget1.rating);
// console.log(gadget1.getInfo());

// //====================================================================================================
// // #2 - Overwriting Prototype's property with own property - pg.154
// //====================================================================================================

// function Cosmetics(name) {
//   this.name = name;
// }
// const brand = new Cosmetics("Sugar");
// console.log("own property: ", brand);

// delete brand.name;
// console.log("deleted name, own property");

// Cosmetics.prototype.name = "Lorealle";
// console.log("name from prototype property used : ", brand.name);

// brand.name = "Himalayan";
// console.log("new own property overwrites Prototypes's property: ", brand);

//====================================================================================================
// #3 - Enumerating properties of an object
//====================================================================================================

console.log(Object.getOwnPropertyDescriptor(gadget1, "name"));
console.log(Object.getOwnPropertyDescriptor(gadget1, "color"));
console.log(
  Object.getOwnPropertyDescriptor(gadget1.constructor.prototype, "price")
);
console.log(Object.getOwnPropertyDescriptor(Gadget.prototype, "rating")); // 
for (let property in gadget1) {
  console.log(`${property}`);
  // includes prototype properties as well, though non-enumerble
}

//====================================================================================================
// #4 - isPrototypeOf
//====================================================================================================

//====================================================================================================
// #5 - the secret __proto__ link
//====================================================================================================

// //====================================================================================================
// // #6 -Object properties and its attributes
// //====================================================================================================

// let person = {
//   firstName: "Sully",
//   lastName: "Joseph",
//   age: 12,
// };

// // #6.1 - Descriptor property
// console.log(Object.getOwnPropertyDescriptor(person, "firstName"));
// console.log(Object.getOwnPropertyDescriptor(person, "lastName"));
// console.log(Object.getOwnPropertyDescriptor(person, "age"));

// // #6.2
// person.age = 34;
// console.log(person.age);
// Object.defineProperty(person, "age", {
//   configurable: false, // try wth true
//   value: 12,
// });
// console.log(person.age);
// delete person.age;
// console.log(person.age); // didn't got deleted as configurable attribute set to false, undefined if true.

// // #6.3
// console.log(person.age);
// Object.defineProperty(person, "age", {
//   configurable: false,
//   writable: false,
//   value: 12,
// });
// delete person.age;
// console.log(person.age);
// person.age = 34;
// console.log(person.age); // writable is false, hence value can't be changed.

// // #6.4
// for (let property in person) {
//   console.log(`${property} value is ${person[property]}`);
// }
// Object.defineProperty(person, "age", {
//   configurable: false,
//   writable: false,
//   enumerable: false,
//   value: 12,
// });

// // after setting enumerable to false to age property.
// for (let property in person) {
//   console.log(`${property} value is ${person[property]}`);
// }

// // #6.5 - Accessor properties
// Object.defineProperty(person, "fullname", {
//   configurable: false,
//   enumerable: false,
//   get: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set: function (value) {
//     let parts = value.split(" ");
//     if (Number(parts.length)) {
//       this.firstName = parts[0];
//       this.lastName = parts[parts.length - 1];
//     } else {
//       throw `Invalid name`;
//     }
//   },
// });
// person.fullName = "Timon Pumba";
// console.log(person.fullName);

// // person.fullName = "";
// // console.log(person.fullName); // UNSOLVED

// console.log(Object.getOwnPropertyDescriptor(person, "fullname"));

// // #6.6 - Multiple proerties
// Object.defineProperties(person, {
//   firstName: {
//     enumerable: true,
//   },
//   lastName: {
//     enumerable: true,
//   },
//   age: {
//     enumerable: true,
//   },
//   // if you add 'accessor property' fullname here, it will be converted to data property and get/ set will be replaced bby writable and value
// });

// console.log(Object.getOwnPropertyDescriptor(person, "firstName"));
// console.log(Object.getOwnPropertyDescriptor(person, "lastName"));
// console.log(Object.getOwnPropertyDescriptor(person, "age"));
// console.log(Object.getOwnPropertyDescriptor(person, "fullname"));
