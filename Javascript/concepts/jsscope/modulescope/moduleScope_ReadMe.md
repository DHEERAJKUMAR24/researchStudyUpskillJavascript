# Module Scope in JavaScript

## Overview
Module scope isolates variables to their own module file, making them accessible only through explicit imports/exports. This folder contains examples demonstrating module scope behavior with different variable declarations: `var`, `let`, and `const`.

## Files

### 1. v1_moduleScopeVar__scope-var__MSV25.js
- Demonstrates `var` in module context
- Module-level encapsulation
- Export/import behavior
- Function scope within modules

### 2. v1_moduleScopeLet__scope-let__MSL25.js
- Demonstrates `let` in module context
- Block scoping within modules
- Temporal Dead Zone behavior
- Module-level state management

### 3. v1_moduleScopeConst__scope-const__MSC25.js
- Demonstrates `const` in module context
- Immutability in modules
- Object/array handling
- Frozen object patterns

### 4. v1_moduleScopeUsage__scope-module__MSU25.js
- Demonstrates module import/export
- Module isolation
- Dynamic imports
- Import modification prevention

## Key Concepts
- Module variables are scoped to their file
- Variables must be explicitly exported to be used elsewhere
- Modules have their own scope, isolated from global scope
- ES6 modules are always in strict mode