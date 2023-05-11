function queryString(s: string, n: number): boolean {
  // 暴力
  let set = new Set<string>();
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      set.add(s.slice(i, j + 1).padStart(s.length, "0"));
    }
  }
  let arr: string[] = [...set];
  arr.sort();
  // 第一个是否是0
  let first = arr[0];
  let ok = false;
  for (let i = 0; i < first.length; i++) {
    if (first[i] == "1") {
      ok = true;
      break;
    }
  }
  if (!ok) arr.shift();
  // 其实我们只需要验证第N - 1项是否是 n
  if (arr.length < n) return false;
  let str: string = arr[n - 1];
  console.log(arr);
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    num = 2 * num + Number(str[i]);
  }
  return num == n;
}
queryString("1", 1);
