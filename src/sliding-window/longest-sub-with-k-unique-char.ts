function longestKSubstr(s: string, k: number): number {
  let l = 0,
    r = 0;
  let map = new Map();
  let ans = -1;

  while (r < s.length) {
    map.set(s[r], map.has(s[r]) ? map.get(s[r]) + 1 : 1);

    if (map.size < k) {
      r++;
    } else if (map.size === k) {
      ans = Math.max(ans, r - l + 1);
      r++;
    } else {
      while (map.size > k) {
        let ch = s[l];
        map.set(ch, map.get(ch) - 1);
        l++;
        if (map.get(ch) === 0) map.delete(ch);
      }

      if (map.size === k) ans = Math.max(ans, r - l + 1);
      r++;
    }
  }

  return ans;
}

const str =
  "joizyglhbetjlvglzvvktxqsslufceppzpgogrifbeyuiblmgcqtkhhbimxigczvbtvrtsperlhunsyywgnttbwjgunjwjtqzqvrdumddtzaffcmjlakmfappoqqkvmfnevaabqxtzslodalgvtwvbsknohmjcumrrqktskvidbizexkprdonsjkbcoeplcafdalmvfaswnjkiqcwowhykczbdkankmkrrwsmcomaubfelnljztemcbmmoptndjodpqnikglvraezkvfxcphvgdgkouirhidbdtesjogrilbxhgtqprexyxptbqdxnwsuddzoiuumlbbgmhuzbgaslssvtexzlipsqfrfvxbkxmazocqvtaguvxmoqvhkfklucswkizrpatpakmuswqdsmxtnuujewtwtrnofowrgmxegwkxokotqhfodaegkmopjpdvpxzjrunwfqeldjhajnjzaargszgxakniopptsoakustvpbtocrovfceofpbeddqeidyvosbwbspesilldkdvocbfrbzthbgsnzaabjfbeanwoicritttjvkromyiodiazfgzktgkeqjmojamqrdusaibheiivnvmokacqudrcairqtisixcjxjsdubgusrcpleludvkjiabbeukbeadqruccuhwcrgosagtuyjfhnaniapxkrqdbmdsbxrzriyszsoguditxxpvdopzktljyrdzxunnybfzfqoezhizbustnwlpqypfqtgxapvwrcybnsjfrsdhyafsdglucczqtoazaycxybnlratmdqphtdwqsddhkrhvbgsytp";
console.log(str.length);
const k = 10;
console.log(longestKSubstr(str, k));
