# 838. Push Dominoes

**Difficulty**: `Medium`  
**Category**: `Simulation`, `Two Pointers`, `String`  
**Platform**: [LeetCode](https://leetcode.com/problems/push-dominoes/description/?envType=daily-question&envId=2025-05-02)

---

## Problem

There are `n` dominoes in a line, and we place each domino vertically upright. In the beginning, we simultaneously push some of the dominoes either to the left or to the right.

After each second, each domino that is falling to the left pushes the adjacent domino on the left. Similarly, the dominoes falling to the right push their adjacent dominoes standing on the right.

When a vertical domino has dominoes falling on it from both sides, it stays still due to the balance of the forces.

For the purposes of this question, we will consider that a falling domino expends no additional force to a falling or already fallen domino.

You are given a string `dominoes` representing the initial state where:

- `dominoes[i] = 'L'` if the ith domino has been pushed to the left,
- `dominoes[i] = 'R'` if the ith domino has been pushed to the right, and
- `dominoes[i] = '.'` if the ith domino has not been pushed.

Return a string representing the final state.

---

## Examples

### Example 1

> **Input:**  
> `"RR.L"`  
> **Output:**  
> `"RR.L"`
>
> **Explanation:**  
> The first domino pushes the second to the right. The third domino is not affected as the second is already falling. The fourth is pushed to the left but remains unaffected by the third.

---

### Example 2

> **Input:**  
> `".L.R...LR..L.."`  
> **Output:**  
> `"LL.RR.LLRRLL.."`

---

## Constraints

- `n == dominoes.length`
- `1 <= n <= 10^5`
- `dominoes[i]` is either `'L'`, `'R'`, or `'.'`.

---

## Tags

`#LeetCode` `#Simulation` `#String` `#TwoPointers` `#Medium`
