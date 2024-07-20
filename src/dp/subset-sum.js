function sol(arr, target, n) {
  if (target === 0) return true;
  if (n === 0) return false;

  if (arr[n - 1] > target) return sol(arr, target, n - 1);
  else return sol(arr, target - arr[n - 1], n - 1) || sol(arr, target, n - 1);
}

// console.log(sol([3, 34, 4, 12, 5, 2], 9, 6));

function sol_dp(arr, sum, n) {
  const t = Array.from({ length: n + 1 }, () => Array(sum + 1));

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= sum; j++) {
      if (i === 0) t[i][j] = false;
      if (j === 0) t[i][j] = true;
    }
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum + 1; j++) {
      if (arr[i - 1] > j) t[i][j] = t[i - 1][j];
      else t[i][j] = t[i - 1][j] || t[i - 1][j - arr[i - 1]];
    }
  }
  return t[n][sum];
}

console.log(sol_dp([3, 34, 4, 12, 5, 2], 3, 5));
