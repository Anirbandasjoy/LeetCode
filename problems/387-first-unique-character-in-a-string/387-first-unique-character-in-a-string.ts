function firstUniqChar(s: string): number {
  let n = 0;

  while (s[n] !== undefined) {
    n++;
  }

  for (let i = 0; i < n; i++) {
    let isUnique = true;

    for (let j = 0; j < n; j++) {
      if (i !== j && s[i] === s[j]) {
        isUnique = false;
        break;
      }
    }

    if (isUnique) {
      return i;
    }
  }

  return -1;
}

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));
