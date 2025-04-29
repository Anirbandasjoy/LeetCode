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
  [];
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

console.log(quickShort([1, 2]));
