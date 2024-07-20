function toh(n: number, from: number, to: number, aux: number) {

  if (n === 1) {
    return console.log(`move disk ${n} from ${from} ${to}`);
  }

  toh(n - 1, from, aux, to);
  console.log(`move disk ${n} from ${from} ${to}`);
  toh(n - 1, aux, to, from);
}

console.time("start")
toh(25, 1, 3, 2);
console.timeEnd("start");