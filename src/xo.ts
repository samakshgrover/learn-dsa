export function xo(str: string): boolean {
  console.log(str)
  // your code here
  const obj = { x: 0, o: 0 };
  str.split("").forEach(char => {
    if (char === "o") obj.o = obj.o + 1
    if (char === "x") obj.x = obj.x + 1
  })
  console.log(obj)
  return obj.x === obj.o
}

console.log(xo("xxOo"));
