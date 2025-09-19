# Lexical Scope in JavaScript

## Overview
Lexical scope (closure) allows inner functions to access variables from their outer scope, even after the outer function has finished executing. This folder contains examples demonstrating lexical scope behavior with different variable declarations: `var`, `let`, and `const`.

## Files

### 1. v1_lexicalScopeVar__scope-var__LSV25.js
- Demonstrates closures with `var`
- Function factory patterns
- Loop closure problems and solutions
- IIFE usage for scope isolation

### 2. v1_lexicalScopeLet__scope-let__LSL25.js
- Demonstrates closures with `let`
- Block scoping in closures
- Proper loop variable binding
- Nested scope chains

### 3. v1_lexicalScopeConst__scope-const__LSC25.js
- Demonstrates closures with `const`
- Immutable references in closures
- Object mutation patterns
- Frozen object patterns

## Key Concepts
- Inner functions maintain access to their outer scope variables
- Each closure creates a new instance of its variables
- `let` and `const` create proper bindings in loops
- Closures can maintain state while protecting it from external access