/**
Problem: Lexical Scope with let
Concepts: closure, lexical scope
Tags: scope, let, lexical-scope
Source: Custom
Version: v1
Difficulty: Easy
File ID: LSL25
Linked Versions:
v1: v1_lexicalScopeLet__scope-let__LSL25.js
Improvements from previous version:
- Initial version
Approach:
Understanding how let creates closures in lexical scope with block scoping
*/

// Outer function creating lexical scope
function createCounter() {
  let count = 0; // Block-scoped variable
  
  return {
    increment() {
      count++; // Accesses let from outer scope
      return count;
    },
    decrement() {
      count--; // Same variable access
      return count;
    }
  };
}

// Factory function demonstrating block scope in closures
function createLogger(prefix) {
  let logCount = 0;
  
  return function log(message) {
    logCount++;
    {
      let blockScoped = "Only available here";
      console.log(`${prefix} (${logCount}): ${message} - ${blockScoped}`);
    }
    // blockScoped not accessible here
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
logger1("First message");
logger2("Another message");
logger1("Second message");

// ❌ Negative case - variable isolation
console.log(typeof count === 'undefined'); // true
console.log(typeof logCount === 'undefined'); // true

// ⚡ Edge case - let in loops creates new binding per iteration
function createFunctions() {
  const funcs = [];
  
  for (let i = 0; i < 3; i++) {
    funcs.push(function() {
      return i; // Each iteration has its own i
    });
  }
  
  return funcs;
}

// Demonstrating proper loop variable binding
const functions = createFunctions();
console.log(functions.map(fn => fn())); // [0,1,2]

// Advanced example: nested block scopes
function demonstrateNestedScope(input) {
  let outer = "outer";
  
  return function() {
    let middle = "middle";
    
    return function() {
      let inner = "inner";
      return `${outer} ${middle} ${inner} ${input}`;
    };
  };
}

const nestedFn = demonstrateNestedScope("input");
const innerFn = nestedFn();
console.log(innerFn()); // "outer middle inner input"