function maxSum(arr: number[], k: number) {
  let sum = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    if (i === 0) sum = arr[i] + arr[i + 1] + arr[i + 2];
    else sum = Math.max(sum, sum + arr[i + 2] - arr[i - 1]);
  }

  return sum
}

// console.log(maxSum([2, 3, 5, 2, 9, 7, 1], 3));

function firstNegativeInteger(nums: number[], k: number): number[] {
  const r: number[] = [];
  const neg_nums: number[] = [];

  let i = 0, j = 0;

  while (j < nums.length) {
    if (nums[j] < 0) r.push(nums[j]);

    if (j - i + 1 < k) j++;
    else {
      if (neg_nums.length === 0) r.push(0);
      else {
        r.push(neg_nums[0]);
        if (neg_nums[0] === nums[i]) neg_nums.shift();
        i++; j++
      }
    }
  }
  return r;
}


const mapsAreEqual = (m1: any, m2: any) => m1.size === m2.size && Array.from(m1.keys()).every((key) => m1.get(key) === m2.get(key));

function search(pat: string, txt: string) {
  let match = 0;
  let l = 0, r = 0;
  let map = new Map();

  let pat_map = new Map();
  for (let ch of pat) {
    pat_map.set(ch, (pat_map.has(ch) ? pat_map.get(ch) + 1 : 1))
  }

  console.log(pat_map);
  console.log("================");

  while (r < txt.length) {
    map.set(txt[r], (map.has(txt[r]) ? map.get(txt[r]) + 1 : 1));

    if (r - l + 1 < pat.length) r++;
    else {
      console.log(map);
      if (mapsAreEqual(map, pat_map)) match++;
      if (map.get(txt[l]) > 1) {
        map.set(txt[l], (map.get(txt[l]) - 1));
      } else {
        map.delete(txt[l]);
      }
      l++; r++;
    }
  }
  return match;
}

console.log(search("for", "forxxorfxdofr"))