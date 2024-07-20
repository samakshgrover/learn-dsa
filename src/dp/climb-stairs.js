function stairsClimb(n, t = []) {
  if (t[n]) return t[n];
  if (n <= 2) return (t[n] = n);
  return (t[n] = stairsClimb(n - 2, t) + stairsClimb(n - 1, t));
}

console.log(stairsClimb(20));
