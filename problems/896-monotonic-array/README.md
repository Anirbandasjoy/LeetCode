# 896. Monotonic Array

**Difficulty**: `Easy`  
**Status**: `Solved`  
**Category**: `Array`  
**Platform**: [LeetCode](https://leetcode.com/problems/monotonic-array/description/)

---

## Problem

An array is **monotonic** if it is either **monotone increasing** or **monotone decreasing**.

An array `nums` is **monotone increasing** if for all `i <= j`, `nums[i] <= nums[j]`.  
An array `nums` is **monotone decreasing** if for all `i <= j`, `nums[i] >= nums[j]`.

Return `true` if the given array is monotonic, or `false` otherwise.

---

## Examples

### Example 1

> **Input:**  
> `nums = [1, 2, 2, 3]`  
> **Output:**  
> `true`
>
> **Explanation:**  
> The array is monotone increasing.

---

### Example 2

> **Input:**  
> `nums = [6, 5, 4, 4]` >  
> **Output:**  
> `true`
>
> **Explanation:**  
> The array is monotone decreasing.

---

### Example 3

> **Input:**  
> `nums = [1, 3, 2]` >  
> **Output:**  
> `false`
>
> **Explanation:**  
> The array is neither increasing nor decreasing.

---

## Constraints

- `1 <= nums.length <= 10^5`
- `-10^5 <= nums[i] <= 10^5`
