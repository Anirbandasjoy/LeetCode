function toLowerCase(s: string): string {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let code = char.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(code + 32);
    } else {
      result += char;
    }
  }
  return result;
}

console.log(toLowerCase("Hello"));
