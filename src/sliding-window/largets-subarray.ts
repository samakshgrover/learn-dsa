function largestSubArray(arr: number[], k: number): number {
  let l = 0,
    r = 0;
  let sum = 0;
  let largest = 0;

  while (r < arr.length) {
    sum = sum + arr[r];
    console.log({ l, r, sum, arr: arr.slice(l, r + 1) });
    if (sum < k) r++;
    else if (sum === k) {
      largest = Math.max(largest, r - l + 1);
      r++;
    } else {
      while (sum > k) {
        sum = sum - arr[l];
        l++;
      }
      if (sum === k) {
        largest = Math.max(largest, r - l + 1);
      }
      r++;
    }
  }
  return largest;
}

console.log(largestSubArray([4, 1, 1, 1, 2, 3, 5], 5));
