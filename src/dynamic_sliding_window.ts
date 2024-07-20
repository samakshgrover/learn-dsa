function smallestSubArray(numbers: number[], k: number) {
  let l = 0, sum = 0, ans = Infinity

  for (let r = 0; r < numbers.length; r++) {
    sum += numbers[r];
    while (sum >= k) {
      ans = Math.min(ans, r - l + 1);
      sum -= numbers[l++];
    }
  }
  return ans;
}

console.log(smallestSubArray([5, 1, 3, 5, 10, 7, 4, 9, 2, 8], 15));