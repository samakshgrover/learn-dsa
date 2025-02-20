function largetPermutaion(arr: number[], B: number): number[] {
  for (let i = 0; i <= arr.length; i++) {
    if (B <= 0) break;
    let [max, max_idx] = findMax(arr, i);

    if (arr[i] < max) {
      arr[max_idx] = arr[i];
      arr[i] = max;
    }

    B--;
  }
  return arr;
}

function findMax(arr: number[], start: number): [number, number] {
  let max_idx = -1;
  let max = -Infinity;

  for (let i = start; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      max_idx = i;
    }
  }
  return [max, max_idx];
}

const x = largetPermutaion([1, 2, 3, 4], 1);
console.log(x);
