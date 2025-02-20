import { isJSDocClassTag } from "typescript";

function reverse(A: number) {
  let bits = A.toString(2).split("");
  let arr = Array.from({ length: 32 }, () => "0");
  const n = bits.length;
  for (let i = 0; i < n; i++) {
    arr[i] = bits[n - 1 - i];
  }
  return parseInt(arr.join("").toString(), 2);
}

// console.log(reverse(2));

function numBits(n: number): number {
  let count = 0;

  let bn = BigInt(n);

  while (bn > 0n) {
    if (bn & 1n) count++;
    bn = bn >> 1n;
  }
  return count;
}

// console.log(numBits(15));

// count set bits
function solve(A: number): number {
  return solution(A) % 1000000007;
}

function solution(A: number): number {
  let sum = 0;

  while (A > 0) {
    sum = numBits(A);
    A = A - 1;
  }
  return sum;
}

function countTotalSetBits(n: number): number {
  let arr: number[] = [];
  arr.push(0);

  for (let i = 1; i <= n; i++) {
    if (i & 1) {
      arr[i] = arr[i >> 1] + 1;
    } else arr[i] = arr[i >> 1];
  }
  return arr.reduce((acc, curr) => acc + curr);
}

console.log(countTotalSetBits(10000000));
