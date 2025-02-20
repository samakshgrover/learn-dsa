function validPalindrome(s: string): boolean {
  let i = 0, j = s.length - 1;
  let one = false;

  while (i <= j) {
    console.log(s[i], s[j]);
    if (s[i] !== s[j]) {
      if (!one) {
        one = true;

      }
      return false
    }
    i++; j--;
  }
  return true;
}

function isPalindrome(s: string) {
  let i = 0, j = s.length - 1;

  while (i <= j) {
    console.log(s[i], s[j]);
    if (s[i] !== s[j]) return false;
    i++; j--;
  }
  return true;
}

console.log(validPalindrome("abca"));