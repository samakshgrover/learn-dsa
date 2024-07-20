function search_anagrams(pat: string, txt: string) {
  let ans = 0;
  let l = 0, r = 0;
  let map = new Map()
  let count = 0;

  for (let ch of pat) {
    if (!map.has(ch)) {
      map.set(ch, 1);
      count++;
    } else {
      map.set(ch, map.get(ch) + 1);
    }
  }

  while (r < txt.length) {
    // calculations
    let curr = txt[r];
    if (map.has(curr)) {
      map.set(curr, map.get(curr) - 1);
      if (map.get(curr) === 0) count--;
    }

    // creating the window
    if (r - l + 1 < pat.length) r++;
    // getting the ans
    else {
      if (count === 0) ans++;

      if (map.has(txt[l])) {
        if (map.get(txt[l]) === 0) {
          count++;
        }
        map.set(txt[l], map.get(txt[l]) + 1);
      }
      l++; r++
    }
  }
  return ans;
}

// console.log(search_anagrams("for", "forxxorfxdofr"));

