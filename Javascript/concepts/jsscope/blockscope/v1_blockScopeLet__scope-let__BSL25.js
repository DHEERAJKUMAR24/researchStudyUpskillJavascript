/**
Problem: Block Scope with let
Concepts: variable declaration, block scope
Tags: scope, let, block-scope
Source: Custom
Version: v1
Difficulty: Easy
File ID: BSL25
Linked Versions:
v1: v1_blockScopeLet__scope-let__BSL25.js
Improvements from previous version:
- Initial version
Approach:
Understanding how let creates true block-scoped variables
*/

// Block scope with let example
{
  let blockLet = "I am block scoped";
  console.log(blockLet);
}
try {
  console.log(blockLet); // This will throw ReferenceError
} catch (e) {
  console.log('Cannot access blockLet outside:', e.message);
}

// Block scope in different contexts
// 1. If block
if (true) {
  let ifLet = "Let in if block";
  console.log(ifLet);
}
try {
  console.log(ifLet); // This will throw ReferenceError
} catch (e) {
  console.log('Cannot access ifLet outside:', e.message);
}

// 2. For loop
for (let i = 0; i < 3; i++) {
  let loopLet = "Let in loop";
  console.log(i, loopLet);
}
try {
  console.log(i, loopLet); // This will throw ReferenceError
} catch (e) {
  console.log('Cannot access loop variables outside:', e.message);
}

// 3. Try-catch block
try {
  let tryLet = "Let in try block";
  throw new Error("Test error");
} catch (error) {
  let catchLet = "Let in catch block";
  console.log(catchLet);
}
try {
  console.log(tryLet, catchLet); // This will throw ReferenceError
} catch (e) {
  console.log('Cannot access try-catch lets outside:', e.message);
}

// ✅ Positive case - proper block scoping
let count = 1;
{
  let count = 2; // Different variable, doesn't affect outer count
  console.log('Inner count:', count); // 2
}
console.log('Outer count:', count); // 1

// ❌ Negative case - redeclaration in same block
// try {
//   let test = "first";
//   let test = "second"; // This will throw SyntaxError
// } catch (e) {
//   console.log('Cannot redeclare let:', e.message);
// }

// ⚡ Edge case - demonstrating let in loop closure
const funcs = [];
for (let i = 0; i < 3; i++) {
  funcs.push(function() { return i; });
}
console.log('Loop values in closures:', funcs.map(f => f())); // [0,1,2]