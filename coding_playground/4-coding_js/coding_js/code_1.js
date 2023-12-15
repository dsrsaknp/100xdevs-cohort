// [1.1] ERROR: CLOSURES IS NOT APPLICABLE HERE
function outer(callback) {
  let x_outer = 1;
  callback();
}
function inner() {
  let x_inner = 2;
  console.log(x_inner, x_outer);
}
outer(inner);

// [1.2] CORRECT IMPLEMENTATION OF CLOSURES
function outer() {
  let x_outer = 1;
  function inner() {
    let x_inner = 2;
    console.log(x_inner, x_outer);
  }
  return inner;
}
inner = outer();
inner();

// ====================================================================================

// [2.1] Event loop
$.on("button", "click", function onClick() {
  setTimeout(function timer() {
    console.log("You clicked the button!");
  }, 20000);
});
console.log("Hi!");
setTimeout(function timeout() {
  console.log("Click the button - 20 sec!");
}, 20000);
setTimeout(function timeout() {
  console.log("Click the button! - 10 sec");
}, 10000);
console.log("Welcome to loupe");

// OUTPUT:
// Hi!
// Welcome to loupe
// Click the button! - 10 sec
// Click the button! - 20 sec!
// You clicked the button!

// [2.2]
$.on("button", "click", function onClick() {
  setTimeout(function timer() {
    console.log("You clicked the button!");
  }, 2000);
});
console.log("Hi!");
setTimeout(function timeout() {
  console.log("Click the button - 20 sec!");
}, 20000);
setTimeout(function timeout() {
  console.log("Click the button! - 10 sec");
}, 10000);
console.log("Welcome to loupe");

// OUTPUT:  When the button is clicked in 2 sec fter running the code.
// Hi!
// Welcome to loupe
// You clicked the button!   <====
// Click the button! - 10 sec
// Click the button! - 20 sec!

// [2.3]
$.on("button", "click", function onClick() {
  setTimeout(function timer() {
    console.log("You clicked the button!");
  }, 12000);
});

console.log("Hi!");

setTimeout(function timeout() {
  console.log("Click the button - 20 sec!");
}, 20000);

setTimeout(function timeout() {
  console.log("Click the button! - 10 sec");
}, 8000);

console.log("Welcome to loupe");

// OUTPUT:
// Hi!
// Welcome to loupe
// Click the button! - 10 sec
// You clicked the button!
// Click the button! - 20 sec!

// ====================================================================================
// [3.1] Callbacks & Promises
const fs = require("fs");
function readTheFile(display) {
  fs.readFile("hello.txt", "utf-8", (err, fileContent) => {
    display(fileContent);
  });
}
function display(data) {
  console.log(data);
}
readTheFile(display);

// [3.2]  If you get the content from promise/api call, then only invoke the function
const fs = require("fs");
function readTheFile() {
  return new Promise((resolve, reject) => {
    fs.readFile("hello.jst", "utf-8", (err, fileContent) => {
      if (err) reject(err);
      resolve(fileContent);
    });
  });
}
function display(data) {
  console.log(data);
}
readTheFile()
  .then((data) => display(data))
  .catch((error) => console.log(error));

// [3.3]  If you get the content from promise/api call, then only invoke the function
const fs = require("fs");
function readTheFile() {
  return new Promise((resolve, reject) => {
    fs.readFile("hello.tst", "utf-8", (err, fileContent) => {
      if (err) reject(err);
      resolve(fileContent);
    });
  });
}
function display(data) {
  console.log(data);
}
readTheFile().then(display); // callback invoked with fileContent passed internally

// [3.4]
const fs = require("fs");
function readTheFile() {
  return new Promise((resolve, reject) => {
    fs.readFile("hello.tst", "utf-8", (err, fileContent) => {
      if (err) reject(err);
      resolve(fileContent);
    });
  });
}
function display(data) {
  console.log(data);
}
readTheFile().then(display).catch(display); // better way to handle error

// [3.5]
function A() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("A executed right away!!"));
    }, 0);
  });
}

function B() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("B took 10 secs"));
    }, 10 * 1000);
  });
}

function C() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("C took 5 secs"));
    }, 5 * 1000);
  });
}

A().then(B).then(C);

// [3.6] - changed the sequence
function A() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log("A executed right away!!"));
      }, 0);
    });
  }

  function B() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log("B took 10 secs"));
      }, 10 * 1000);
    });
  }

  function C() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log("C took 5 secs"));
      }, 5 * 1000);
    });
  }

  B().then(A).then(C);

// [3.7] 
function A() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("A executed right away!!"));
    }, 0);
  });
}

function B() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("B took 10 secs"));
    }, 10 * 1000);
  });
}

function C() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("C took 5 secs"));
    }, 5 * 1000);
  });
}

async function main() {
  let a = await A();
  let b = await B();
  let c = await C();
}

main();

// ====================================================================================

// [4.1] using async await - Efficient way of writing promises (resolve and reject not admissible here)
async function A() {
  setTimeout(() => {
    console.log("A executed right away!!");
  }, 0);
}

async function B() {
  setTimeout(() => {
    console.log("B took 10 secs");
  }, 10 * 1000);
}

async function C() {
  setTimeout(() => {
    console.log("C took 5 secs");
  }, 5 * 1000);
}

async function getData() {
  // this async function is needed as await can only be used inside an async
  const a = await A();
  const b = await B();
  const c = await C();
  console.log(a); // undefined
  console.log(b); // undefined
  console.log(c); // undefined
}

getData(); // * OUTPUTS AS PER TIMEOUT SEQUENCE IRRESPECTIVE OF THE CALLING SEQUENCE

// [4.2] TRICKY async
async function A() {
  setTimeout(() => {
    console.log("A executed right away!!");
  }, 0);
}

async function B() {
  setTimeout(() => {
    console.log("B took 10 secs");
  }, 10 * 1000);
}

async function C() {
  setTimeout(() => {
    console.log("C took 5 secs");
  }, 5 * 1000);
}

B().then(C).then(A);

// ====================================================================================

// [5] - Exercise

// Simple callback
function kiratAsyncFunction(callback) {
  callback("hi there!");
}
function main() {
  kiratAsyncFunction(function (value) {
    console.log(value);
  });
}
main();

// Write the above callback in promise
function kiratAsyncFunction() {
  return new Promise((resolve, reject) => {
    resolve("hi there!");
  });
}
function main() {
  kiratAsyncFunction().then(function (value) {
    console.log(value);
  });
}
main();

// Write in async await
function kiratAsyncFunction() {
  return new Promise((resolve, reject) => {
    resolve("hi there!");
  });
}

async function main() {
  let value = await kiratAsyncFunction();
  console.log(value);
}
main();

// [5.1] Exercise
function kiratAsyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hi there 1");
    }, 5000);
  });
}

async function main() {
  let value = await kiratAsyncFunction();
  console.log(value);
  console.log("hi there 2");
  console.log("hi there 3");
  console.log("hi there 4");
  console.log("hi there 5");
}
main();
