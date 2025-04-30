function arraySign(nums: number[]): number {
  function signFunc(x: number): number {
    let value = 0;
    if (x === 0) {
      value = 0;
    } else if (x > 1) {
      value = 1;
    } else if (x < 1) {
      value = -1;
    }
    return value;
  }
  let n = 0;
  while (nums[n] !== undefined) {
    n++;
  }
  let mul = 1;
  for (let i = 0; i < n; i++) {
    const tem = nums[i] * mul;
    mul = tem;
  }
  return signFunc(mul);
}

console.log(arraySign([-1, -2, -3, -4, 3, 2, 1]));
console.log(arraySign([1, 5, 0, 2, -3]));
console.log(arraySign([-1, 1, -1, 1, -1]));
