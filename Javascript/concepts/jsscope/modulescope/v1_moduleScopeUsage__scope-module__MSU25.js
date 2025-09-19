/**
Problem: Module Usage Example
Concepts: module imports, exports, scope
Tags: scope, module-scope
Source: Custom
Version: v1
Difficulty: Easy
File ID: MSU25
Linked Versions:
v1: v1_moduleScopeUsage__scope-module__MSU25.js
Improvements from previous version:
- Initial version
Approach:
Demonstrating how to use variables and functions from other modules
*/

// Import from other module files
import { incrementCounter as varCounter } from './v1_moduleScopeVar__scope-var__MSV25.js';
import { incrementCounter as letCounter } from './v1_moduleScopeLet__scope-let__MSL25.js';
import { getModuleConst, updateConfig } from './v1_moduleScopeConst__scope-const__MSC25.js';

// Example usage of imported functionality
export function demonstrateModuleImports() {
  console.log('Var counter:', varCounter());
  console.log('Let counter:', letCounter());
  console.log('Const value:', getModuleConst());
  
  // Update config version
  console.log('Updated config:', updateConfig("2.0.0"));
}

// ✅ Positive case - module isolation
const localVar = "I am local to this module";
export function showModuleIsolation() {
  return {
    localVar,
    hasAccessToOtherModuleVar: typeof moduleVar === 'undefined',
    hasAccessToOtherModuleLet: typeof moduleLet === 'undefined',
    hasAccessToOtherModuleConst: typeof MODULE_CONST === 'undefined'
  };
}

// ❌ Negative case - attempting to modify imports
export function attemptModifyImports() {
  try {
    getModuleConst = () => "modified"; // Will throw TypeError
    return false;
  } catch (e) {
    return "Cannot modify imported bindings";
  }
}

// ⚡ Edge case - dynamic imports
export async function dynamicImportExample() {
  try {
    const module = await import('./v1_moduleScopeConst__scope-const__MSC25.js');
    return module.getModuleConst();
  } catch (e) {
    return "Dynamic import failed";
  }
}