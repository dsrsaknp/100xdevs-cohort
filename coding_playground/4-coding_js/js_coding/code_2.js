// Calcuate time elapsed

// #1 ==========================================================================================
console.log("#1");
let startTime = new Date();
console.log(startTime);

let endTime = new Date();
console.log(endTime);

let timeElapsed = endTime - startTime;
console.log(timeElapsed);


// #2 ==========================================================================================
let startTime2 = performance.now();
console.log(startTime);

let endTime2 = performance.now();
console.log(endTime);

let timeElapsed2 = endTime2 - startTime2;
console.log(timeElapsed);


// #3 =========================================================================================
console.log("#2");
console.time("Execution Time");
for (let i = 0; i < 100000; i++) {}
console.timeEnd("Execution Time");
