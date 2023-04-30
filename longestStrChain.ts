function longestStrChain(words: string[]): number {
  // 按照长度进行分类
  let map = new Map<number, string[]>();
  let ans = 0;
  for (let i = 0; i < words.length; i++) {
    let bucket = map.get(words[i].length) || [];
    bucket.push(words[i]);
    map.set(words[i].length, bucket);
  }
  let temp = [...map].sort((a, b) => a[0] - b[0]);
  function backtrack(index: number, len: number) {}

  console.log(temp);
  for (let i = 0; i < temp[0][1].length; i++) {
    backtrack(i, temp[0][0]);
  }
  return 0;
}
console.log(longestStrChain(["a", "b", "ba", "bca", "bda", "bdca"]));
