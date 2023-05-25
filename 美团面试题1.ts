// 给两个数组 让他们变成完全一一样
// 你可以删除一个数,代价是这个数
// 你也可以把a[i] 变为 b[i] 或者是把 b[i] - a[i] 代价是 |a[i] - b[i]|
// 返回最小代价
function getMinPrice(a: number[], b: number[]) {
  // 从 a[i...] 全部变一样 到 b[j....]
  // 所需要花费的最少代价
  function process(i: number, j: number): number {
    if (i == a.length && j == b.length) {
      return 0;
    }
    if (i == a.length && j != b.length) {
      return b[j] + process(i, j + 1);
    }
    if (j == b.length && i != a.length) {
      return a[i] + process(i + 1, j);
    }
    // 删除a[i]
    let p1 = a[i] + process(i + 1, j);
    // 删除b[i]
    let p2 = b[j] + process(i, j + 1);
    // 两个都删除 不需要 考虑
    // ....
    // 两个都不删除
    let p3 = Math.abs(a[i] - b[j]) + process(i + 1, j + 1);
    return Math.min(p1, p2, p3);
  }
  return process(0, 0);
}
let res = getMinPrice([1, 2], [1, 2, 100]);
let res2 = getMinPrice([1, 2, 3], [1, 2]);
console.log(res2, res);

export {};
