function climbStairs(n: number, arr: any[] = []) {
  if (arr[n]) return arr[n];
  if (n === 1) return 1;
  if (n === 2) return 2;
  arr[n] = climbStairs(n - 1, arr) + climbStairs(n - 2, arr);
  return arr[n];
}

// console.time("dp");
// console.log(climbStairs(400));
// console.timeEnd("dp");

function printCombinations(
  n: number,
  combination: number[] = [],
  sum: number = 0
) {
  if (sum === n) {
    console.log(combination);
    return;
  }

  if (sum + 1 <= n) {
    printCombinations(n, combination.concat(1), sum + 1);
  }

  if (sum + 2 <= n) {
    printCombinations(n, combination.concat(2), sum + 2);
  }
}

// Example usage:
// const n = 4;
// console.log(`Combinations for n = ${10}:`);
// printCombinations(5);

/* 
  1
    1
  2
    1,1
    2
  3
    1,1,1
    2,1
    1,2
  4
    1,1,1,1
    2,1,1
    1,2,1
    2,2
    1,1,2

*/

function climbStairs2(n: number) {}

function combinations(n: number, sum = 0, combination = []) {}
