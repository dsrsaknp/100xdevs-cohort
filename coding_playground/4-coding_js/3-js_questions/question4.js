// // #1
// console.log("[#1]");
// const A = [3, 4, 5];
// const append = function (arr, ...args) {
//   const newArr = [...arr]; // Always remember to not alter the original array
//   newArr.push(...args);
//   return newArr;
// };
// const B = append(A, 12, 13);
// console.log(A);
// console.log(B);

// // #1.1 - optimized
// console.log("[#1.1]");
// const A1 = [3, 4, 5];
// const append1 = function (arr, ...args) {
//   return [...arr, ...args];
// };

// const B1 = append(A1, 12, 13);
// console.log(A1);
// console.log(B1);

// // #2 - concatenate 2 arrays
// console.log("[#2]");
// const concat = function (arr1, arr2) {
//   return [...arr1, ...arr2];
// };
// const A2 = [1, 2, 3, 4];
// const B2 = [5, 6, 7];
// const C2 = concat(A2, B2);
// console.log(A2);
// console.log(B2);
// console.log(C2);

// // #2.1 - concatenate multiple arrays
// console.log("[#2.1]");
// const merge = function (arr1, arr2) {
//   return arr1.concat(arr2);
// };
// const A4 = [1, 2, 3, 4];
// const B4 = [5, 6, 7];
// const C4 = merge(A4, B4);
// console.log(A4);
// console.log(B4);
// console.log(C4);

// // #3 - .some, .find, .findIndex
// const users = [
//   {
//     id: 1,
//     name: "Jack",
//     isActive: true,
//     age: 20,
//   },
//   {
//     id: 2,
//     name: "John",
//     isActive: true,
//     age: 18,
//   },
//   {
//     id: 3,
//     name: "Mike",
//     isActive: false,
//     age: 30,
//   },
// ];

// // #3.1
// const isNameExists = function (arr, value) {
//   for (obj of arr) {
//     if (obj.hasOwnProperty("name") && obj.name === value) {
//       return 1;
//     }
//   }
//   return 0;
// };

// console.log(isNameExists(users, "Jack"));
// console.log(isNameExists(users, "Mike"));
// console.log(isNameExists(users, "Jason"));

// // #3.2
// const isNameExists1 = (users, value) =>
//   users.some((user) => user.name === value);

// console.log(isNameExists1(users, "Jack"));
// console.log(isNameExists1(users, "Mike"));
// console.log(isNameExists1(users, "Jason"));

// // #3.3
// const isNameExists2 = (users, value) => {
//   const user = users.find((user) => user.name === value);
//   return Boolean(user);
// };

// console.log(isNameExists2(users, "Jack"));
// console.log(isNameExists2(users, "Mike"));
// console.log(isNameExists2(users, "Jason"));

// // #3.4
// const isNameExists3 = (users, value) => {
//   const index = users.findIndex((user) => user.name === value);
//   return index >= 0;  /// NOTE
// };
// console.log(isNameExists3(users, "Jack"));
// console.log(isNameExists3(users, "Mike"));
// console.log(isNameExists3(users, "Jason"));

// // #4
// const removeDuplicates = (arr) => {
//   return Array.from(new Set(arr));
// };

// const A4 = [1, 1, 2, 3, 4, 5, 6, 6, 4, 4, 4, 4];
// console.log(removeDuplicates(A4));

// // #4.1
// const removeDuplicates1 = (arr) => {
//   return [...new Set(arr)];
// };

// const A1 = [1, 1, 2, 3, 4, 5, 6, 6, 4, 4, 4, 4];
// console.log(removeDuplicates1(A1));

// // #4.2
// const removeDuplicates42 = (arr) => {
//   const result = [];
//   arr.forEach((el) => {
//     if (!result.includes(el)) {
//       result.push(el);
//     }
//   });
//   return result;
// };

// const A42 = [1, 1, 2, 3, 4, 5, 6, 6, 4, 4, 4, 4];
// console.log(removeDuplicates42(A42));

// #4.3
const removeDuplicates43 = (arr) => {
  return arr.reduce((acc, el) => {
    return acc.includes(el) ? acc : [...acc, el];
  }, []);
};

const A43 = [1, 1, 2, 3, 4, 5, 6, 6, 4, 4, 4, 4];
console.log(removeDuplicates43(A43));
