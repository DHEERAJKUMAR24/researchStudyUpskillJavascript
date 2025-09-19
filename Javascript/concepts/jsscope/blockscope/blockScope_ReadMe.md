# Block Scope in JavaScript

## Overview
Block scope refers to variables and constants that are only accessible within a block of code (denoted by curly braces {}). This folder contains examples demonstrating block scope behavior with different variable declarations: `var`, `let`, and `const`.

## Files

### 1. v1_blockScopeVar__scope-var__BSV25.js
- Demonstrates `var` lacks true block scope
- Shows how `var` "escapes" blocks
- Illustrates potential issues in loops
- Function closure problems with `var`

### 2. v1_blockScopeLet__scope-let__BSL25.js
- Demonstrates true block scoping with `let`
- Proper scope isolation
- Loop iteration scoping
- Temporal Dead Zone behavior

### 3. v1_blockScopeConst__scope-const__BSC25.js
- Demonstrates block scoping with `const`
- Immutability rules
- Object/array mutability within blocks
- Proper block-level isolation

## Key Concepts
- `var` declarations ignore block scope
- `let` and `const` are properly block-scoped
- Each block creates its own scope for `let` and `const`
- Block scope helps prevent variable leaks and naming conflicts