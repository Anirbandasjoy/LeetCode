function repeatedSubstringPattern(s: string): boolean {
  let sLength: number = 0;
  for (let i = 0; s[i] !== undefined; i++) {
    sLength++;
  }

  for (let i = 1; i < sLength; i++) {
    if (sLength % i === 0) {
      let isValid = true;
      for (let j = 0; j < sLength; j++) {
        if (s[j] !== s[j % i]) {
          isValid = false;
          break;
        }
      }
      if (isValid) {
        return true;
      }
    }
  }

  return false;
}

console.log(repeatedSubstringPattern("abab"));
console.log(repeatedSubstringPattern("aba"));
console.log(repeatedSubstringPattern("abcabcabcabc"));
