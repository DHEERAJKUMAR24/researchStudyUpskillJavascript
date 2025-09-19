/**
Problem: Function Scope with const
Concepts: variable declaration, function scope, immutability
Tags: scope, const, function-scope
Source: Custom
Version: v1
Difficulty: Easy
File ID: FSC25
Linked Versions:
v1: v1_functionScopeConst__scope-const__FSC25.js
Improvements from previous version:
- Initial version
Approach:
Understanding how const creates function-scoped constants with block scope respect
*/

// Function scope with const example
function functionScopeExample() {
  const functionConst = "I am function scoped";
  const functionObj = { count: 0 };
  
  // Inner block to demonstrate const's block scope
  if (true) {
    const blockConst = "I am block scoped";
    console.log(functionConst); // Can access outer const
    functionObj.count++; // Can modify object properties
  }
  
  try {
    console.log(blockConst); // This will throw ReferenceError
  } catch (e) {
    console.log('Cannot access block-scoped constant:', e.message);
  }
  
  return { functionConst, functionObj };
}

// Another function to demonstrate separate function scopes
function anotherFunction() {
  const functionConst = "Different function scope";
  return functionConst;
}

// ✅ Positive case
const result = functionScopeExample();
console.log('Function scope result:', result);
console.log('Another function const:', anotherFunction());

// ❌ Negative case - showing immutability
function immutabilityExample() {
  const immutableConst = "Cannot be changed";
  try {
    immutableConst = "Trying to change"; // This will throw TypeError
  } catch (e) {
    console.log('Immutability error:', e.message);
  }
}
immutabilityExample();

// ⚡ Edge case - demonstrating object mutability within function
function objectMutabilityExample() {
  const obj = { value: 1 };
  obj.value = 2; // This works
  console.log('Modified object:', obj);
  
  try {
    obj = { value: 3 }; // This will throw TypeError
  } catch (e) {
    console.log('Reassignment error:', e.message);
  }
}
objectMutabilityExample();