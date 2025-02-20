function knapsack(w, items, n) {
  const t = Array.from({ length: n + 1 }, () => Array.from({ length: w + 1 }));
  console.log(t);

  // initialization
  // it's drive from base condition
  // here the base condition is if the wt is zero you can't add add anything to the bag so the benefit would be zero
  // the same for items array, if its empty you've nothing to add to the bag
  for (let i = 0; i < t.length; i++) {
    for (let j = 0; j < t[0].length; j++) {
      if (i == 0 || j == 0) {
        t[i][j] = 0;
      }
    }
  }

  for (let i = 1; i < t.length; i++) {
    for (let j = 1; j < t[0].length; j++) {
      if (w < items[]) {

      }
    }
  }
}

knapsack(7, [], 5);
