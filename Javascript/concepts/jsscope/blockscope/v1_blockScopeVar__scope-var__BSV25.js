/**
Problem: Block Scope with var
Concepts: variable declaration, block scope
Tags: scope, var, block-scope
Source: Custom
Version: v1
Difficulty: Easy
File ID: BSV25
Linked Versions:
v1: v1_blockScopeVar__scope-var__BSV25.js
Improvements from previous version:
- Initial version
Approach:
Understanding how var ignores block scope boundaries
*/

// Block scope with var example
{
  var blockVar = "I am not really block scoped";
  console.log(blockVar);
}
console.log('Still accessible outside block:', blockVar);

// Block scope in different contexts
// 1. If block
if (true) {
  var ifVar = "Var in if block";
}
console.log('Accessible outside if:', ifVar);

// 2. For loop
for (var i = 0; i < 3; i++) {
  var loopVar = "Var in loop";
}
console.log('Loop counter outside loop:', i);
console.log('Loop var outside loop:', loopVar);

// 3. Try-catch block
try {
  var tryVar = "Var in try block";
  throw new Error("Test error");
} catch (error) {
  var catchVar = "Var in catch block";
}
console.log('Try var outside:', tryVar);
console.log('Catch var outside:', catchVar);

// ✅ Positive case - demonstrating var's lack of block scope
{
  var test = "test";
}
console.log('Access var from block:', test);

// ❌ Negative case - showing potential issues with var's scope
var count = 1;
{
  var count = 2; // Overwrites outer count
}
console.log('Count value:', count); // 2

// ⚡ Edge case - demonstrating var in loop closure problem
var funcs = [];
for (var j = 0; j < 3; j++) {
  funcs.push(function() { return j; });
}
console.log('Loop value in closures:', funcs.map(f => f())); // [3,3,3]