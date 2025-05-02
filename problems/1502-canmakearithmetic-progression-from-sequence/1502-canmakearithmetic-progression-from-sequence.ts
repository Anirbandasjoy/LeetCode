function canMakeArithmeticProgression(arr: number[]): boolean {
  function quickShort(arr: number[]): number[] {
    let arrLength = 0;
    while (arr[arrLength] !== undefined) {
      arrLength++;
    }
    if (arrLength <= 1) {
      return arr;
    }
    const pivot = arr[arrLength - 1];
    const left: number[] = [];
    const right: number[] = [];

    for (let i = 0; i < arrLength - 1; i++) {
      if (arr[i] < pivot) {
        left[left.length] = arr[i];
      } else {
        right[right.length] = arr[i];
      }
    }
    return [...quickShort(left), pivot, ...quickShort(right)];
  }
  const shortedArr = quickShort(arr);
  let n: number = 0;
  while (shortedArr[n] !== undefined) {
    n++;
  }
  let check: number = shortedArr[1] - shortedArr[0];
  let isCheck: boolean = false;
  for (let i = 0; i < n - 1; i++) {
    let temp = shortedArr[i + 1] - shortedArr[i];
    if (check === temp) {
      isCheck = true;
    } else {
      isCheck = false;
      break;
    }
  }

  return isCheck;
}

console.log(canMakeArithmeticProgression([3, 5, 1]));
console.log(canMakeArithmeticProgression([1, 2, 4]));
