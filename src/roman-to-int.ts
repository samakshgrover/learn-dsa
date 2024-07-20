function romanToInt(s: string): number {
  let sum = 0;
  let i = 0;
  let values = [
    { key: "I", value: 1 },
    { key: "IV", value: 4 },
    { key: "V", value: 5 },
    { key: "IX", value: 9 },
    { key: "X", value: 10 },
    { key: "XL", value: 40 },
    { key: "L", value: 50 },
    { key: "XC", value: 90 },
    { key: "C", value: 100 },
    { key: "CD", value: 400 },
    { key: "D", value: 500 },
    { key: "CM", value: 900 },
    { key: "M", value: 1000 },
  ] as const;

  while (values.length > i) {
    const key = values[i].key;
    const value = values[i].value;
    const regExp = new RegExp(key + "$");

    if (regExp.test(s)) {
      console.log(value);
      s = s.replace(regExp, "");

      sum += value;
    } else {
      i = i + 1;
    }
  }
  return sum;
}

romanToInt("MCMXCIV");
