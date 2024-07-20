function intToBinary(n: number): string {
  const ans: string[] = [];
  let i = 0;

  while (n > 0) {
    ans.unshift(`${n % 2}`);
    i++;
    n = n >> 1;
  }
  return ans.join("");
}

console.log(intToBinary(-1));
