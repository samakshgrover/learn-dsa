function subset(s: string, t = "") {
  if (s == "") return console.log(t)
  subset(s.slice(1), t + s[0]);
  subset(s.slice(1), t);
}

// subset("aab");

function subsetWithoutRepetition(s: string, map: Map<string, string>, t = "") {
  if (s == "") {
    if (map.has(t)) return;
    map.set(t, t);
    return
  }
  subsetWithoutRepetition(s.slice(1), map, t + s[0]);
  subsetWithoutRepetition(s.slice(1), map, t);
}

// const map = new Map();
// subsetWithoutRepetition("aab", map)
// console.log(map.keys());

function permutationWithSpaces(s: string) {
  let out = s[0];
  s = s.slice(1);

  solve(s, out);
  function solve(s: string, o: string) {
    if (s === "") return console.log(o);
    solve(s.slice(1), `${o} ${s[0]}`);
    solve(s.slice(1), `${o}${s[0]}`);
  }
}

// permutationWithSpaces("ABCD");

function permutationWithCaseChange(s: string, o = "") {
  if (s == "") return console.log(o);
  permutationWithCaseChange(s.slice(1), `${o}${s[0]}`)
  permutationWithCaseChange(s.slice(1), `${o}${s[0].toUpperCase()}`)
}

// permutationWithCaseChange("ab");

function letterCasePermutation(s: string, o: string = "") {
  if (s === "") return console.log(o);
  let ch = s[0];
  if (/^\d$/.test(ch)) {
    letterCasePermutation(s.slice(1), o + ch);
  } else {
    letterCasePermutation(s.slice(1), o + ch.toLowerCase());
    letterCasePermutation(s.slice(1), o + ch.toUpperCase());
  }
}

letterCasePermutation("a1B2")