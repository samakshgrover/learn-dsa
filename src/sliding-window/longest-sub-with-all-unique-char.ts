function longestSubString(str: string): number {
  let ans = 0;
  let l = 0;
  let r = 0;
  let obj: { [key: string]: number } = {};

  while (r < str.length) {
    let curr = str[r];
    obj[curr] = obj[curr] ? obj[curr] + 1 : 1;

    if (obj[curr] === 1) {
      ans = Math.max(ans, r - l + 1);
      r++;
    } else if (obj[curr] > 1) {
      while (obj[curr] > 1) {
        obj[str[l]] = obj[str[l]] - 1;
        l++;
      }
      if (obj[curr] === 1) ans = Math.max(ans, r - l + 1);
      r++;
    }
  }

  return ans;
}

console.log(longestSubString("pwwkew"));
