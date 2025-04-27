function moveZeroes(nums: number[]): void {
  let numsLength = 0;
  for (let i = 0; nums[i] !== undefined; i++) {
    numsLength++;
  }

  let position = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[position] = nums[i];
      position++;
    }
  }
  while (position < numsLength) {
    nums[position] = 0;
    position++;
  }
  console.log(nums);
}

moveZeroes([0, 12, 0, 3, 1]);
