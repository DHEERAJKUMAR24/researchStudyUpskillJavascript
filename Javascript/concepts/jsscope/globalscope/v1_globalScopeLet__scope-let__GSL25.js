/**
Problem: Global Scope with let
Concepts: variable declaration, global scope
Tags: scope, let, global-scope
Source: Custom
Version: v1
Difficulty: Easy
File ID: GSL25
Linked Versions:
v1: v1_globalScopeLet__scope-let__GSL25.js
Improvements from previous version:
- Initial version
Approach:
Understanding how let creates globally scoped variables with block scoping rules
*/

// Global scope with let example
let globalLet = "I am a global variable with let";

// Function to demonstrate global access
function accessGlobalLet() {
  console.log(globalLet); // Accessible inside function
  // Modifying global let
  globalLet = "Modified global let";
}

// Block to demonstrate global access
{
  console.log(globalLet); // Accessible inside block
  // Creating a block-scoped variable
  let blockLet = "I am block scoped";
}

// ✅ Positive case
console.log('Original global let:', globalLet);
accessGlobalLet();
console.log('Modified global let:', globalLet);

// ❌ Negative case - demonstrating block scope
try {
  console.log(blockLet); // This will throw ReferenceError
} catch (e) {
  console.log('Error accessing block-scoped variable:', e.message);
}

// ❌ Negative case - showing let's block scope rules
// try {
//   let duplicateLet = "First declaration";
//   let duplicateLet = "Second declaration"; // This will throw SyntaxError
// } catch (e) {
//   console.log('Error redeclaring let:', e.message);
// }

// ⚡ Edge case - demonstrating temporal dead zone
try {
  console.log(tdz); // This will throw ReferenceError
  let tdz = "Temporal Dead Zone";
} catch (e) {
  console.log('Temporal Dead Zone error:', e.message);
}