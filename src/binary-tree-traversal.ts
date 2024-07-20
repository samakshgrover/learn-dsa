function recursive(root: TreeNode | null) {
  if (root === null) return;
  console.log(root.val);
  recursive(root.left);
  recursive(root.right);
}

function nonRecursive_pre_order_traversal(root: TreeNode | null) {
  const stack: TreeNode[] = [];
  let current = root;
  const result: number[] = [];

  while (stack.length > 0 || current !== null) {
    if (current !== null) {
      result.push(current.val);
      stack.push(current);
      current = current.left;
    } else {
      current = stack.pop()!;
      current = current.right;
    }
  }
}

function nonRecursive_another_way(root: TreeNode | null) {
  const stack: TreeNode[] = [];
  const result: number[] = [];
  if (!root) return;
  stack.push(root);

  while (stack.length > 0) {
    const node = stack.pop()!;
    result.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
}

function in_order_non_recursive(root: TreeNode | null) {
  const stack: TreeNode[] = [];
  const result: number[] = [];
  let node = root;

  while (stack.length > 0 || node !== null) {
    if (node !== null) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop()!;
      result.push(node.val);
      node = node.right;
    }
  }
}

function post_order_traversal_recursive(root: TreeNode | null) {
  if (!root) return;
  post_order_traversal_recursive(root.left);
  post_order_traversal_recursive(root.right);
  console.log(root.val);
}

function post_order_traversal_non_recursive(root: TreeNode | null) {
  const stack: TreeNode[] = [];
  const result: number[] = [];
  let current = root;
  let previous: TreeNode | null = null;

  while (stack.length > 0 || current) {
    if (current !== null) {
      stack.push(current);
      current = current.left;
    } else {
      let peekNode = stack.at(-1)!;
      if (peekNode.right !== null && peekNode.right !== previous) {
        current = peekNode.right;
      } else {
        result.push(peekNode.val);
        previous = stack.pop()!;
      }
    }
  }
}

function level_order_traversal(root: TreeNode | null): number[][] {
  if (root === null) return [];
  const stack: TreeNode[][] = [[root]];
  let i = 0;

  while (stack.length > i) {
    let currentStack = stack[i];
    let x: TreeNode[] = [];

    for (let current of currentStack) {
      if (current.left !== null) x.push(current.left);
      if (current.right !== null) x.push(current.right);
    }
    i++;
  }

  return stack.map((levelStack) => levelStack.map((node) => node.val));
}

function max_in_binary_tree(root: TreeNode | null): number {
  if (root === null) return 0;
  return Math.max(
    root.val,
    max_in_binary_tree(root.left),
    max_in_binary_tree(root.right)
  );
}

function max_in_binary_tree_iterative(root: TreeNode | null) {
  let max = 0;
  if (!root) return max;

  let stack: TreeNode[] = [root];
  while (stack.length > 0) {
    let current = stack.pop()!;
    max = Math.max(max, current.val);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return max;
}

function search_in_bt_recursive(
  root: TreeNode | null,
  target: number
): boolean {
  if (root === null) return false;
  if (root.val === target) return true;
  return (
    search_in_bt_recursive(root.left, target) ||
    search_in_bt_recursive(root.right, target)
  );
}

function search_in_bt_iterative(
  root: TreeNode | null,
  target: number
): boolean {
  if (root === null) return false;
  const stack: TreeNode[] = [root];

  while (stack.length > 0) {
    let current = stack.pop()!;
    if (current.val === target) return true;
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return false;
}

// uses level order traversal
function insert_element(root: TreeNode | null, element: number) {
  if (root === null) return new TreeNode(element);
  let queue: TreeNode[] = [];
  queue.push(root);

  while (queue.length > 0) {
    let node = queue.shift()!;
    if (node.left === null) {
      node.left = new TreeNode(element);
      return;
    } else queue.push(node.left);

    if (node.right === null) {
      node.right = new TreeNode(element);
      return;
    } else queue.push(node.right);
  }
}

function size_binary_tree(root: TreeNode | null): number {
  if (root === null) return 0;
  return size_binary_tree(root.left) + size_binary_tree(root.right) + 1;
}

function size_binary_tree_iterative(root: TreeNode | null): number {
  let size = 0;
  if (root === null) return size;
  const stack: TreeNode[] = [root];

  while (stack.length > 0) {
    let node = stack.pop()!;
    size = size + 1;
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return size;
}

function reverse_level_order(root: TreeNode | null): number[][] {
  if (root === null) return [];
  const stack: TreeNode[][] = [[root]];
  let i = 0;

  while (stack.length > i) {
    const currentStack = stack[i];
    let nodeStack: TreeNode[] = [];
    for (let current of currentStack) {
      if (current.left) nodeStack.push(current.left);
      if (current.right) nodeStack.push(current.right);
    }
    i++;
  }
}
