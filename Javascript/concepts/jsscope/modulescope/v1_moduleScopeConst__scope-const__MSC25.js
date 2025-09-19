/**
Problem: Module Scope with const
Concepts: variable declaration, module scope, immutability
Tags: scope, const, module-scope
Source: Custom
Version: v1
Difficulty: Easy
File ID: MSC25
Linked Versions:
v1: v1_moduleScopeConst__scope-const__MSC25.js
Improvements from previous version:
- Initial version
Approach:
Understanding how const behaves in ES6 modules
*/

// Module-level const declarations
const MODULE_CONST = "I am module scoped and immutable";
const config = {
  version: "1.0.0",
  api: "https://api.example.com"
};

// Function exposing module const
export function getModuleConst() {
  return MODULE_CONST;
}

// Example of const object modification in module
export function updateConfig(newVersion) {
  config.version = newVersion; // Can modify object properties
  return config;
}

// ✅ Positive case - object mutation in module
export function demonstrateObjectMutation() {
  const moduleObject = {
    count: 0,
    data: []
  };
  
  moduleObject.count++;
  moduleObject.data.push("item");
  
  return moduleObject;
}

// ❌ Negative case - const reassignment
export function attemptReassignment() {
  try {
    MODULE_CONST = "New value"; // Will throw TypeError
  } catch (e) {
    return "Cannot reassign const";
  }
}

// ⚡ Edge case - const with objects vs primitives
export function constEdgeCases() {
  const obj = { value: 1 };
  const arr = [1, 2, 3];
  
  // These work
  obj.value = 2;
  arr.push(4);
  
  try {
    obj = {}; // This throws TypeError
  } catch (e) {
    console.log("Cannot reassign const object");
  }
  
  return { obj, arr };
}

// Module-level frozen object example
export const frozenConfig = Object.freeze({
  env: "production",
  debug: false
});

// Function demonstrating frozen object behavior
export function modifyFrozenConfig() {
  try {
    frozenConfig.env = "development"; // Will fail silently or throw in strict mode
    return false;
  } catch (e) {
    return true; // Object is truly immutable
  }
}