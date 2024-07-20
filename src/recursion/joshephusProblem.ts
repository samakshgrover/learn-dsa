
// circle of death
function joshephusProblem(n: number, k: number): number {
  const aux = Array.from({ length: n }, (_, i) => i + 1);
  let i = 0;
  while (aux.length > 1) {
    i = (k - 1 + i) % aux.length;
    aux.splice(i, 1);
  }
  return aux[0];
}

function solution(aux: number[], k: number, count: number, curr = 0): number {
  if (count === 0) return aux[0] + 1;

  curr = (curr + k) % aux.length;
  return solution([...aux.slice(0, curr), ...aux.slice(curr + 1)], k, count - 1, curr)
}

console.log(joshephusProblem(101, 7));