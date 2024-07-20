/**
 *
 * @param {number[]} arr
 * @returns {number}
 */
function minDiffSubset(arr) {
  const range = arr.reduce((acc, curr) => acc + curr);
  const n = arr.length;
  const t = Array.from({ length: n + 1 }, () => Array(range + 1).fill(false));

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (j === 0) t[i][j] = true;
    }
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= range; j++) {
      if (arr[i - 1] > j) t[i][j] = t[i - 1][j];
      else t[i][j] = t[i - 1][j] || t[i - 1][j - arr[i - 1]];
    }
  }

  let rangeArr = [];
  let min = Infinity;
  for (let j = 0; j <= range; j++) rangeArr.push(t[n][j]);
  for (let r = 0; r <= Math.floor(rangeArr.length / 2); r++) {
    if (rangeArr[r]) min = Math.min(min, range - 2 * r);
  }

  return Math.abs(min);
}

console.log(minDiffSubset([1, 2, 3, 7, 8]));
