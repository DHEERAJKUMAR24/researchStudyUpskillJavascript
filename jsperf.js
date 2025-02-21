// // // // // // const Benchmark = require("benchmark");
// // // // // // const { performance } = require("perf_hooks");


// // // // // // const suite = new Benchmark.Suite();

// // // // // // // Function to test (Modify this with your actual function)
// // // // // // function exampleFunction(arr) {
// // // // // //     return arr.map(x => x * 2);
// // // // // // }

// // // // // // // Function to estimate time complexity
// // // // // // function analyzeTimeComplexity(fn, inputSizes) {
// // // // // //     console.log("\n=== Time Complexity Analysis ===");
// // // // // //     let results = [];

// // // // // //     inputSizes.forEach(size => {
// // // // // //         const input = Array.from({ length: size }, (_, i) => i);
        
// // // // // //         const start = performance.now();
// // // // // //         fn(input);
// // // // // //         const end = performance.now();

// // // // // //         const timeTaken = end - start;
// // // // // //         results.push({ size, timeTaken });
// // // // // //         console.log(`Input Size: ${size}, Time Taken: ${timeTaken.toFixed(4)} ms`);
// // // // // //     });

// // // // // //     return results;
// // // // // // }

// // // // // // // Function to measure memory usage
// // // // // // function analyzeMemoryUsage(fn, input) {
// // // // // //     console.log("\n=== Memory Usage Analysis ===");

// // // // // //     const before = process.memoryUsage().heapUsed / 1024 / 1024; // Convert bytes to MB
// // // // // //     fn(input);
// // // // // //     const after = process.memoryUsage().heapUsed / 1024 / 1024; 

// // // // // //     console.log(`Memory Used: ${(after - before).toFixed(4)} MB`);
// // // // // //     return after - before;
// // // // // // }


// // // // // // // Run Benchmark.js
// // // // // // suite
// // // // // //     .add("Array Map Benchmark", function () {
// // // // // //         exampleFunction(Array.from({ length: 10000 }, (_, i) => i));
// // // // // //     })
// // // // // //     .on("cycle", function (event) {
// // // // // //         console.log(String(event.target));
// // // // // //     })
// // // // // //     .on("complete", function () {
// // // // // //         console.log("Fastest function: " + this.filter("fastest").map("name"));
// // // // // //     })
// // // // // //     .run({ async: true });

// // // // // // // Run Time Complexity Analysis
// // // // // // const timeResults = analyzeTimeComplexity(exampleFunction, [10, 100, 1000, 10000, 100000]);

// // // // // // // Run Memory Complexity Analysis
// // // // // // const input = Array.from({ length: 100000 }, (_, i) => i);
// // // // // // const memoryUsed = analyzeMemoryUsage(exampleFunction, input);


// // // // // const Benchmark = require("benchmark");
// // // // // const { performance } = require("perf_hooks");

// // // // // // Garbage Collection (Run Node with --expose-gc)
// // // // // if (global.gc) {
// // // // //     global.gc();
// // // // // } else {
// // // // //     console.warn("Run Node with --expose-gc for accurate memory tracking.");
// // // // // }

// // // // // // 🔹 Function 1: Using Array.map()
// // // // // function exampleFunctionMap(arr) {
// // // // //     return arr.map(x => x * 2);
// // // // // }

// // // // // // 🔹 Function 2: Using a for loop
// // // // // function exampleFunctionLoop(arr) {
// // // // //     let result = [];
// // // // //     for (let i = 0; i < arr.length; i++) {
// // // // //         result.push(arr[i] * 2);
// // // // //     }
// // // // //     return result;
// // // // // }

// // // // // // 📊 **Time Complexity Analysis**
// // // // // function analyzeTimeComplexity(fn, inputSizes) {
// // // // //     console.log("\n=== Time Complexity Analysis ===");
// // // // //     let previousTime = null;

// // // // //     inputSizes.forEach(size => {
// // // // //         const input = Array.from({ length: size }, (_, i) => i);
        
// // // // //         const start = performance.now();
// // // // //         fn(input);
// // // // //         const end = performance.now();

// // // // //         const timeTaken = end - start;
// // // // //         let growth = previousTime ? (timeTaken / previousTime).toFixed(2) : "N/A";

// // // // //         console.log(`Input Size: ${size}, Time Taken: ${timeTaken.toFixed(4)} ms, Growth: ${growth}x`);
// // // // //         previousTime = timeTaken;
// // // // //     });
// // // // // }

// // // // // // 📈 **Memory Usage Analysis**
// // // // // function analyzeMemoryUsage(fn, input) {
// // // // //     console.log("\n=== Memory Usage Analysis ===");

// // // // //     global.gc(); // Force garbage collection
// // // // //     const before = process.memoryUsage().heapUsed / 1024 / 1024; // Convert bytes to MB
    
// // // // //     fn(input);
    
// // // // //     const during = process.memoryUsage().heapUsed / 1024 / 1024;
    
// // // // //     global.gc();
// // // // //     const after = process.memoryUsage().heapUsed / 1024 / 1024;

// // // // //     console.log(`Before Execution: ${before.toFixed(4)} MB`);
// // // // //     console.log(`During Execution: ${during.toFixed(4)} MB`);
// // // // //     console.log(`After Execution: ${after.toFixed(4)} MB`);
// // // // // }

// // // // // // 📌 **Run Time Complexity & Memory Analysis**
// // // // // const inputSizes = [10, 100, 1000, 10000, 100000];

// // // // // analyzeTimeComplexity(exampleFunctionMap, inputSizes);
// // // // // analyzeTimeComplexity(exampleFunctionLoop, inputSizes);

// // // // // const input = Array.from({ length: 100000 }, (_, i) => i);
// // // // // analyzeMemoryUsage(exampleFunctionMap, input);
// // // // // analyzeMemoryUsage(exampleFunctionLoop, input);

// // // // // // ⚡ **Benchmark.js Performance Testing**
// // // // // const suite = new Benchmark.Suite();

// // // // // suite
// // // // //     .add("Array Map", function () {
// // // // //         exampleFunctionMap(Array.from({ length: 10000 }, (_, i) => i));
// // // // //     })
// // // // //     .add("For Loop", function () {
// // // // //         exampleFunctionLoop(Array.from({ length: 10000 }, (_, i) => i));
// // // // //     })
// // // // //     .on("cycle", function (event) {
// // // // //         console.log(String(event.target));
// // // // //     })
// // // // //     .on("complete", function () {
// // // // //         console.log("Fastest function: " + this.filter("fastest").map("name"));
// // // // //     })
// // // // //     .run({ async: true });


// // // // const Benchmark = require("benchmark");
// // // // const { performance } = require("perf_hooks");

// // // // // Garbage Collection (Run with --expose-gc)
// // // // if (global.gc) {
// // // //     global.gc();
// // // // } else {
// // // //     console.warn("Run Node with --expose-gc for accurate memory tracking.");
// // // // }

// // // // // Functions to Benchmark
// // // // function exampleFunctionMap(arr) {
// // // //     return arr.map(x => x * 2);
// // // // }

// // // // function exampleFunctionLoop(arr) {
// // // //     let result = [];
// // // //     for (let i = 0; i < arr.length; i++) {
// // // //         result.push(arr[i] * 2);
// // // //     }
// // // //     return result;
// // // // }

// // // // // Warm-Up Execution
// // // // function warmUp(fn) {
// // // //     console.log(`\n🔥 Warming up ${fn.name}...`);
// // // //     for (let i = 0; i < 5; i++) {
// // // //         fn(Array.from({ length: 10000 }, (_, i) => i));
// // // //     }
// // // // }

// // // // // Time Complexity Analysis with Warm-Up
// // // // function analyzeTimeComplexity(fn, inputSizes) {
// // // //     console.log(`\n=== Time Complexity Analysis (${fn.name}) ===`);
// // // //     warmUp(fn);
    
// // // //     let previousTime = null;

// // // //     inputSizes.forEach(size => {
// // // //         const input = Array.from({ length: size }, (_, i) => i);
        
// // // //         const start = performance.now();
// // // //         fn(input);
// // // //         const end = performance.now();

// // // //         const timeTaken = end - start;
// // // //         let growth = previousTime ? (timeTaken / previousTime).toFixed(2) : "N/A";

// // // //         console.log(`Input Size: ${size}, Time Taken: ${timeTaken.toFixed(4)} ms, Growth: ${growth}x`);
// // // //         previousTime = timeTaken;
// // // //     });
// // // // }

// // // // // Memory Usage Analysis
// // // // function analyzeMemoryUsage(fn, input) {
// // // //     console.log(`\n=== Memory Usage Analysis (${fn.name}) ===`);
    
// // // //     warmUp(fn);
// // // //     global.gc();
    
// // // //     const before = process.memoryUsage().heapUsed / 1024 / 1024;
    
// // // //     fn(input);
    
// // // //     const during = process.memoryUsage().heapUsed / 1024 / 1024;
    
// // // //     global.gc();
// // // //     const after = process.memoryUsage().heapUsed / 1024 / 1024;

// // // //     console.log(`Before Execution: ${before.toFixed(4)} MB`);
// // // //     console.log(`During Execution: ${during.toFixed(4)} MB`);
// // // //     console.log(`After Execution: ${after.toFixed(4)} MB`);
// // // // }

// // // // // Run Analysis
// // // // const inputSizes = [10, 100, 1000, 10000, 100000];
// // // // analyzeTimeComplexity(exampleFunctionMap, inputSizes);
// // // // analyzeTimeComplexity(exampleFunctionLoop, inputSizes);

// // // // const input = Array.from({ length: 100000 }, (_, i) => i);
// // // // analyzeMemoryUsage(exampleFunctionMap, input);
// // // // analyzeMemoryUsage(exampleFunctionLoop, input);

// // // // // Benchmark.js with Warm-Up
// // // // const suite = new Benchmark.Suite();
// // // // warmUp(exampleFunctionMap);
// // // // warmUp(exampleFunctionLoop);

// // // // suite
// // // //     .add("Array Map", function () {
// // // //         exampleFunctionMap(Array.from({ length: 10000 }, (_, i) => i));
// // // //     })
// // // //     .add("For Loop", function () {
// // // //         exampleFunctionLoop(Array.from({ length: 10000 }, (_, i) => i));
// // // //     })
// // // //     .on("cycle", function (event) {
// // // //         console.log(String(event.target));
// // // //     })
// // // //     .on("complete", function () {
// // // //         console.log("Fastest function: " + this.filter("fastest").map("name"));
// // // //     })
// // // //     .run({ async: true });

// // // const Benchmark = require("benchmark");
// // // const { performance, PerformanceObserver } = require("perf_hooks");

// // // // Function to test
// // // function exampleFunctionMap(arr) {
// // //     return arr.map(x => x * 2);
// // // }

// // // function exampleFunctionLoop(arr) {
// // //     let result = [];
// // //     for (let i = 0; i < arr.length; i++) {
// // //         result.push(arr[i] * 2);
// // //     }
// // //     return result;
// // // }

// // // // Measure execution time for different input sizes
// // // function analyzeTimeComplexity(fn, label) {
// // //     console.log(`\n=== Time Complexity Analysis (${label}) ===`);
// // //     console.log("\n🔥 Warming up " + label + "...");

// // //     let prevTime = null;
// // //     [10, 100, 1000, 10000, 100000].forEach(size => {
// // //         let input = Array.from({ length: size }, (_, i) => i);
        
// // //         // Run the function once to trigger optimizations
// // //         fn(input);

// // //         let start = performance.now();
// // //         fn(input);
// // //         let end = performance.now();

// // //         let timeTaken = (end - start).toFixed(4);
// // //         let growthFactor = prevTime ? (timeTaken / prevTime).toFixed(2) : "N/A";
// // //         prevTime = timeTaken;

// // //         console.log(`Input Size: ${size}, Time Taken: ${timeTaken} ms, Growth: ${growthFactor}x`);
// // //     });
// // // }

// // // // Measure memory usage before, during, and after execution
// // // function analyzeMemoryUsage(fn, label) {
// // //     if (!global.gc) {
// // //         console.warn("Garbage collector not enabled! Run Node with --expose-gc flag.");
// // //         return;
// // //     }

// // //     console.log(`\n=== Memory Usage Analysis (${label}) ===`);
// // //     console.log("\n🔥 Warming up " + label + "...");
    
// // //     global.gc(); // Force garbage collection before measuring
// // //     let before = process.memoryUsage().heapUsed / 1024 / 1024;
    
// // //     let input = Array.from({ length: 100000 }, (_, i) => i);
    
// // //     let during;
// // //     let obs = new PerformanceObserver((items) => {
// // //         during = process.memoryUsage().heapUsed / 1024 / 1024;
// // //         items.disconnect();
// // //     });
// // //     obs.observe({ entryTypes: ["function"] });
    
// // //     fn(input);
    
// // //     global.gc(); // Force garbage collection after execution
// // //     let after = process.memoryUsage().heapUsed / 1024 / 1024;

// // //     console.log(`Before Execution: ${before.toFixed(4)} MB`);
// // //     console.log(`During Execution: ${during.toFixed(4)} MB`);
// // //     console.log(`After Execution: ${after.toFixed(4)} MB`);
// // // }

// // // // Benchmark execution speed
// // // function runBenchmark() {
// // //     const suite = new Benchmark.Suite();

// // //     suite
// // //         .add("Array Map", function () {
// // //             exampleFunctionMap(Array.from({ length: 10000 }, (_, i) => i));
// // //         })
// // //         .add("For Loop", function () {
// // //             exampleFunctionLoop(Array.from({ length: 10000 }, (_, i) => i));
// // //         })
// // //         .on("cycle", function (event) {
// // //             console.log(String(event.target));
// // //         })
// // //         .on("complete", function () {
// // //             console.log("Fastest function: " + this.filter("fastest").map("name"));
// // //         })
// // //         .run({ async: false });
// // // }

// // // // Run all performance tests
// // // analyzeTimeComplexity(exampleFunctionMap, "exampleFunctionMap");
// // // analyzeTimeComplexity(exampleFunctionLoop, "exampleFunctionLoop");
// // // analyzeMemoryUsage(exampleFunctionMap, "exampleFunctionMap");
// // // analyzeMemoryUsage(exampleFunctionLoop, "exampleFunctionLoop");
// // // runBenchmark();


// // const Benchmark = require("benchmark");
// // const { performance } = require("perf_hooks");

// // // Function to test
// // function exampleFunctionMap(arr) {
// //     return arr.map(x => x * 2);
// // }

// // function exampleFunctionLoop(arr) {
// //     let result = [];
// //     for (let i = 0; i < arr.length; i++) {
// //         result.push(arr[i] * 2);
// //     }
// //     return result;
// // }

// // // Measure execution time for different input sizes
// // function analyzeTimeComplexity(fn, label) {
// //     console.log(`\n=== Time Complexity Analysis (${label}) ===`);
// //     console.log("\n🔥 Warming up " + label + "...");

// //     let prevTime = null;
// //     [10, 100, 1000, 10000, 100000].forEach(size => {
// //         let input = Array.from({ length: size }, (_, i) => i);
        
// //         // Run the function once to trigger optimizations
// //         fn(input);

// //         let start = performance.now();
// //         fn(input);
// //         let end = performance.now();

// //         let timeTaken = (end - start).toFixed(4);
// //         let growthFactor = prevTime ? (timeTaken / prevTime).toFixed(2) : "N/A";
// //         prevTime = timeTaken;

// //         console.log(`Input Size: ${size}, Time Taken: ${timeTaken} ms, Growth: ${growthFactor}x`);
// //     });
// // }

// // // Measure memory usage before, during, and after execution
// // function analyzeMemoryUsage(fn, label) {
// //     if (!global.gc) {
// //         console.warn("Garbage collector not enabled! Run Node with --expose-gc flag.");
// //         return;
// //     }

// //     console.log(`\n=== Memory Usage Analysis (${label}) ===`);
// //     console.log("\n🔥 Warming up " + label + "...");
    
// //     global.gc(); // Force garbage collection before measuring
// //     let before = process.memoryUsage().heapUsed / 1024 / 1024;
    
// //     let input = Array.from({ length: 100000 }, (_, i) => i);
    
// //     let during;
// //     let startMem = process.memoryUsage().heapUsed;
// //     fn(input);
// //     during = process.memoryUsage().heapUsed;
    
// //     global.gc(); // Force garbage collection after execution
// //     let after = process.memoryUsage().heapUsed / 1024 / 1024;

// //     console.log(`Before Execution: ${before.toFixed(4)} MB`);
// //     console.log(`During Execution: ${(during / 1024 / 1024).toFixed(4)} MB`);
// //     console.log(`After Execution: ${after.toFixed(4)} MB`);
// // }

// // // Benchmark execution speed
// // function runBenchmark() {
// //     const suite = new Benchmark.Suite();

// //     suite
// //         .add("Array Map", function () {
// //             exampleFunctionMap(Array.from({ length: 10000 }, (_, i) => i));
// //         })
// //         .add("For Loop", function () {
// //             exampleFunctionLoop(Array.from({ length: 10000 }, (_, i) => i));
// //         })
// //         .on("cycle", function (event) {
// //             console.log(String(event.target));
// //         })
// //         .on("complete", function () {
// //             console.log("Fastest function: " + this.filter("fastest").map("name"));
// //         })
// //         .run({ async: false });
// // }

// // // Run all performance tests
// // analyzeTimeComplexity(exampleFunctionMap, "exampleFunctionMap");
// // analyzeTimeComplexity(exampleFunctionLoop, "exampleFunctionLoop");
// // analyzeMemoryUsage(exampleFunctionMap, "exampleFunctionMap");
// // analyzeMemoryUsage(exampleFunctionLoop, "exampleFunctionLoop");
// // runBenchmark();

// const Benchmark = require("benchmark");
// const { performance } = require("perf_hooks");
// const fs = require("fs");

// // --- Functions to Test ---
// function exampleFunctionMap(arr) {
//   return arr.map(x => x * 2);
// }

// function exampleFunctionLoop(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i] * 2);
//   }
//   return result;
// }

// // --- Warm-Up Helper ---
// function warmUp(fn, label) {
//   console.log(`\n🔥 Warming up ${label}...`);
//   // Run the function several times on a fixed input to trigger JIT optimizations.
//   for (let i = 0; i < 5; i++) {
//     fn(Array.from({ length: 10000 }, (_, i) => i));
//   }
// }

// // --- Enhanced Time Complexity Analysis ---
// function analyzeTimeComplexity(fn, label, inputSizes = [10, 100, 1000, 10000, 100000]) {
//   console.log(`\n=== Time Complexity Analysis (${label}) ===`);
//   warmUp(fn, label);
//   let prevAvgTime = null;
//   let results = [];
//   const iterations = 10; // Run each size 10 times for statistical robustness

//   inputSizes.forEach(size => {
//     const input = Array.from({ length: size }, (_, i) => i);
//     let times = [];
//     for (let i = 0; i < iterations; i++) {
//       let start = performance.now();
//       fn(input);
//       let end = performance.now();
//       times.push(end - start);
//     }
//     let avgTime = times.reduce((a, b) => a + b, 0) / times.length;
//     let growthFactor = prevAvgTime ? (avgTime / prevAvgTime).toFixed(2) : "N/A";
//     prevAvgTime = avgTime;
//     console.log(`Input Size: ${size}, Avg Time: ${avgTime.toFixed(4)} ms, Growth: ${growthFactor}x`);
//     results.push({ size, avgTime });
//   });

//   // Save results for later visualization/analysis.
//   fs.writeFileSync(`time_complexity_${label}.json`, JSON.stringify(results, null, 2));
// }

// // --- Enhanced Memory Usage Analysis ---
// function analyzeMemoryUsage(fn, label) {
//   if (!global.gc) {
//     console.warn("Garbage collector not enabled! Run Node with --expose-gc flag.");
//     return;
//   }

//   console.log(`\n=== Memory Usage Analysis (${label}) ===`);
//   warmUp(fn, label);

//   global.gc(); // Force GC before measurement
//   let before = process.memoryUsage().heapUsed / 1024 / 1024; // in MB

//   const input = Array.from({ length: 100000 }, (_, i) => i);
//   fn(input);

//   let during = process.memoryUsage().heapUsed / 1024 / 1024; // in MB

//   global.gc(); // Force GC after execution
//   let after = process.memoryUsage().heapUsed / 1024 / 1024; // in MB

//   console.log(`Before Execution: ${before.toFixed(4)} MB`);
//   console.log(`During Execution: ${during.toFixed(4)} MB`);
//   console.log(`After Execution: ${after.toFixed(4)} MB`);

//   fs.writeFileSync(`memory_usage_${label}.json`, JSON.stringify({ before, during, after }, null, 2));
// }

// // --- Enhanced Benchmarking with Benchmark.js ---
// function runBenchmark() {
//   const suite = new Benchmark.Suite();
//   // Warm up both functions before actual benchmarking.
//   warmUp(exampleFunctionMap, "exampleFunctionMap");
//   warmUp(exampleFunctionLoop, "exampleFunctionLoop");

//   suite
//     .add("Array Map", function () {
//       exampleFunctionMap(Array.from({ length: 10000 }, (_, i) => i));
//     })
//     .add("For Loop", function () {
//       exampleFunctionLoop(Array.from({ length: 10000 }, (_, i) => i));
//     })
//     .on("cycle", function (event) {
//       console.log(String(event.target));
//     })
//     .on("complete", function () {
//       console.log("Fastest function: " + this.filter("fastest").map("name"));
//       // Save detailed benchmark results to a file.
//       fs.writeFileSync('benchmark_results.json', JSON.stringify(this, null, 2));
//     })
//     .run({ async: false });
// }

// // --- Run All Tests ---
// analyzeTimeComplexity(exampleFunctionMap, "exampleFunctionMap");
// analyzeTimeComplexity(exampleFunctionLoop, "exampleFunctionLoop");
// analyzeMemoryUsage(exampleFunctionMap, "exampleFunctionMap");
// analyzeMemoryUsage(exampleFunctionLoop, "exampleFunctionLoop");
// runBenchmark();

const Benchmark = require("benchmark");
const { performance } = require("perf_hooks");
const fs = require("fs");
const pidusage = require("pidusage");

// --- Functions to Test ---
function exampleFunctionMap(arr) {
  return arr.map(x => x * 2);
}

function exampleFunctionLoop(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}

// --- Warm-Up Helper ---
function warmUp(fn, label) {
  console.log(`\n🔥 Warming up ${label}...`);
  for (let i = 0; i < 5; i++) {
    fn(Array.from({ length: 10000 }, (_, i) => i));
  }
}

// --- CPU & Memory Profiling Helper ---
async function getProcessUsage() {
  return await pidusage(process.pid);
}

// --- Enhanced Time Complexity Analysis ---
async function analyzeTimeComplexity(fn, label, inputSizes = [10, 100, 1000, 10000, 100000]) {
  console.log(`\n=== Time Complexity Analysis (${label}) ===`);
  warmUp(fn, label);
  let prevAvgTime = null;
  let results = [];
  const iterations = 10;

  for (const size of inputSizes) {
    const input = Array.from({ length: size }, (_, i) => i);
    let times = [];
    
    for (let i = 0; i < iterations; i++) {
      let start = performance.now();
      fn(input);
      let end = performance.now();
      times.push(end - start);
    }

    let avgTime = times.reduce((a, b) => a + b, 0) / times.length;
    let growthFactor = prevAvgTime ? (avgTime / prevAvgTime).toFixed(2) : "N/A";
    prevAvgTime = avgTime;
    console.log(`Input Size: ${size}, Avg Time: ${avgTime.toFixed(4)} ms, Growth: ${growthFactor}x`);
    results.push({ size, avgTime });
  }

  fs.writeFileSync(`time_complexity_${label}.json`, JSON.stringify(results, null, 2));
}

// --- Enhanced Memory & CPU Usage Analysis ---
async function analyzePerformance(fn, label) {
  if (!global.gc) {
    console.warn("Garbage collector not enabled! Run Node with --expose-gc flag.");
    return;
  }

  console.log(`\n=== Performance Analysis (${label}) ===`);
  warmUp(fn, label);

  global.gc();
  let before = await getProcessUsage();

  const input = Array.from({ length: 100000 }, (_, i) => i);
  let start = performance.now();
  fn(input);
  let end = performance.now();

  let during = await getProcessUsage();
  global.gc();
  let after = await getProcessUsage();

  console.log(`Before Execution: ${before.memory / 1024 / 1024} MB, CPU: ${before.cpu.toFixed(2)}%`);
  console.log(`During Execution: ${during.memory / 1024 / 1024} MB, CPU: ${during.cpu.toFixed(2)}%`);
  console.log(`After Execution: ${after.memory / 1024 / 1024} MB, CPU: ${after.cpu.toFixed(2)}%`);
  console.log(`Execution Time: ${(end - start).toFixed(4)} ms`);

  fs.writeFileSync(
    `performance_${label}.json`,
    JSON.stringify(
      {
        before: { memory: before.memory / 1024 / 1024, cpu: before.cpu },
        during: { memory: during.memory / 1024 / 1024, cpu: during.cpu },
        after: { memory: after.memory / 1024 / 1024, cpu: after.cpu },
        executionTime: (end - start).toFixed(4),
      },
      null,
      2
    )
  );
}

// --- Benchmarking with Benchmark.js ---
function runBenchmark() {
  const suite = new Benchmark.Suite();
  warmUp(exampleFunctionMap, "exampleFunctionMap");
  warmUp(exampleFunctionLoop, "exampleFunctionLoop");

  suite
    .add("Array Map", function () {
      exampleFunctionMap(Array.from({ length: 10000 }, (_, i) => i));
    })
    .add("For Loop", function () {
      exampleFunctionLoop(Array.from({ length: 10000 }, (_, i) => i));
    })
    .on("cycle", function (event) {
      console.log(String(event.target));
    })
    .on("complete", function () {
      console.log("Fastest function: " + this.filter("fastest").map("name"));
      fs.writeFileSync('benchmark_results.json', JSON.stringify(this, null, 2));
    })
    .run({ async: false });
}

// --- Run All Tests ---
(async () => {
  await analyzeTimeComplexity(exampleFunctionMap, "exampleFunctionMap");
  await analyzeTimeComplexity(exampleFunctionLoop, "exampleFunctionLoop");
  await analyzePerformance(exampleFunctionMap, "exampleFunctionMap");
  await analyzePerformance(exampleFunctionLoop, "exampleFunctionLoop");
  runBenchmark();
})();
