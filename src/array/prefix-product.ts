// function productExceptSelf(nums) {
//   let res = [];
//   let prefix = 1;

//   for (let i = 0; i < nums.length; i++) {
//     res[i] = prefix;
//     prefix = prefix * nums[i];
//   }

//   let postfix = 1;
//   for (let i = res.length - 1; i >= 0; i--) {
//     res[i] = res[i - 1] * prefix;
//   }
// }

function productExceptSelf2(nums: number[]) {
  let prefix = 1;
  let p1: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    p1[i] = prefix;
    prefix = prefix * nums[i];
  }
  let p2: number[] = [];
  let postfix = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    console.log({ i });
    p2[i] = postfix;
    postfix = postfix * nums[i];
  }

  return p1.map((el, i) => el * p2[i]);
}

console.log(productExceptSelf2([1, 2, 3, 4]));
