function count(arr, sum) {
  const n = arr.length;
  const t = Array.from({ length: n + 1 }, () => Array(sum + 1).fill(0));

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= sum; j++) {
      if (j === 0) t[i][j] = 1;
    }
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (arr[i - 1] > j) t[i][j] = t[i - 1][j];
      else t[i][j] = t[i - 1][j] + t[i - 1][j - arr[i - 1]];
    }
  }

  return t[n][sum];
}

console.log(count([9, 7, 0, 3, 9, 8, 6, 5, 7, 6], 31));
console.log(count_rec([9, 7, 0, 3, 9, 8, 6, 5, 7, 6], 10, 31));

function count_rec(arr, n, sum) {
  if (sum === 0) return 1;
  if (n === 0) return 0;

  if (arr[n - 1] > sum) return count_rec(arr, n - 1, sum);
  else
    return count_rec(arr, n - 1, sum) + count_rec(arr, n - 1, sum - arr[n - 1]);
}
