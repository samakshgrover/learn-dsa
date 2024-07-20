function nBitBinary(n: number): string[] {
  let zero = 0;
  let one = 0;
  let result: string[] = [];

  solution(n, zero, one, result);
  return result;
}

const solution = (n: number, zero: number, one: number, result: string[], out = "") => {
  if (n == 0) return result.push(out);

  if (one > zero) solution(n - 1, zero + 1, one, result, out + "0");
  solution(n - 1, zero, one + 1, result, out + "1")
}

console.log(nBitBinary(2));
export { }