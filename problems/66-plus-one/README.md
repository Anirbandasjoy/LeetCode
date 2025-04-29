# 66. Plus One

**Difficulty**: Easy  
**Status**: Solved  
**Category**: Array / Math  
**Platform**: LeetCode

**Problem Link**: [LeetCode - Plus One](https://leetcode.com/problems/plus-one/description/?envType=study-plan-v2&envId=programming-skills)

---

## Problem

You are given a large integer represented as an integer array `digits`, where each `digits[i]` is the `i-th` digit of the integer.

- The digits are ordered from most significant to least significant (left to right).
- The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

---

## Examples

### Example 1

- **Input:**  
  `digits = [1,2,3]`
- **Output:**  
  `[1,2,4]`
- **Explanation:**  
  The array represents the integer `123`. Incrementing by one gives `124`.

---

### Example 2

- **Input:**  
  `digits = [4,3,2,1]`
- **Output:**  
  `[4,3,2,2]`
- **Explanation:**  
  The array represents the integer `4321`. Incrementing by one gives `4322`.

---

### Example 3

- **Input:**  
  `digits = [9]`
- **Output:**  
  `[1,0]`
- **Explanation:**  
  The array represents the integer `9`. Incrementing by one gives `10`.

  ***

### Example 4

- **Input:**  
  `digits = [9,9]`
- **Output:**  
  `[1,0,0]`
- **Explanation:**  
  The array represents the integer `9`. Incrementing by one gives `10`.

---

## Constraints

- `1 <= digits.length <= 100`
- `0 <= digits[i] <= 9`
- `digits` does not contain any leading 0's.

---
