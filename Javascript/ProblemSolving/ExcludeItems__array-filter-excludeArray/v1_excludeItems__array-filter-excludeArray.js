/**
Problem: Exclude Items from Array by Key-Value Pairs

Concepts: Array filtering, key-value exclusion, higher-order functions

Tags: array, filter, excludearray

Source: Custom

Version: v1

Difficulty: Easy

Linked Versions:
v1: v1_excludeItems__array-filter-excludeArray.js

Improvements from previous version:
- Initial version with basic filter logic

Approach:
Iterate through each exclude pair and filter out items matching the key-value condition.

Time Complexity: O(E * N) where E = excludes.length, N = items.length
Space Complexity: O(N)
*/

function solve({ items, excludes }) {
  excludes.forEach(pair => {
    items = items.filter(item => item[pair.k] !== pair.v)
  })
  return items
}

// Test case
const items = [
  { color: 'red', type: 'tv', age: 18 },
  { color: 'silver', type: 'phone', age: 20 },
  { color: 'blue', type: 'book', age: 17 }
]

const excludes = [
  { k: 'color', v: 'silver' },
  { k: 'type', v: 'tv' }
]

console.log(solve({ items, excludes }))
// Expected output: [ { color: 'blue', type: 'book', age: 17 } ]
