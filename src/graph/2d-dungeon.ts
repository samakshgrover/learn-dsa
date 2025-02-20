type Cell = "S" | "E" | "." | "#";
type Dungeon = Cell[][];
type Position = [number, number];

function shortestPath(dungeon: Dungeon): number {
  if (!dungeon.length || !dungeon[0].length) {
    return -1;
  }

  const rows = dungeon.length;
  const cols = dungeon[0].length;
  let start: Position | null = null;
  let end: Position | null = null;

  // Find start and end positions
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dungeon[i][j] === "S") {
        start = [i, j];
      } else if (dungeon[i][j] === "E") {
        end = [i, j];
      }
    }
  }

  if (!start || !end) {
    return -1;
  }

  // BFS
  const queue: [Position, number][] = [[start, 0]]; // [position, distance]
  const visited = new Set<string>();
  visited.add(start.toString());
  const directions: Position[] = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]; // right, down, left, up

  while (queue.length > 0) {
    const [[x, y], dist] = queue.shift()!;

    if (x === end[0] && y === end[1]) {
      return dist;
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      if (
        nx >= 0 &&
        nx < rows &&
        ny >= 0 &&
        ny < cols &&
        dungeon[nx][ny] !== "#" &&
        !visited.has([nx, ny].toString())
      ) {
        queue.push([[nx, ny], dist + 1]);
        visited.add([nx, ny].toString());
      }
    }
  }

  return -1; // No path found
}

// Example usage
// const dungeon: Dungeon = [
//   ["S", ".", "#", "#"],
//   [".", ".", ".", "#"],
//   ["#", ".", ".", "."],
//   ["#", "#", "#", "E"],
// ];

const dungeon: Dungeon = [
  ["S", ".", ".", "#", ".", ".", "."],
  [".", "#", ".", ".", ".", "#", "."],
  [".", "#", ".", ".", ".", ".", "."],
  [".", ".", "#", "#", ".", ".", "."],
  ["#", ".", "#", "E", ".", "#", "."],
];

console.log(shortestPath(dungeon)); // Output: 5
