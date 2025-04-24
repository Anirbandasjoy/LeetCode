function strStr(haystack: string, needle: string): number {
  for (let i = 0; i < haystack.length; i++) {
    let found = true;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        found = false;
        break;
      }
    }
    if (found) {
      return i;
    }
  }
  return -1;
}

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
