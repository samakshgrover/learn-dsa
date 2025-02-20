/**
 * 
 * @param {number[][]} graph 
 */
// function dfs(graph, at, visited = [], result = []) {
//   if (visited[at]) return;

//   visited[at] = true;

//   let neighbors = graph[at];
//   for (let next of neighbors) {
//     dfs(graph, next, visited, result);
//   }

//   result.push(at); // Postorder push
//   return result;   // Return the result array
// }


function dfs(graph, at) {
  const visited = new Array(graph.length).fill(false);  // Initialize visited array with 'false'
  const result = [];  // Array to store the result of the DFS traversal

  function explore(node) {
    if (visited[node]) return;  // If the node is already visited, stop recursion

    visited[node] = true;  // Mark the node as visited
    result.push(node);  // Add the node to the result list

    // Recursively visit all neighbors of the current node
    for (let neighbor of graph[node]) {
      explore(neighbor);
    }
  }

  explore(at);  // Start the DFS from the given node

  return result;  // Return the traversal result
}

const graph = [
  [1, 2],     // Node 0 has edges to nodes 1 and 2
  [4, 3],     // Node 1 has edges to nodes 4 and 3
  [3],        // Node 2 has an edge to node 3
  [6],        // Node 3 has an edge to node 6
  [5],        // Node 4 has an edge to node 5
  [7],        // Node 5 has an edge to node 7
  [],         // Node 6 has no outgoing edges
  [6, 5]      // Node 7 has edges to nodes 6 and 5
];

console.log(dfs(graph, 0));

