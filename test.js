/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(arr, target) {
  let i = 0,
    j = arr.length - 1;
  arr.sort((a, b) => a - b);

  while (i < j) {
    console.log({ i, j });
    if (arr[i] + arr[j] === target) {
      console.log({ i, j });
      break;
    } else if (arr[i] + arr[j] > target) j--;
    else if (arr[i] + arr[j] < target) i++;
  }
  return [i, j];
}

// console.log(twoSum([3, 2, 3], 6));
function anagram(s1, s2) {
  let xor1 = s1.split("").reduce((acc, curr) => acc ^ curr.charCodeAt(0), 0);
  let xor2 = s2.split("").reduce((acc, curr) => acc ^ curr.charCodeAt(0), 0);

  if (xor1 == xor2) return true;
  return false;
}

console.log(anagram("abc", "aabc"));

function groupAnagram(strs) {
  const x = strs.map((str) =>
    str.split().reduce(
      (acc, curr) => {
        return [acc[0] ^ curr.charCodeAt(0), acc[1]];
      },
      [0, str],
    ),
  );

  const result = Object.groupBy(x, ([code]) => code);
  return Object.values(result).map((val) => val.map((x) => x[1]));
}

console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));
