/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// function addTwoNumbers(
//   l1: ListNode<number> | null,
//   l2: ListNode<number> | null,
// ): ListNode<number> | null {
//   const root = l1;
//   let t = 0;
//   let curr = l1;

//   while (l1 !== null && l2 !== null) {
//     let val1 = l1 ? l1.val : 0;
//     let val2 = l2 ? l2.val : 0;
//     let add = val1 + val2 + t;
//     t = Math.floor(add / 10);
//     add = add % 10;

//     l1.val = add;
//     curr = l1;

//     l1 = l1.next;
//     l2 = l2.next;
//   }

//   while (l1 != null) {
//     let add = l1.val + t;
//     t = Math.floor(add / 10);
//     add = add % 10;
//     l1.val = add;
//     curr = l1;
//     l1 = l1.next;
//   }

//   curr!.next = l2;
//   while (l2 != null) {
//     let add = l2.val + t;
//     t = Math.floor(add / 10);
//     add = add % 10;

//     l2.val = add;
//     l2 = l2.next;
//   }

//   return root;
// }

// Function to find the extra character in string t that is not present in string s
function theDifference(s: string, t: string): string {
  let o1: Record<string, number> = {};

  for (let ch of s) o1[ch] = o1[ch] ? o1[ch] + 1 : 1;
  for (let ch of t) o1[ch] = o1[ch] ? o1[ch] - 1 : -1;

  let ans = "";
  Object.entries(o1).forEach(([key, value]) => {
    if (value === -1) ans = key;
  });

  return ans;
}

// using xor
function usingXor(s: string, t: string): string {
  let xor = 0;
  xor = s.split("").reduce((acc, curr) => acc ^ curr.charCodeAt(0), xor);
  xor = t.split("").reduce((acc, curr) => acc ^ curr.charCodeAt(0), xor);
  return String.fromCharCode(xor);
}

console.log(theDifference("abc", "aabc"));
console.log(usingXor("abc", "aabc"));
