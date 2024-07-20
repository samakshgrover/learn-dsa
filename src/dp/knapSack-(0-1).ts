class Solution {
  constructor() {}

  knapSack(wt: number[], val: number[], w: number, n: number) {
    let t: number[][] = Array(w).fill(Array(n).fill(-1));

    function helper(wt: number[], val: number[], w: number, n: number): number {
      if (t[w][n] !== -1) return t[w][n];
      if (w === 0 || n === 0) return 0;
      if (wt[n - 1] > w) return (t[w][n] = helper(wt, val, w, n - 1));
      else {
        return (t[w][n] = Math.max(
          val[n - 1] + helper(wt, val, w, n - 1),
          helper(wt, val, w, n - 1)
        ));
      }
    }
    return helper(wt, val, w, n);
  }
}

new Solution().knapSack();

export {};
