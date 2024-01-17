// Counter function with increment and getValue functionality
// (Closure question)

// #1
function privateCounter() {
  let count = 0;
  return {
    increment: function (val = 1) {
      count += val;
    },
    getvalue: function () {
      return count;
    },
  };
}

const counter = privateCounter();
console.log(counter.getvalue());
counter.increment();
console.log(counter.getvalue());

// console.dir(counter.getvalue);

// #2
function privateSecret() {
  let secret = 234243;
  return () => secret;
}

const getSecret = privateSecret();
console.log(getSecret());

// #4** - function that multiplies a and b and achieves multiply(a)(b)
function multiply(a) {
  return function (b) {
    return a * b;
  };
}
const product = multiply(10)(4);
console.log(product);

// #4.1**
const multiply1 = (num1) => (num2) => num1 * num2;
console.log(multiply1(12)(2));

// #4.2 ***
const curry1 = function (fn) {
  let arity = fn.length;
  return function f1(...args) {
    console.log("args inside f1: ", args);
    console.log("arity inside f1: ", arity);
    if (args.length >= arity) {
      return fn(...args);
    } else {
      console.log("f1 else part");
      return function f2(...nextArg) {
        let newArgs = args.concat(nextArg);
        console.log("args inside f2: ", newArgs);
        console.log("arity inside f2: ", arity);
        return f1(...newArgs);
      };
    }
  };
};

const curriedSum = curry1((a, b, c) => a + b + c);
console.log("partially executed ", curriedSum(1));
console.log("partially executed ", curriedSum(1)(2));
console.log(curriedSum(1)(2, 3));
// console.log(curriedSum(1)(2, 3)(4));

// #4.3***
const curry2 = function (fn) {
  let arity = fn.length;
  return function f1(...args) {
    console.log("args inside f1: ", args);
    console.log("arity inside f1: ", arity);
    if (args.length >= arity) {
      return fn(...args);
    } else {
      console.log("f1 else part");
      return function f2(...nextArg) {
        let newArgs = args.concat(nextArg);
        console.log("args inside f2: ", newArgs);
        console.log("arity inside f2: ", arity);
        return f1(...newArgs);
      };
    }
  };
};

const get = curry2((property, object) => object[property]); // f1
console.log("get", get);

const getId = get("id"); // f2
console.log("getId", getId);

console.log(getId({ id: 15 })); // finally passed all arguments

// #4.4***
// 1. on first call, returns f1
// 2. if incomplete parameters, returns f2
// 3. incomplete parameters, repeat 2.
// 4. complete parameters, then execute fn.
const curry3 = function (fn) {
  let arity = fn.length;
  return function f1(...args) {
    // console.log("args inside f1: ", args);
    // console.log("arity inside f1: ", arity);
    if (args.length >= arity) {
      return fn(...args);
    } else {
      // console.log("f1 else part");
      return function f2(...nextArg) {
        let newArgs = args.concat(nextArg);
        // console.log("args inside f2: ", newArgs);
        // console.log("arity inside f2: ", arity);
        return f1(...newArgs);
      };
    }
  };
};

const get1 = curry3((property, object) => object[property]);
const getId1 = get1("id");
const map = curry3((fn, values) => values.map(fn));
const getIds = map(getId1);
console.log(getIds([{ id: 23 }]));
