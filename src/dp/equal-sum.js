function equalSum(arr) {
  const totalSum = arr.reduce((acc, curr) => curr + acc);
  if (totalSum % 2 !== 0) return false;
  let sum = totalSum / 2;
  let n = arr.length;
  const t = Array.from({ length: n + 1 }, () => Array(sum + 1));

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= sum; j++) {
      if (j === 0) t[i][j] = true;
      else if (i === 0) t[i][j] = false;
    }
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (arr[i - 1] > j) t[i][j] = t[i - 1][j];
      else {
        t[i][j] = t[i - 1][j] || t[i - 1][j - arr[i - 1]];
      }
    }
  }

  return t[n][sum];
}

console.log(equalSum([1, 2, 3, 4, 5, 6, 11]));
