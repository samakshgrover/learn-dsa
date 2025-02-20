function treeSum(root) {
  if (root == null) return 0;
  return root.val + treeSum(root.left) + treeSum(root.right);
}

function treeHeight(root) {
  if (!root) return -1;
  return Math.max(treeHeight(root.left), treeHeight(root.right)) + 1;
}

function coinProblem(sum, coins) {
  if (sum == 0) return 0;
  let ans = Infinity;

  for (let coin of coins) {
    if ((sum - coin) < 0) return null;
    ans = minIgnoreNull(ans,)
  }
  return ans;
}

console.log(coinProblem(150, [1, 4, 5]));