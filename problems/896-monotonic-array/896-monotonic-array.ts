function isMonotonic(nums: number[]): boolean {
  let n = 0;
  while (nums[n] !== undefined) {
    n++;
  }

  if (n === 1) {
    return true;
  }

  let isMonotonic: boolean = false;
  if (nums[0] <= nums[n - 1]) {
    for (let i = 0; i < n - 1; i++) {
      if (nums[i] <= nums[i + 1]) {
        isMonotonic = true;
      } else {
        isMonotonic = false;
        break;
      }
    }
  } else {
    for (let i = 0; i < n - 1; i++) {
      if (nums[i] >= nums[i + 1]) {
        isMonotonic = true;
      } else {
        isMonotonic = false;
        break;
      }
    }
  }
  return isMonotonic;
}

console.log(isMonotonic([1, 2, 2, 3]));
console.log(isMonotonic([6, 5, 4, 4]));
console.log(isMonotonic([1, 3, 2]));
console.log(isMonotonic([1, 1, 0]));
console.log(isMonotonic([4]));
