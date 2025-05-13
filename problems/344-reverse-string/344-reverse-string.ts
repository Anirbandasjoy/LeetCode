function reverseString(s: string[]): void {
  let n: number = 0;
  while (s[n] !== undefined) {
    n++;
  }

  let left: number = 0;
  let right: number = n - 1;
  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    right--;
    left++;
  }
  console.log(s);
}

reverseString(["h", "e", "l", "l", "o"]);
reverseString(["H", "a", "n", "n", "a", "h"]);
