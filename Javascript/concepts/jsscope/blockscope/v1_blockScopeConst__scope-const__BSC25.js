/**
Problem: Block Scope with const
Concepts: variable declaration, block scope, immutability
Tags: scope, const, block-scope
Source: Custom
Version: v1
Difficulty: Easy
File ID: BSC25
Linked Versions:
v1: v1_blockScopeConst__scope-const__BSC25.js
Improvements from previous version:
- Initial version
Approach:
Understanding how const creates block-scoped constants with immutability
*/

// Block scope with const example
{
  const blockConst = "I am block scoped";
  console.log(blockConst);
}
try {
  console.log(blockConst); // This will throw ReferenceError
} catch (e) {
  console.log('Cannot access blockConst outside:', e.message);
}

// Block scope in different contexts
// 1. If block
if (true) {
  const ifConst = "Const in if block";
  console.log(ifConst);
}
try {
  console.log(ifConst); // This will throw ReferenceError
} catch (e) {
  console.log('Cannot access ifConst outside:', e.message);
}

// 2. For loop
for (let i = 0; i < 3; i++) { // Note: using let for iterator
  const loopConst = "Const in loop";
  console.log(i, loopConst);
}
try {
  console.log(loopConst); // This will throw ReferenceError
} catch (e) {
  console.log('Cannot access loop const outside:', e.message);
}

// 3. Try-catch block
try {
  const tryConst = "Const in try block";
  throw new Error("Test error");
} catch (error) {
  const catchConst = "Const in catch block";
  console.log(catchConst);
}
try {
  console.log(tryConst, catchConst); // This will throw ReferenceError
} catch (e) {
  console.log('Cannot access try-catch consts outside:', e.message);
}

// ✅ Positive case - object property mutation
{
  const obj = { count: 0 };
  obj.count++; // This works
  console.log('Modified object:', obj);
}

// ❌ Negative case - attempted reassignment
try {
  const test = "immutable";
  test = "changed"; // This will throw TypeError
} catch (e) {
  console.log('Cannot reassign const:', e.message);
}

// ⚡ Edge case - const with objects vs primitives
{
  const obj = { value: 1 };
  const arr = [1, 2, 3];
  
  obj.value = 2; // This works
  arr.push(4); // This works
  console.log('Modified object and array:', obj, arr);
  
  try {
    obj = {}; // This will throw TypeError
  } catch (e) {
    console.log('Cannot reassign const object:', e.message);
  }
}