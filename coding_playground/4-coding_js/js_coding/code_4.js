// #1 - Flatten array
// [1, 2, [3, 4, [5, 6]]]
// [1,2,3,4,5,6]

// #1.1 - using reduce and recursion
const flattenArray = (arr) => {
  const newArr = [...arr];
  const a = newArr.reduce((acc, el) => {
    acc = el.length ? [...acc, ...flattenArray(el)] : [...acc, el];
    return acc;
  }, []);
  return a;
};

// #1.2 - using for loop and recursion
const arr = [1, 2, [3, 4, [5, 6]], 7];
console.log(flattenArray(arr));

const flattenArray1 = (arr) => {
  const newArr1 = [...arr];
  let result = [];
  newArr1.forEach((el) => {
    if (el instanceof Array) {
      result = [...result, ...flattenArray1(el)];
    } else {
      result = [...result, el];
    }
  });
  return result;
};
const arr1 = [1, 2, [3, 4, [5, 6]], 7];

console.log(flattenArray1(arr1));
