function pushDominoes(dominoes: string): string {
  let n = 0;
  while (dominoes[n] !== undefined) {
    n++;
  }
  const result: string[] = [];
  const forces: number[] = [];
  let force: number = 0;
  const arr: string[] = [];

  for (let i = 0; i < n; i++) {
    arr[i] = dominoes[i];
    result[i] = ".";
    forces[i] = 0;
  }
  force = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === "R") {
      force = n;
    } else if (arr[i] === "L") {
      force = 0;
    } else if (force > 0) {
      force--;
    }
    forces[i] += force;
  }
  force = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] === "L") {
      force = n;
    } else if (arr[i] === "R") {
      force = 0;
    } else if (force > 0) {
      force--;
    }
    forces[i] -= force;
  }
  for (let i = 0; i < n; i++) {
    if (forces[i] > 0) {
      result[i] = "R";
    } else if (forces[i] < 0) {
      result[i] = "L";
    } else {
      result[i] = ".";
    }
  }
  let final = "";
  for (let i = 0; i < n; i++) {
    final += result[i];
  }
  return final;
}

console.log(pushDominoes("RR.L"));
console.log(pushDominoes(".LL.RR.LLRRLL.."));
