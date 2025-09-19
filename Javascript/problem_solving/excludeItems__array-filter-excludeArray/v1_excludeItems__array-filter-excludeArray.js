

/**
Problem: Exclude Items from Array by Key-Value Pairs
Concepts: array filtering, key-value exclusion, higher-order functions
Tags: array, filter-excludearray
Source: Custom
Links: 
Version: v1
Difficulty: Easy
File ID: A1B2C3
Linked Versions:
v1: v1_excludeItems__array-filter-excludeArray__A1B2C3.js
Improvements from previous version:
- Initial version
Approach:
Iterate through each exclude pair and filter out items matching the key-value condition.
Time Complexity: O(E * N) where E = excludes.length, N = items.length
Space Complexity: O(N)
*/


function solveExcludeItemsV1({ items, excludes }) {
  excludes.forEach(pair => {
    items = items.filter(item => item[pair.k] !== pair.v)
  })
  return items
}


// ✅ Positive case
const items1 = [
  { color: 'red', type: 'tv', age: 18 },
  { color: 'silver', type: 'phone', age: 20 },
  { color: 'blue', type: 'book', age: 17 }
]
const excludes1 = [
  { k: 'color', v: 'silver' },
  { k: 'type', v: 'tv' }
]
console.log('Positive:', solveExcludeItemsV1({ items: items1, excludes: excludes1 }))
// Expected: [ { color: 'blue', type: 'book', age: 17 } ]

// ❌ Negative case
const items2 = [
  { color: 'red', type: 'tv' }
]
const excludes2 = [
  { k: 'color', v: 'blue' }
]
console.log('Negative:', solveExcludeItemsV1({ items: items2, excludes: excludes2 }))
// Expected: [ { color: 'red', type: 'tv' } ]

// ⚡ Edge case
const items3 = []
const excludes3 = [ { k: 'type', v: 'tv' } ]
console.log('Edge:', solveExcludeItemsV1({ items: items3, excludes: excludes3 }))
// Expected: []

// --- Performance Monitoring ---
const { measureTimeComplexity, measureMemoryComplexity } = require('../../performance_helpers/performance');
console.log('--- Time Complexity ---');
const timeResult = measureTimeComplexity(solveExcludeItemsV1, { items: items1, excludes: excludes1 });
console.log('--- Memory Complexity ---');
const memResult = measureMemoryComplexity(solveExcludeItemsV1, { items: items1, excludes: excludes1 });
console.log('Result:', timeResult);
