/**
Problem: Function Scope with let
Concepts: variable declaration, function scope, block scope
Tags: scope, let, function-scope
Source: Custom
Version: v1
Difficulty: Easy
File ID: FSL25
Linked Versions:
v1: v1_functionScopeLet__scope-let__FSL25.js
Improvements from previous version:
- Initial version
Approach:
Understanding how let creates function-scoped variables with block scope respect
*/

// Function scope with let example
function functionScopeExample() {
  let functionLet = "I am function scoped";
  
  // Inner block to demonstrate let's block scope
  if (true) {
    let blockLet = "I am block scoped";
    console.log(functionLet); // Can access outer let
    console.log(blockLet); // Can access block let
  }
  
  try {
    console.log(blockLet); // This will throw ReferenceError
  } catch (e) {
    console.log('Cannot access block-scoped variable:', e.message);
  }
  
  return functionLet;
}

// Another function to demonstrate separate function scopes
function anotherFunction() {
  let functionLet = "Different function scope";
  return functionLet;
}

// ✅ Positive case
console.log('Function let value:', functionScopeExample());
console.log('Another function let:', anotherFunction());

// ❌ Negative case - showing function scope isolation
try {
  console.log(functionLet); // This will throw ReferenceError
} catch (e) {
  console.log('Error accessing function let:', e.message);
}

// ⚡ Edge case - demonstrating temporal dead zone within function
function tdzExample() {
  try {
    console.log(tdzVar); // This will throw ReferenceError
  } catch (e) {
    console.log('TDZ error:', e.message);
  }
  let tdzVar = "Temporal Dead Zone";
  console.log('After declaration:', tdzVar);
}
tdzExample();