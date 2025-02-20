function shortestPath(g, s, e) {
  const prev = bfs(s, g)
  return constructPath(prev, s, e)
}

function bfs(at, g) {
  const visited = [];
  const prev = Array.from({ length: g.length }, () => null);
  const q = [at];

  visited[at] = true;
  while (q.length) {
    const node = q.shift();
    const neighbors = g[node];

    for (let neighbor of neighbors) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        q.push(neighbor);
        prev[neighbor] = node;
      }
    }
  }

  return prev;
}

function constructPath(prev, s, e) {
  const path = [];
  for (let at = e; at !== null; at = prev[at]) {
    path.push(at);
  }

  path.reverse();
  if (path[0] !== s) path = [];
  return path;
}

const g = [
  [1, 2],  // A connects to B (index 1) and C (index 2)
  [3],     // B connects to D (index 3)
  [3, 4],  // C connects to D (index 3) and E (index 4)
  [4],     // D connects to E (index 4)
  []      // E has no outgoing edges
]
console.log(shortestPath(g, 0, 4));