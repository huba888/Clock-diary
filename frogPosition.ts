function frogPosition(
  n: number,
  edges: number[][],
  t: number,
  target: number
): number {
  let g: number[][] = new Array(n).fill(0).map(_ => []);
  target = target - 1;
  for (let i = 0; i < edges.length; i++) {
    let [x, y] = edges[i].map(v => v - 1);
    g[x].push(y);
    g[y].push(x);
  }
  // 找路线
  let used = new Array(n).fill(false);
  used[0] = true;
  let res = 1;
  let find = false;
  let ans = 0;
  function dfs(cur: number) {
    if (find) return;
    if (cur == target) {
      ans = res;
      find = true;
      return;
    }
    // 遍历邻居
    for (let tex of g[cur]) {
      if (used[tex]) continue;
      used[tex] = true;
      if (cur == 0) {
        res *= 1 / g[cur].length;
      } else {
        res *= 1 / (g[cur].length - 1);
      }
      dfs(tex);
      if (cur == 0) {
        res *= g[cur].length / 1;
      } else {
        res *= (g[cur].length - 1) / 1;
      }
      used[tex] = false;
    }
  }
  dfs(0);
  console.log(ans);
  return ans;
}
let res = frogPosition(
  8,
  [
    [2, 1],
    [3, 2],
    [4, 1],
    [5, 1],
    [6, 4],
    [7, 1],
    [8, 7],
  ],
  7,
  7
);
