//TODO: solve leetcode 342 and 1720
// TODO: leetcode 1356, 485, 461
// TODO: leetcode 1255, 982, 201, 477

// console.log(Number(9872974).toString(2))

// unset bit at a position
// console.log((23 & ~(1 << 2)).toString(2));

// set bit at a position, here 4 is position so 4-1, right shift
//  console.log((23 | (1 << 3)).toString(2))

// clear last i bits
// console.log((23 & (-1 << 3)).toString(2))

// another way
// console.log(((23 >> 3) << 3).toString(2));

// unset bits from j to i
// 1001011010_10011001_001110
// 1001011010_ 00000000_001110
// 111111
// i=7
// j=14

function unsetBitsFromJtoI(n, j, i) {
  // unset j bits from -1(all 1's)
  const x = ~0 << j;

  // set i-1 bits
  const y = (1 << (i - 1)) - 1;

  const mask = x | y;
  return n & (mask)
}

// console.log(unsetBitsFromJtoI(9872974, 14, 7).toString(2));

function replaceBits(n, m, j, i) {
  // approach set 0's from j,i bits of m
  console.log(n.toString(2));
  console.log(m.toString(2));
  const r = n & ((-1 << j) | ((1 << (i - 1)) - 1));

  // return result | m, left shift m i-1 bits
  return r | (m << (i - 1));
}

// console.log(replaceBits(15, 2, 3, 2).toString(2));

// Property
// how to check if a given number is power of 2 like 16, 8
// 16 in binary 10000
// 15 in binary 01111
// and 16 & 15 =0

function isPowerOf2(n) {
  return !(n & (n - 1))
}

// console.log(isPowerOf2(16));
// console.log(isPowerOf2(32));
// console.log(isPowerOf2(17));

//TODO: pending
function powerOf4(n) {
  console.log((2).toString(2));
  console.log((4).toString(2));
  console.log((6).toString(2));
  console.log((8).toString(2));
  console.log((10).toString(2));
  console.log((12).toString(2));
  console.log((14).toString(2));
  console.log((16).toString(2));
  console.log((32).toString(2));
  console.log((64).toString(2));
  console.log((0xAAAAAAAA).toString(10));

  if (n < 1) return false
  if (n == 1) return true;
}

function numberSetbets(n) {
  let counter = 0;

  while (n > 0) {
    if (n & 1 === 1) counter++;
    n = n >> 1
  }

  return counter;
}

// console.log(numberSetbets(23));

// given an array of 2n+1 integers, where there are n different integers which have a duplicate 
// but there's a single integer without any duplicates
// find that int with bit manipulation

function findUnique(arr) {
  return arr.reduce((acc, curr) => acc ^ curr);
}

// console.log(findUnique([10, 4, 4, 3, 5, 3, 5, 7, 7]));

// 2n+2
// two unique numbers
function findTwoUnique(arr) {
  let sum = arr.reduce((acc, curr) => acc ^ curr);
  const sum_stored = sum;
  let firstBitPos = 1;
  while (sum > 0) {
    if ((sum & 1) > 0) break;
    sum = sum >> 1;
    firstBitPos++;
  }

  const filteredArr = arr.filter(el => (el & (1 << (firstBitPos - 1))) > 0);
  console.log({ filteredArr });
  const firstUnique = filteredArr.reduce((acc, curr) => acc ^ curr);
  const secondUnique = sum_stored ^ firstUnique;

  return [firstUnique, secondUnique]
}

// console.log(findTwoUnique([1, 2, 2, 3, 4, 5, 6, 6, 5, 3]));

function findUniqueIn3NPlus(arr) {
  let sumArr = Array.from({ length: 32 }, () => 0);
  arr.forEach(n => {
    let curr = 0;
    while (n > 0) {
      if ((n & 1) > 0) sumArr[curr] = sumArr[curr] ? sumArr[curr] + 1 : 1;
      curr++;
      n = n >> 1;
    }
  })
  sumArr = sumArr.map(v => v % 3);
  console.log(sumArr);
  return sumArr.reduce((acc, curr, i) => acc + curr * Math.pow(2, i), 0);
}

// const x = findUniqueIn3NPlus([1, 1, 1, 2, 2, 3, 3, 2, 3, 4, 4, 4, 5, 5, 5, 19991])
// console.log(x);

function powerSet(s) {
  const l = s.length;
  const arr = [];
  let end = Math.pow(2, l) - 1;

  for (let i = 0; i <= end; i++) {
    let curr = 0;
    let el = i;
    let ans = ""
    while (el > 0) {
      if (el & 1) ans += s[curr];
      el = el >> 1;
      curr++;
    }
    arr.push(ans)
  }

  return arr;
}

console.log(powerSet("abc"));