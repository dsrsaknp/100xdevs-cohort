// // Stopwatch

// function Stopwatch() {
//   let start = false;
//   let stop = false;
//   let duration = 0;
//   let startTime = 0;

//   this.start = function () {
//     if (!start && !stop) {
//       start = true;
//       startTime = new Date();
//       console.log("started!");
//     } else {
//       throw new Error("Stopwatch already running!");
//     }
//   };

//   this.stop = function () {
//     if (!stop && start) {
//       endTime = new Date();
//       duration = endTime - startTime;
//       console.log("stopped!");
//     } else if (!start) {
//       throw new Error("Stopwatch not started!");
//     } else {
//       throw new Error("Stopwatch already stopped!");
//     }
//   };

//   this.duration = function () {
//     console.log(duration);
//   };

//   this.reset = function () {
//     start = false;
//     stop = false;
//     duration = 0;
//     startTime = 0;
//     console.log("Stopwatch has been reset.");
//   };
// }

// let timer1 = new Stopwatch();
// timer1.start();
// timer1.stop();
// timer1.duration();
// timer1.reset;

// #2
function Stopwatch2() {
  // Abstraction
  let startTime;
  let endTime;
  let running = false;
  let timeElapsed = 0;

  this.start = function () {
    if (running) {
      throw new Error(`Already running!`);
    }
    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) {
      throw new Error(`not started yet!`);
    }
    running = false;
    endTime = new Date();
    timeElapsed += (endTime.getTime() - startTime.getTime()) / 1000;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    timeElapsed = 0;
    running = false;
    console.log("Stopwatch has been reset.");
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return timeElapsed + " sec";
    },
  });
}

const timer2 = new Stopwatch2();
timer2.start();
timer2.stop();
timer2.duration();
timer2.reset;
