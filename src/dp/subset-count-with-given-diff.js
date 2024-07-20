/**
 *
 * @param {number[]} arr
 * @param {number} d
 * @returns {number}
 */
function count(arr, d) {
  const sum = arr.reduce((acc, curr) => acc + curr);
  const target = (sum - d) / 2;
}
// [1,2,1,3], 3
// 1,2 | 2,1 | 3
function count_sub_rec(arr, d) {
  const sum = arr.reduce((acc, curr) => acc + curr);
  const t = (sum + d) / 2;
  if (!Number.isInteger(t)) return 0;
  return count_rec(arr, arr.length, t);
}
function count_rec(arr, n, t) {
  if (t === 0) return 1;
  if (n === 0) return 0;

  if (arr[n - 1] > t) return count_rec(arr, n - 1, t);
  else return count_rec(arr, n - 1, t) + count_rec(arr, n - 1, t - arr[n - 1]);
}

// console.log(count_rec([1, 2, 1, 3], 4, 3));
console.log(count_sub_rec([1, 1, 2, 3], 3));
