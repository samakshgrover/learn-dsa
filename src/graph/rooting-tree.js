class TreeNode {
  constructor(id, parent, children) {
    this.id = id;
    this.parent = parent;
    this.children = children;
  }

  addChild(child) {
    this.children.push(child)
  }
}

function rootTree(g, rootId = 0) {
  const rootNode = new TreeNode(rootId, null, []);
  return buildTree(g, rootNode, null);
}

function buildTree(g, node, parent) {

  for (let childId of g[node.id]) {
    if (parent !== null && parent.id == childId) {
      continue;
    }

    const child = new TreeNode(childId, node, []);
    node.addChild(child);
    buildTree(g, child, node);
  }

  return node;
}

