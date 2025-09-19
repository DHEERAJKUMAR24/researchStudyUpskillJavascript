/**
Problem: Lexical Scope with var
Concepts: closure, lexical scope
Tags: scope, var, lexical-scope
Source: Custom
Version: v1
Difficulty: Easy
File ID: LSV25
Linked Versions:
v1: v1_lexicalScopeVar__scope-var__LSV25.js
Improvements from previous version:
- Initial version
Approach:
Understanding how var creates closures in lexical scope
*/

// Outer function creating lexical scope
function createCounter() {
  var count = 0; // Variable in outer scope
  
  // Inner function has access to outer scope
  function increment() {
    count++; // Accesses var from outer scope
    return count;
  }
  
  function decrement() {
    count--; // Same variable access
    return count;
  }
  
  return { increment, decrement };
}

// Factory function demonstrating lexical scope
function createLogger(prefix) {
  var logCount = 0;
  
  return function(message) {
    logCount++;
    console.log(`${prefix} (${logCount}): ${message}`);
    return logCount;
  };
}

// ✅ Positive case - basic counter
const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1

// ✅ Positive case - multiple instances
const logger1 = createLogger("LOG1");
const logger2 = createLogger("LOG2");
logger1("First message");  // LOG1 (1): First message
logger2("Another message"); // LOG2 (1): Another message
logger1("Second message"); // LOG1 (2): Second message

// ❌ Negative case - variable isolation
console.log(typeof count === 'undefined'); // true
console.log(typeof logCount === 'undefined'); // true

// ⚡ Edge case - shared var in loops
function createFunctions() {
  var funcs = [];
  
  for (var i = 0; i < 3; i++) {
    funcs.push(function() {
      return i; // All functions share the same i
    });
  }
  
  return funcs;
}

// Demonstrating the loop variable problem
const functions = createFunctions();
console.log(functions.map(fn => fn())); // [3,3,3]

// Solution using IIFE
function createFunctionsFixed() {
  var funcs = [];
  
  for (var i = 0; i < 3; i++) {
    funcs.push(
      (function(value) {
        return function() {
          return value; // Each function gets its own copy
        };
      })(i)
    );
  }
  
  return funcs;
}

// Demonstrating the fixed version
const fixedFunctions = createFunctionsFixed();
console.log(fixedFunctions.map(fn => fn())); // [0,1,2]