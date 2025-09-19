/**
Problem: Module Scope with var
Concepts: variable declaration, module scope
Tags: scope, var, module-scope
Source: Custom
Version: v1
Difficulty: Easy
File ID: MSV25
Linked Versions:
v1: v1_moduleScopeVar__scope-var__MSV25.js
Improvements from previous version:
- Initial version
Approach:
Understanding how var behaves in ES6 modules
*/

// Module-level var declarations
var moduleVar = "I am module scoped";
var counter = 0;

// Function using module-scoped var
export function incrementCounter() {
  counter++;
  return counter;
}

// Function exposing module var
export function getModuleVar() {
  return moduleVar;
}

// Example of var modification in module
export function modifyModuleVar(newValue) {
  moduleVar = newValue;
  return moduleVar;
}

// ✅ Positive case - module encapsulation
export function demonstrateModuleScope() {
  var localVar = "Local to module function";
  return {
    moduleVar,
    counter,
    localVar
  };
}

// ❌ Negative case - var still follows function scope
export function showVarScoping() {
  var scopedVar = "Function scoped in module";
  if (true) {
    var scopedVar = "Still same variable"; // Same variable
  }
  return scopedVar;
}

// ⚡ Edge case - showing module var behavior
export function edgeCaseExample() {
  // Even though it's var, it won't pollute global scope
  var edgeVar = "Module var edge case";
  return typeof window !== 'undefined' ? 
    window.edgeVar === undefined : // Should be true in browser
    global.edgeVar === undefined;  // Should be true in Node.js
}