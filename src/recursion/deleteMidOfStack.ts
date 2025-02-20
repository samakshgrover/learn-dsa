function deleteMid(stack: number[], k = Math.floor(stack.length / 2) + 1) {
  if (stack.length === 0) return;
  let temp = stack.pop();

  if (k === 1) {
    return;
  } else {
    deleteMid(stack, k - 1);
    stack.push(temp!);
    return;
  }
}

let s = [1, 2, 3, 4, 5, 9, 7];

// deleteMid(s);

function reverseStack(s: number[]) {
  if (s.length === 0) return;
  const el = s.pop()!;

  reverseStack(s);
  // s.unshift(el)
  insert(s, el);
  return;
}

function insert(s: number[], k: number) {
  if (s.length === 0) return s.push(k);
  const el = s.pop()!;
  insert(s, k);
  s.push(el);
}

reverseStack(s);
console.log(s);

function deleteMidStack(arr: number[]) {
  let m = (arr.length / 2 + 1) >> 1;
  let el = arr.pop();
}

/* 
  
*/
