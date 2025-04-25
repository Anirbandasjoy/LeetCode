# 242. Valid Anagram

**Difficulty**: Easy  
**Status**: Solved  
**Category**: String  
**Platform**: LeetCode

Problem Link: [LeetCode - Valid Anagram](https://leetcode.com/problems/valid-anagram/?envType=study-plan-v2&envId=programming-skills)

---

## Problem

Given two strings `s` and `t`, return `true` if `t` is an **anagram** of `s`, and `false` otherwise.

An anagram is a word or phrase formed by rearranging the letters of another word or phrase, using **all the original letters exactly once**.

---

## Examples

### Example 1

- **Input:**  
  `s = "anagram"`, `t = "nagaram"`
- **Output:**  
  `true`
- **Explanation:**  
  All the characters in `s` exist in `t` with the same frequency but in a different order.

### Example 2

- **Input:**  
  `s = "rat"`, `t = "car"`
- **Output:**  
  `false`
- **Explanation:**  
  Character `'c'` exists in `t` but not in `s`, and `'t'` is missing in `t`, so it's not an anagram.

---

## Constraints

- `1 <= s.length, t.length <= 5 * 10⁴`
- `s` and `t` consist of only lowercase English letters.

---
