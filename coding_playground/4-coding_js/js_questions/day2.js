// output of these

// #1
let var1;
console.log(var1);
console.log(typeof var1);

// #2
let var2 = null;
console.log(var2);
console.log(typeof var2);

// #3
console.log(foo);
foo = 1; // hoisting won't happen unless declared usig var

// #4
console.log(foo1);
var foo1 = 2;

// #5
foo2 = 3;
console.log(foo2);
var foo2;
