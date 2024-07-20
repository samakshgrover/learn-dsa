function maxOfSubArray(nums: number[], k: number): number[] {
  let result: number[] = [],
    sub: number[] = [];
  let l = 0,
    r = 0;

  while (r < nums.length) {
    // calculations
    // if the sub has elements and last element at the sub is less the current window's right most element then it's of no use so we can remove this element
    // because we are maintaining a decreasing order
    while (sub.length > 0 && sub.at(-1)! < nums[r]) {
      nums.pop();
    }
    sub.push(nums[r]);

    if (r - l + 1 < k) r++;
    else {
      result.push(sub[0]);

      if (nums[l] === sub[0]) sub.shift();
      r++;
      l++;
    }
  }

  return result;
}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// const sliding = (arr: number[], k: number): number[] => {
//   const l = [],
//     res = [];
//   let j = 0,
//     i = 0;
//   while (j < arr.length) {
//     //remove all the elements which are less the elm at j
//     while (l.length > 0 && l[l.length - 1] < arr[j]) l.pop();

//     //push the curr max and elems after it...i.e. potential max elems
//     l.push(arr[j]);

//     if (j - i + 1 < k) j++;
//     else if (j - i + 1 == k) {
//       //push the max to res array (which is stored in front of list)
//       res.push(l[0]);

//       //check if max elm is getting lost when moving the window
//       if (l[0] == arr[i]) l.shift();

//       j++;
//       i++;
//     }
//   }
//   return res;
// };
