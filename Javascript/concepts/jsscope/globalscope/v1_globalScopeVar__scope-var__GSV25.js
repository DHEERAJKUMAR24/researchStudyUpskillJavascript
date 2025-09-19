/**
Problem: Global Scope with var
Concepts: variable declaration, global scope
Tags: scope, var, global-scope
Source: Custom
Version: v1
Difficulty: Easy
File ID: GSV25
Linked Versions:
v1: v1_globalScopeVar__scope-var__GSV25.js
Improvements from previous version:
- Initial version
Approach:
Understanding how var creates globally scoped variables
*/

// Global scope with var example
var globalVar = "I am a global variable with var";

// Function to demonstrate global access
function accessGlobalVar() {
  console.log(globalVar); // Accessible inside function
  // Modifying global var
  globalVar = "Modified global var";
}

// Block to demonstrate global access
{
  console.log(globalVar); // Accessible inside block
  // Creating another global var inside block
  var anotherGlobalVar = "Another global var";
}

// ✅ Positive case
console.log('Original global var:', globalVar);
accessGlobalVar();
console.log('Modified global var:', globalVar);
console.log('Another global var:', anotherGlobalVar);

// ❌ Negative case - showing var's lack of block scope
var duplicateVar = "First declaration";
var duplicateVar = "Second declaration"; // No error, demonstrates var's redeclarability
console.log('Duplicate var:', duplicateVar);

// ⚡ Edge case - demonstrating hoisting
console.log('Hoisted variable:', hoistedVar); // undefined, but no error
var hoistedVar = "I am hoisted";
console.log('After assignment:', hoistedVar);