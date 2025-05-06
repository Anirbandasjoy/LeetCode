# 13. Roman to Integer

**Difficulty**: `Easy`  
**Category**: `String` / `HashMap`  
**Platform**: LeetCode

🔗 [LeetCode Problem Link](https://leetcode.com/problems/roman-to-integer/description/?envType=study-plan-v2&envId=programming-skills)

---

## Problem Description

Roman numerals are represented by seven different symbols:

| Symbol | Value |
| ------ | ----- |
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

For example:

- 2 is written as `II`, which is two ones added together.
- 12 is written as `XII`, which is simply `X + II`.
- 27 is written as `XXVII`, which is `XX + V + II`.

Roman numerals are usually written **largest to smallest** from left to right. However, for numbers like 4 and 9, subtraction is used:

- `IV` = 4 → (5 - 1)
- `IX` = 9 → (10 - 1)
- `XL` = 40, `XC` = 90
- `CD` = 400, `CM` = 900

These are the six special cases where subtraction is used.

---

## Task

Given a Roman numeral `s`, convert it to an integer.

---

## Examples

### Example 1

**Input:**  
`s = "III"`  
**Output:**  
`3`  
**Explanation:** `I + I + I = 3`

---

### Example 2

**Input:**  
`s = "LVIII"`  
**Output:**  
`58`  
**Explanation:** `L = 50, V = 5, III = 3 → 50 + 5 + 3 = 58`

---

### Example 3

**Input:**  
`s = "MCMXCIV"`  
**Output:**  
`1994`  
**Explanation:**

- `M = 1000`
- `CM = 900`
- `XC = 90`
- `IV = 4`
- Total: `1000 + 900 + 90 + 4 = 1994`

---

## Constraints

- `1 <= s.length <= 15`
- `s` contains only the characters `'I'`, `'V'`, `'X'`, `'L'`, `'C'`, `'D'`, `'M'`
- It is guaranteed that `s` is a valid Roman numeral in the range `[1, 3999]`

---

## 🛠️ Tags

`String`, `Math`, `Hash Table`
