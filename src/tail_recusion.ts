//simple recursion
function fib_simple(n: number) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib_simple(n - 1) + fib_simple(n - 2);
}

// tail recursion
function go(n: number, [a, b]: [a: number, b: number]) {
  if (n === 0) return a;
  if (n === 1) return b;
  return go(n - 1, [b, a + b]);
}
function fib_tail(n: number) {
  return go(n, [0, 1]);
}
