/**
Problem: Module Scope with let
Concepts: variable declaration, module scope
Tags: scope, let, module-scope
Source: Custom
Version: v1
Difficulty: Easy
File ID: MSL25
Linked Versions:
v1: v1_moduleScopeLet__scope-let__MSL25.js
Improvements from previous version:
- Initial version
Approach:
Understanding how let behaves in ES6 modules
*/

// Module-level let declarations
let moduleLet = "I am module scoped";
let counter = 0;

// Function using module-scoped let
export function incrementCounter() {
  counter++;
  return counter;
}

// Function exposing module let
export function getModuleLet() {
  return moduleLet;
}

// Example of let modification in module
export function modifyModuleLet(newValue) {
  moduleLet = newValue;
  return moduleLet;
}

// ✅ Positive case - block scoping within module
export function demonstrateBlockScoping() {
  let outerLet = "Outer";
  {
    let innerLet = "Inner";
    return { outer: outerLet, inner: innerLet };
  }
  // innerLet not accessible here
}

// ❌ Negative case - let respects block scope
export function showLetScoping() {
  let scopedLet = "First";
  if (true) {
    let scopedLet = "Second"; // Different variable
    return { inner: scopedLet };
  }
  return { outer: scopedLet };
}

// ⚡ Edge case - temporal dead zone in modules
export function tdz() {
  try {
    console.log(tdzLet); // Will throw ReferenceError
  } catch (e) {
    console.log("TDZ in effect");
  }
  let tdzLet = "After TDZ";
  return tdzLet;
}

// Module-level function showing let scope
export const testModuleScope = () => {
  return {
    hasModuleLet: typeof moduleLet !== 'undefined',
    hasCounter: typeof counter !== 'undefined'
  };
};