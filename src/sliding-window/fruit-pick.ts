// https://leetcode.com/problems/fruit-into-baskets/
function totalFruit(fruits: number[]): number {
  let l = 0,
    r = 0;
  let ans = 0;
  let map = new Map();

  while (r < fruits.length) {
    let curr = fruits[r];
    map.set(curr, map.has(curr) ? map.get(curr) + 1 : 1);

    if (map.size === 2) {
      ans = Math.max(ans, r - l + 1);
      r++;
    } else {
      while (map.size > 2) {
        map.set(fruits[l], map.get(fruits[l]) - 1);
        if (map.get(fruits[l]) === 0) map.delete(fruits[l]);
        l++;
      }
      if (map.size === 2) ans = Math.max(ans, r - l + 1);
      r++;
    }
  }
  return ans;
}

console.log(totalFruit([1, 2, 1]));
