function knapSack(wt, val, cap, len) {
  //   console.log({n, val, wt, w})
  let dp = Array.from({ length: len + 1 }, () => Array(cap + 1).fill(0));

  for (let n = 1; n <= len; n++) {
    for (let w = 1; w <= cap; w++) {
      if (wt[n - 1] > w) {
        dp[n][w] = dp[n - 1][w];
      } else {
        dp[n][w] = Math.max(
          dp[n - 1][w],
          dp[n - 1][w - wt[n - 1]] + val[n - 1]
        );
      }
    }
  }
  return dp[len][cap];
}

// function knapsack(values, weights, capacity) {
//   const n = values.length;
//   // Initialize a DP table with (n+1) x (capacity+1)
//   const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

//   // Fill the DP table
//   for (let i = 1; i <= n; i++) {
//     for (let w = 1; w <= capacity; w++) {
//       if (weights[i - 1] <= w) {
//         dp[i][w] = Math.max(
//           dp[i - 1][w],
//           dp[i - 1][w - weights[i - 1]] + values[i - 1]
//         );
//       } else {
//         dp[i][w] = dp[i - 1][w];
//       }
//     }
//   }

//   // The maximum value will be in dp[n][capacity]
//   return dp[n][capacity];
// }

// Example usage:
let values = [60, 100, 120];
let weights = [10, 20, 30];
const capacity = 50;
// console.log(knapSack(values, weights, capacity, values.length)); // Output: 220

values = [
  360, 83, 59, 130, 431, 67, 230, 52, 93, 125, 670, 892, 600, 38, 48, 147, 78,
  256, 63, 17, 120, 164, 432, 35, 92, 110, 22, 42, 50, 323, 514, 28, 87, 73, 78,
  15, 26, 78, 210, 36, 85, 189, 274, 43, 33, 10, 19, 389, 276, 312,
];
weights = [
  [
    7, 0, 30, 22, 80, 94, 11, 81, 70, 64, 59, 18, 0, 36, 3, 8, 15, 42, 9, 0, 42,
    47, 52, 32, 26, 48, 55, 6, 29, 84, 2, 4, 18, 56, 7, 29, 93, 44, 71, 3, 86,
    66, 31, 65, 0, 79, 20, 65, 52, 13,
  ],
];
// const capacities = 850;

// console.log(knapsack(weights, values, values.length, capacities));
// { n: 3, val: [ 1, 2, 3 ], wt: [ 4, 5, 1 ], w: 4 }
// console.log(knapSack(4, [1, 2, 3], [4, 5, 1], 3));

function ks(wt, val, cap, len) {
  if (cap === 0 || len === 0) return 0;
  if (wt[len - 1] <= cap) {
    return Math.max(
      ks(wt, val, cap, len - 1),
      ks(wt, val, cap - wt[len - 1], len - 1) + val[len - 1]
    );
  } else return ks(wt, val, cap, len - 1);
}

console.log(knapSack([10, 20, 30], [60, 100, 120], 50, 3));
console.log(ks([10, 20, 30], [60, 100, 120], 50, 3));
