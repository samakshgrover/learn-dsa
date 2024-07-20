const mergeArr = (arr1: number[], arr2: number[], n: number, m: number) => {
  // const l = n + m;
  let l = n - 1;
  let r = m - 1;
  let i = m + n - 1;

  while (l >= 0 && r >= 0) {
    if (arr1[l] > arr2[r]) {
      arr1[i] = arr1[l];
      l--;
    } else {
      arr1[i] = arr2[r];
      r--;
    }
    i--;
  }

  while (l > 0) {
    arr1[i--] = arr1[i--];
  }
  while (r > 0) {
    arr1[i--] = arr2[i--];
  }
  return arr1;
};

console.log(mergeArr([1, 3, 5], [1], 3, 1));
