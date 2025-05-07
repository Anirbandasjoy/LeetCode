function lengthOfLastWord(s: string): number {
  let n: number = 0;

  while (s[n] !== undefined) {
    n++;
  }

  let lastword: string = "";
  let foundWord: boolean = false;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === " " && foundWord) {
      break;
    } else if (s[i] !== " ") {
      lastword += s[i];
      foundWord = true;
    }
  }
  let lastwordLength: number = 0;
  while (lastword[lastwordLength] !== undefined) {
    lastwordLength++;
  }

  return lastwordLength;
}

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
