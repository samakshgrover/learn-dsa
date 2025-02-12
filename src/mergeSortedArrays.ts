function mergeSortedArrays(
  arr1: number[],
  m: number,
  arr2: number[],
  n: number
) {
  let l = m - 1;
  let r = n - 1;
  let i = m + n - 1;
  while (l >= 0 && r >= 0) {
    if (arr1[l] > arr2[r]) {
      arr1[i] = arr1[l];
      l--;
    } else {
      arr1[i] = arr2[r];
      r--;
    }
    i--;
    console.log({ l, r, i });
    // console.log(arr1);
  }
  while (l >= 0) {
    arr1[i] = arr1[l];
    l--;
    i--;
    console.log({ l, r, i });
    // console.log(arr1);
  }
  while (r >= 0) {
    arr1[i] = arr2[r];
    r--;
    i--;
    console.log({ l, r, i });
    // console.log(arr1);
  }
  return arr1;
}

console.log(mergeSortedArrays([1, 2, 3, 4], 4, [1, 3, 3, 4, 5, 6], 6));
/* 
  [1,2,3,4] [1,3,3,4,5,6] l=3 r=5 i=9
  1,2,3,4,_,_,_,_,_,6 l=3 r=4 i=8
  1,2,3,4,_,_,_,_,5,6 l=3 r=3 i=7
  1,2,3,4,_,_,_,4,5,6 l=2 r=3 i=6
  1,2,3,4,_,_,4,4,5,6 l=2 r=2 i=5
  1,2,3,4,_,3,4,4,5,6 l=1 r=2 i=4
  1,2,3,4,3,3,4,4,5,6 l=0 r=2 i=3

  
  
  
  
  
  
  */

/* 
  
  [1, 2, 3, 4, _, _, _, _, _, 6]; //; { l: 3, r: 5, i: 9 }
  [1, 2, 3, 4, _, _, _, _, 5, 6]; //; { l: 3, r: 4, i: 8 }
  [1, 2, 3, 4, _, _, _, 4, 5, 6]; //; { l: 3, r: 3, i: 7 }
  [1, 2, 3, 4, _, _, 4, 4, 5, 6]; //; { l: 3, r: 2, i: 6 }
  [1, 2, 3, 4, _, 3, 4, 4, 5, 6]; //; { l: 2, r: 2, i: 5 }
  [1, 2, 3, 4, 3, 3, 4, 4, 5, 6]; //; { l: 2, r: 1, i: 4 }
  [1, 2, 3, 3, 3, 3, 4, 4, 5, 6]; // { l: 2, r: 0, i: 3 }
  [1, 2, 2, 3, 3, 3, 4, 4, 5, 6]; // { l: 1, r: 0, i: 2 }
  [1, 1, 2, 3, 3, 3, 4, 4, 5, 6]; // { l: 0, r: 0, i: 1 }
  [1, 1, 2, 3, 3, 3, 4, 4, 5, 6]; //  { l: 0, r: -1, i: 0 }
  [1, 1, 2, 3, 3, 3, 4, 4, 5, 6]; //{ l: -1, r: -1, i: -1 }

 */
