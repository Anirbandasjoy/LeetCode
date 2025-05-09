function reverseString(s: string[]): void {
  let n: number = 0;
  while (s[n] !== undefined) {
    n++;
  }
  let left = 0;
  let right = n - 1;

  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }

  console.log(s);
}

reverseString(["h", "e", "l", "l", "o"]);
reverseString(["H", "a", "n", "n", "a", "h"]);
