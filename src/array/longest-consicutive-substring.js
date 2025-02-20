var longestConsecutive = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let count = 1;
  pre_max = 0;
  pre = nums[0];
  console.log(nums);
  for (let i = 1; i < nums.length; i++) {
    if (pre == nums[i]) {
    } else if (pre + 1 === nums[i]) {
      count = count + 1;
    } else count = 1;
    pre_max = Math.max(pre_max, count);
    pre = nums[i];
    console.log({ num: nums[i], pre, pre_max, count });
  }
  return pre_max;
};
