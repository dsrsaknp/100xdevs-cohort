// Promise.resolve().then(() => console.log(3));

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello There!");
//   });
// }).then((val) => {
//   console.log(val);
// });
// new Promise(callback_1(res, rej)).then(callback_2(val));

const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

var CustomPromise = function (cb) {
  let state = PENDING;
  let value = null;
  const handlers = [];
  const catchers = [];

  function resolve(val) {
    console.log(1);
    if (state !== PENDING) return;
    state = FULFILLED;
    value = val;
    handlers.forEach((h) => h(value));
    // console.log("[1] " + handlers);
  }

  function reject(val) {
    console.log(2);
    if (state !== PENDING) return;
    state = REJECTED;
    value = val;
    handlers.forEach((c) => c(value));
    // console.log("[2] " + catchers);
  }

  this.then = function (callback) {
    console.log(3);
    if (state === FULFILLED) {
      callback(value);
    } else if (state === REJECTED) {
      return this;
    } else {
      console.log(3.1);
      handlers.push(callback);
    }
  };

  this.catch = function (callback) {
    console.log(4);
    if (state === REJECTED) {
      callback(value);
    } else {
      console.log(4.1);
      handlers.push(callback);
    }
  };

  cb(resolve, reject);
};

new CustomPromise((res, rej) => {
  setTimeout(() => {
    // res("New custom promise created!");
    rej("Rejected promise.");
  }, 2000);
  //   rej("Rejected promise.");
})
  .then((val) => {
    console.log("Promise resolved: ", val);
  })
  .catch((err) => {
    console.log("ERROR: ", err);
  });
