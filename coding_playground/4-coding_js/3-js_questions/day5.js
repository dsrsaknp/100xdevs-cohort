// // #1 - implement range function
// const range = function (start = 1, end = 0) {
//   const result = [];
//   for (let i = start; i <= end; i++) {
//     result.push(i);
//   }
//   return result;
// };
// range(10, 20);

// // #1.1 - Avoid loop
// const range11 = function (start = 1, end = 1) {
//   return [...Array(end - start).keys()].map((el) => el + start);
// };
// console.log(range11(10, 20));
// console.log(range11(1, 20));

// // #2 - shuffle function
// const shuffle = (items) => {
//   // items could be elements, objects, array, array of arrays
//   return items
//     .map((item) => ({ sort: Math.random(), value: item }))
//     .sort((item1, item2) => item1.sort - item2.sort)
//     .map((item) => item.value);
// };

// console.log(shuffle([2, 1, 3, 4]));

// // #3 - Number of occurrances of minimum values in list
// const minValueFrequency = (items) => {
//   let f = items
//     .sort((item1, item2) => item1 - item2)
//     .reduce((acc, item) => {
//       if (items[0] === item) acc += 1;
//       return acc;
//     }, 0);
//   return f;
// };

// console.log(minValueFrequency([4, 5, 5, 6, 3, 2, 3, 5, 4, 3, 2, 2, 2]));

// // #3.1 - optimum method
// const minValueOccurances = (items) => {
//   const minValue = Math.min(...items);
//   const minValueArray = items.filter((item) => item === minValue);
//   return minValueArray.length;
// };

// console.log(minValueFrequency([4, 5, 5, 6, 3, 2, 3, 5, 4, 3, 2, 2, 2]));

// #4 - This

class Item {
  title = "Ball";
  getItem() {
    console.log("this: ", this);
  }
}
const item = new Item();
item.getItem();

// #4.1 - This

class Item1 {
  title = "Ball";
  getItem() {
    (function () {
      console.log("this: ", this);
    })();
  }
}
const item1 = new Item1();
item1.getItem();

// #4.2 - This

class Item2 {
  title = "Ball";
  getItem() {
    function somefunc() {
      console.log("this: ", this);
    }
    somefunc();
  }
}
const item2 = new Item2();
item2.getItem();

// #4.3 - This

class Item3 {
  title = "Ball";
  getItem() {
    const somefunc = () => {
      console.log("this: ", this);
    };
    somefunc();
  }
}
const item3 = new Item3();
item3.getItem();

// #4.4 - This

class Item4 {
  title = "Ball";
  getItem() {
    (() => {
      console.log("this: ", this);
    })();
  }
}
const item4 = new Item4();
item4.getItem();

// #4.5 - This
class Item5 {
  title = "Ball";
  getItem() {
    [1, 2, 3].map((el) => {
      console.log("map with arrow: ", this);
    });
  }
}
const item5 = new Item5();
item5.getItem();

// #4.6 - This

class Item6 {
  title = "Ball";
  getItem() {
    [1, 2, 3].map(function (el) {
      console.log("map without arrow: ", this);
    });
  }
}
const item6 = new Item6();
item6.getItem();

// #4.7 - This

class Item7 {
  title = "Ball";
  getItem() {
    const _this = this;
    [1, 2, 3].map(function (el) {
      console.log("map without arrow using this_: ", _this);
    });
  }
}
const item7 = new Item7();
item7.getItem();
