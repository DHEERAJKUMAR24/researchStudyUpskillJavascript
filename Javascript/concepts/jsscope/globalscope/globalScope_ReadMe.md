# Global Scope in JavaScript

## Overview
Global scope refers to variables and constants that are accessible throughout the entire program. This folder contains examples demonstrating global scope behavior with different variable declarations: `var`, `let`, and `const`.

## Files

### 1. v1_globalScopeVar__scope-var__GSV25.js
- Demonstrates `var` in global scope
- Shows hoisting behavior
- Illustrates redeclarability
- No block scope restrictions

### 2. v1_globalScopeLet__scope-let__GSL25.js
- Demonstrates `let` in global scope
- Block scoping rules
- Temporal Dead Zone (TDZ)
- No redeclaration allowed

### 3. v1_globalScopeConst__scope-const__GSC25.js
- Demonstrates `const` in global scope
- Immutability rules
- Object mutability
- Block scoping rules

## Key Concepts
- Global variables are accessible anywhere in your code
- `var` declarations are added to the global object (`window` in browsers)
- `let` and `const` declarations are not added to the global object
- Global scope should be used sparingly to avoid naming conflicts