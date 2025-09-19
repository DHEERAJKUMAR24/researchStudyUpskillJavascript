/**
Problem: Sum Plus One

Concepts: array, reduce, iteration

Tags: array, basic, sum

Source: https://www.fullstack.cafe/interview-questions/javascript

Links: 

Version: v1

Difficulty: Easy

File ID: S2509

Linked Versions:
v1: v1_sumPlusOne__array-basic__S2509.js

Improvements from previous version:
- Initial version

Approach:
- Use array.reduce and iterative loop to sum after adding 1 to each element.
Time Complexity: O(n)
Space Complexity: O(1)
*/

// ES5 method is nice and clean
function solveSumPlusOneV1(array) {
  return array.reduce(function (memo, num) {
    return memo + num;
  }, array.length);
}

// Iterative method
function solveSumPlusOneV1_iterative(array) {
  var result = array.length;
  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}

// ✅ Positive case
console.log('Positive:', solveSumPlusOneV1([1, 2, 3])); // 9
// ❌ Negative case
console.log('Negative:', solveSumPlusOneV1([])); // 0
// ⚡ Edge case
console.log('Edge:', solveSumPlusOneV1([-1, 0, 1])); // 3

// Performance Monitoring (if helpers available)
const { measureTimeComplexity, measureMemoryComplexity } = require('../../performance_helpers/performance');
console.log('--- Time Complexity ---');
const timeResult = measureTimeComplexity(solveSumPlusOneV1, [1,2,3]);
console.log('--- Memory Complexity ---');
const memResult = measureMemoryComplexity(solveSumPlusOneV1, [1,2,3]);
console.log('Result:', timeResult);