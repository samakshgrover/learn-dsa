/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  // TODO: fix this
  let k = 0;

  for (const num of nums) {
    if (num != val) {
      num[k] = num;
      k++;
    }
  }
  return k;
}
let a = [3, 2, 2, 3];
console.log(removeElement(a, 3));
console.log(a);
