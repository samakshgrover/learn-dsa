function subset(str: string): string[] {
  if (!str) return [""];
  let out: string[] = [];

  for (let i = 0; i <= str.length; i++) {

  }
  return out;
}

function oneToN(n: number) {
  if (n <= 0) return;
  oneToN(n - 1);
  console.log(n);
}

// function btHeight(node: TreeNode | null): number {
//   if (node === null) return 0;
//   return 1 + Math.max(btHeight(node.left), btHeight(node.right))
// }

function sortArray(arr: number[]): number[] {
  if (arr.length <= 0) return [];

  let sortedArr = sortArray(arr.slice(1));
  return arrangeArray(sortedArr, arr[0])
}

console.log(sortArray([5, 3, 2, 7, 9, 0]));

function arrangeArray(arr: number[], target: number): number[] {
  if (arr.length === 0) return [target]
  if (arr[0] > target) {
    return [target, ...arr]
  } else {
    return [arr[0], ...arrangeArray(arr.slice(1), target)]
  }
}