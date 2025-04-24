function isAnagram(s: string, t: string): boolean {
  let sLength = 0;
  let tLength = 0;
  for (let i = 0; s[i] !== undefined; i++) {
    sLength++;
  }
  for (let i = 0; t[i]; i++) {
    tLength++;
  }
  if (sLength !== tLength) {
    return false;
  }
  const sChars: string[] = [];
  const tChars: string[] = [];

  for (let i = 0; i < sLength; i++) {
    sChars[i] = s[i];
    tChars[i] = t[i];
  }

  const checked: boolean[] = [];

  for (let i = 0; i < tLength; i++) {
    checked[i] = false;
  }

  for (let i = 0; i < sLength; i++) {
    let found = false;
    for (let j = 0; j < tLength; j++) {
      if (!checked[j] && sChars[i] === tChars[j]) {
        checked[j] = true;
        found = true;
        break;
      }
    }
    if (!found) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("anagram", "anagram"));
console.log(isAnagram("rat", "car"));
