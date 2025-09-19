/**
Problem: Function Scope with var
Concepts: variable declaration, function scope
Tags: scope, var, function-scope
Source: Custom
Version: v1
Difficulty: Easy
File ID: FSV25
Linked Versions:
v1: v1_functionScopeVar__scope-var__FSV25.js
Improvements from previous version:
- Initial version
Approach:
Understanding how var creates function-scoped variables regardless of blocks
*/

// Function scope with var example
function functionScopeExample() {
  var functionVar = "I am function scoped";
  
  // Inner block to demonstrate var's function scope
  if (true) {
    var blockVar = "I am still function scoped";
    console.log(functionVar); // Accessible inside block
  }
  
  console.log(blockVar); // Still accessible outside block
  return { functionVar, blockVar };
}

// Another function to demonstrate separate function scopes
function anotherFunction() {
  var functionVar = "Different function scope";
  return functionVar;
}

// ✅ Positive case
const result = functionScopeExample();
console.log('Variables from function:', result);

// ❌ Negative case - showing function scope isolation
try {
  console.log(functionVar); // This will throw ReferenceError
} catch (e) {
  console.log('Error accessing function variable:', e.message);
}

// ⚡ Edge case - demonstrating var's function-level hoisting
function hoistingExample() {
  console.log('Hoisted variable:', hoistedVar); // undefined, but no error
  var hoistedVar = "I am hoisted within the function";
  console.log('After assignment:', hoistedVar);
}
hoistingExample();