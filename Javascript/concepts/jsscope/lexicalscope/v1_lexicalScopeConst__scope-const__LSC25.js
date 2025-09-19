/**
Problem: Lexical Scope with const
Concepts: closure, lexical scope, immutability
Tags: scope, const, lexical-scope
Source: Custom
Version: v1
Difficulty: Easy
File ID: LSC25
Linked Versions:
v1: v1_lexicalScopeConst__scope-const__LSC25.js
Improvements from previous version:
- Initial version
Approach:
Understanding how const creates closures in lexical scope with immutability
*/

// Outer function creating lexical scope with immutable reference
function createImmutableCounter(initialValue) {
  const config = { count: initialValue }; // Immutable reference, mutable properties
  
  return {
    increment() {
      config.count++; // Can modify object properties
      return config.count;
    },
    getConfig() {
      return { ...config }; // Return copy to prevent external modification
    }
  };
}

// Factory function with constant values
function createGreeter(prefix) {
  const GREETING = "Hello"; // Immutable value
  const config = {
    prefix,
    timestamp: Date.now()
  };
  
  return function greet(name) {
    // GREETING and config reference are immutable
    return `${GREETING} ${config.prefix} ${name}`;
  };
}

// ✅ Positive case - counter with immutable reference
const counter = createImmutableCounter(0);
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getConfig()); // { count: 2 }

// ✅ Positive case - greeter with constant
const greet1 = createGreeter("Mr.");
const greet2 = createGreeter("Ms.");
console.log(greet1("John")); // Hello Mr. John
console.log(greet2("Jane")); // Hello Ms. Jane

// ❌ Negative case - attempting to modify constants
function demonstrateConstImmutability() {
  const message = "Original";
  
  return function() {
    try {
      message = "Modified"; // Will throw TypeError
    } catch (e) {
      return "Cannot modify constant";
    }
  };
}

// ⚡ Edge case - const with objects in closure
function createObjectManager() {
  const managed = {
    values: []
  };
  
  return {
    add(value) {
      managed.values.push(value); // Can modify object contents
      return [...managed.values]; // Return copy
    },
    attemptReassign() {
      try {
        managed = {}; // Will throw TypeError
      } catch (e) {
        return "Cannot reassign const";
      }
    }
  };
}

// Demonstrating object mutation vs reassignment
const manager = createObjectManager();
console.log(manager.add("first")); // ["first"]
console.log(manager.add("second")); // ["first", "second"]
console.log(manager.attemptReassign()); // "Cannot reassign const"

// Advanced example: nested const with object freezing
function createSecureConfig(initial) {
  const frozen = Object.freeze({ ...initial });
  
  return {
    get() {
      return { ...frozen }; // Return copy of frozen object
    },
    attemptModify(key, value) {
      try {
        frozen[key] = value; // Will fail silently or throw in strict mode
        return false;
      } catch (e) {
        return true; // Modification prevented
      }
    }
  };
}

const secure = createSecureConfig({ api: "http://api.example.com" });
console.log(secure.get()); // { api: "http://api.example.com" }
console.log(secure.attemptModify("api", "new")); // true (modification prevented)