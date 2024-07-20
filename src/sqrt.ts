function mySqrt(x: number): number {
  let y: number = 0;
  let l = 0,
    r = x;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    const mSquared = m * m;

    if (mSquared === x) return m;
    if (mSquared < x) {
      l = m + 1;
      y = m;
    } else {
      r = m - 1;
    }
  }

  return y;
}

class Solution {
  mySqrt(x: number): number {
    if (x === 0 || x === 1) {
      return x;
    } else {
      const val = this.mySqrt(Math.floor(x / 4));
      if (x >= (2 * val + 1) * (2 * val + 1)) {
        return 2 * val + 1;
      } else {
        return 2 * val;
      }
    }
  }
}

function sqrt(x: number, low: number = 0, high: number = x): number {
  const mid = Math.floor((low + high) / 2);

  if (mid * mid === x || (mid * mid < x && (mid + 1) * (mid + 1) > x)) {
    return mid;
  } else if (mid * mid < x) {
    return sqrt(x, mid + 1, high);
  } else {
    return sqrt(x, low, mid - 1);
  }
}
// console.time('sqrt1');
// console.log(new Solution().mySqrt(2147483647090798));
// console.timeEnd('sqrt1');

// console.time('sqrt2');
// console.log(sqrt(2147483647090798));
// console.timeEnd('sqrt2');

// console.time('sqrt3');
// console.log(mySqrt(2147483647090798));
// console.timeEnd('sqrt3');
