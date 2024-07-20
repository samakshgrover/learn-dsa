function search(arr: number[], target: number): [number, number] {
  let result: [number, number] = [-1, -1];
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] === target) {
      result[0] = mid;
      end = mid - 1;
    } else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }

  start = 0;
  end = arr.length - 1;
  console.log(result);
  console.log({ start, end });

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] === target) {
      result[1] = mid;
      start = mid + 1;
    } else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }

  return result;
}

console.log(search([1, 2, 3, 10, 10, 10, 11, 12], 10));
export {};
