function romanToInt(s: string): number {
  let n: number = 0;
  while (s[n] !== undefined) {
    n++;
  }
  let sum: number = 0;
  const roman: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < n; i++) {
    if (roman[s[i]] < roman[s[i + 1]]) {
      sum += roman[s[i + 1]] - roman[s[i]];
      i++;
    } else {
      sum += roman[s[i]];
    }
  }

  return sum;
}

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
