function findNumbers(nums: number[]): number {
  let n = 0;
  while (nums[n] !== undefined) {
    n++;
  }
  let evenDigits = 0;
  for (let i = 0; i < n; i++) {
    let quotient = nums[i];
    let digit = 0;
    while (quotient > 0) {
      quotient = Math.floor(quotient / 10);
      digit++;
    }
    if (digit % 2 === 0) {
      evenDigits++;
    }
  }
  return evenDigits;
}

console.log(findNumbers([12, 345, 2, 6, 7896]));
console.log(findNumbers([555, 901, 482, 1771]));
