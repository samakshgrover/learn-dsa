let mappings: { [key: string]: string } = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

function letterCombinations(digits: string): string[] {
  let r: string[] = [];
  getLetters(digits, r);

  return r;
}

function getLetters(digits: string, r: string[], combination: string = "") {
  if (digits === "") r.push(combination);
  else {
    const options = mappings[digits[0]].split("");

    for (let option of options) {
      getLetters(digits.slice(1), r, combination + option);
    }
  }
}

console.log(letterCombinations("23"));
