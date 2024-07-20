function kthGrammar(n: number, k: number): number {
  if (n === 1 && k === 1) return 0;

  const mid = Math.pow(2, n - 2);
  if (mid >= k) {
    return kthGrammar(n - 1, k);
  } else {
    return kthGrammar(n - 1, k - mid) ? 0 : 1;
  }
};

console.log(kthGrammar(5, 15));

// 0, 01, 0110 01101001 0110100110010110