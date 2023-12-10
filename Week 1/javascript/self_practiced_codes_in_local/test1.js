// Hi, I have a doubt in the following code snippet. I want the output to be in the order - A, B, C, but I'm getting A, C, B. I couldn't understand how C function is getting called despite using await for function B inside main

function A() {
  console.log("function A");
}

function B() {
  setTimeout(() => {
    console.log("function B");
  }, 10000);
}

function C() {
  setTimeout(() => {
    console.log("function C");
  }, 5000);
}

async function main() {
  let a = await A();
  let b = await B();
  let c = await C();
}

main();

// // let p = new Promise()

// // {-2, -3, 4, -1, -2, 1, 5, -3} // 7
// let arr = [-2, -3, 4, -1, -2, 1, 5, -3];

// let sum = 7;
// let len = arr.length();
// for (let i = 0; i < len - 1; i++) {
//   for (let j = i + 1; j < len; j++) {}
// }
