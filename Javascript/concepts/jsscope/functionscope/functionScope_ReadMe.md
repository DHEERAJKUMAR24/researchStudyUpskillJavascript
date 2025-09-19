# Function Scope in JavaScript

## Overview
Function scope means variables declared within a function are only accessible inside that function. This folder contains examples demonstrating function scope behavior with different variable declarations: `var`, `let`, and `const`.

## Files

### 1. v1_functionScopeVar__scope-var__FSV25.js
- Demonstrates `var` in function scope
- Shows function-level hoisting
- Illustrates lack of block scope
- Variable lifecycle within functions

### 2. v1_functionScopeLet__scope-let__FSL25.js
- Demonstrates `let` in function scope
- Block scoping rules within functions
- Temporal Dead Zone (TDZ) behavior
- No redeclaration within function

### 3. v1_functionScopeConst__scope-const__FSC25.js
- Demonstrates `const` in function scope
- Immutability rules within functions
- Object property mutability
- Block scoping rules

## Key Concepts
- Function-scoped variables are only accessible within their declaring function
- `var` is only function-scoped (ignores blocks)
- `let` and `const` are both function and block-scoped
- Functions create their own scope, isolating variables from other functions