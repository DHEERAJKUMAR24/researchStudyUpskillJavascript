/**
Problem: Global Scope with const
Concepts: variable declaration, global scope
Tags: scope, const, global-scope
Source: Custom
Version: v1
Difficulty: Easy
File ID: GSC25
Linked Versions:
v1: v1_globalScopeConst__scope-const__GSC25.js
Improvements from previous version:
- Initial version
Approach:
Understanding how const creates globally scoped constants with immutability
*/

// Global scope with const example
const globalConst = "I am a global constant";
const globalObject = { key: "I am a mutable object property" };

// Function to demonstrate global access and immutability
function accessGlobalConst() {
  console.log(globalConst); // Accessible inside function
  // Attempting to modify global const would throw error
  globalObject.key = "Modified object property"; // This works
}

// Block to demonstrate global access
{
  console.log(globalConst); // Accessible inside block
  const blockConst = "I am block scoped";
}

// ✅ Positive case
console.log('Global const:', globalConst);
console.log('Original object property:', globalObject.key);
accessGlobalConst();
console.log('Modified object property:', globalObject.key);

// ❌ Negative case - demonstrating immutability
try {
  globalConst = "Trying to modify constant"; // This will throw TypeError
} catch (e) {
  console.log('Error modifying const:', e.message);
}

// ❌ Negative case - showing block scope
try {
  console.log(blockConst); // This will throw ReferenceError
} catch (e) {
  console.log('Error accessing block-scoped constant:', e.message);
}

// ⚡ Edge case - demonstrating object mutability
const edgeObject = { count: 0 };
try {
  edgeObject.count++; // This works
  console.log('Modified object property:', edgeObject.count);
  edgeObject = {}; // This will throw TypeError
} catch (e) {
  console.log('Error reassigning const object:', e.message);
}