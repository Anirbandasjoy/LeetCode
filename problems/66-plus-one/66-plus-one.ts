function plusOne(digits: number[]): number[] {
  let n: number = 0;
  while (digits[n] !== undefined) {
    n++;
  }
  let carry = 1;
  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
      carry = 1;
    } else {
      digits[i] = digits[i] + carry;
      carry = 0;
      break;
    }
  }

  if (carry === 1) {
    for (let i = n; i > 0; i--) {
      digits[i] = digits[i - 1];
    }
    digits[0] = 1;
  }
  return digits;
}

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 2]));
console.log(plusOne([9]));
console.log(plusOne([9, 9, 9]));
