function balanceParen(A: number) {
  let open = A;
  let close = A;
  let result: string[] = [];

  solve(open, close, result);
  return result
}

function solve(o: number, c: number, r: string[], out: string = "") {
  if (o === 0 && c === 0) {
    r.push(out)
    return;
  }

  if (o == c) {
    solve(o - 1, c, r, out + '(');
  } else {
    if (o > 0) solve(o - 1, c, r, out + "(");
    if (c > 0) solve(o, c - 1, r, out + ")");
  }

}

console.log(balanceParen(10));