# 283. Move Zeroes

**Difficulty**: `Easy`  
**Status**: `Solved`  
**Category**: `Array`, `Two Pointers`  
**Platform**: `LeetCode`

Problem Link: [LeetCode - Move Zeroes](https://leetcode.com/problems/move-zeroes/description/?envType=study-plan-v2&envId=programming-skills)

---

## Problem

Given an integer array `nums`, move all `0`'s to the **end** of it while maintaining the **relative order** of the **non-zero** elements.

You must do this **in-place** without making a copy of the array.

---

## Examples

### Example 1

> **Input:**  
> `nums = [0,1,0,3,12]`  
> **Output:**  
> `[1,3,12,0,0]`
>
> **Explanation:**  
> All non-zero elements retain their original order, and all zeros are moved to the end.

### Example 2

> **Input:**  
> `nums = [0]`  
> **Output:**  
> `[0]`
>
> **Explanation:**  
> Only one element which is zero, so no changes needed.

---

## Constraints

- `1 <= nums.length <= 10⁴`
- `-2³¹ <= nums[i] <= 2³¹ - 1`
