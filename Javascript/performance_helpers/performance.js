/**
Reusable performance helper functions for time and memory complexity measurement.
*/

const { performance } = require('perf_hooks');

function measureTimeComplexity(fn, input) {
  const start = performance.now();
  const result = fn(input);
  const end = performance.now();
  console.log(`Execution time: ${(end - start).toFixed(4)} ms`);
  return result;
}

function measureMemoryComplexity(fn, input) {
  const startMem = process.memoryUsage().heapUsed / 1024 / 1024;
  const result = fn(input);
  const endMem = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`Memory used: ${(endMem - startMem).toFixed(4)} MB`);
  return result;
}

module.exports = {
  measureTimeComplexity,
  measureMemoryComplexity
};
