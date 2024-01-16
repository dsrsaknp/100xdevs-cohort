// // #1 - implement range function
// const range = function (start = 1, end = 0) {
//   const result = [];
//   for (let i = start; i <= end; i++) {
//     result.push(i);
//   }
//   return result;
// };
// range(10, 20);

// #1.1 - Avoid loop
const range11 = function (start = 1, end = 1) {
  return [...Array(end - start).keys()].map((el) => el + start);
};
console.log(range11(10, 20));
console.log(range11(1, 20));
