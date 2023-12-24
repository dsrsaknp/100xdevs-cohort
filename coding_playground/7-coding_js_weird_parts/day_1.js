// // [#1] - Closures with var declaration in for loop
// console.log("[#1]");

// function buildFunctions() {
//   const arr = [];
//   for (var i = 0; i < 3; i++) {
//     arr.push(function () {
//       console.log(i);
//     });
//   }
//   return arr;
// }
// const fs = buildFunctions();
// fs[0]();
// fs[1]();
// fs[2]();

// // [#1.1] - [Fix] Closures with var declaration in for loop
// console.log("[#1.1]");

// function buildFunctions1() {
//   const arr = [];
//   for (var i = 0; i < 3; i++) {
//     arr.push(
//       (function (j) {
//         return function () {
//           console.log(j);
//         };
//       })(i)
//     );
//   }
//   return arr;
// }

// const fs1 = buildFunctions1();
// fs1[0]();
// fs1[1]();
// fs1[2]();

// // [#2] - Closures with let declaration in for loop
// console.log("[#2]");
// function buildFunctions2() {
//   const arr = [];
//   for (let i = 0; i < 3; i++) {
//     arr.push(function () {
//       console.log(i);
//     });
//   }
//   return arr;
// }

// const fs2 = buildFunctions2();
// fs2[0]();
// fs2[1]();
// fs2[2]();

// // [#3]
// console.log("[#3]");
// function buildFunctions3() {
//   for (let i = 1; i <= 10; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// buildFunctions3();

// [#3.1] - using var
console.log("[#3.1]");
function buildFunctions31() {
  for (var i = 1; i <= 10; i++) {
    (function (j) {
      setTimeout(() => {
        console.log(j);
      }, j * 1000);
    })(i);
  }
}

buildFunctions31();
