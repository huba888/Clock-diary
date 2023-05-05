function hardestWorker(n: number, logs: number[][]): number {
  let res = Infinity;
  let pre = 0;
  let max = -Infinity;
  for (let i = 0; i < logs.length; i++) {
    if (logs[i][1] - pre > max) {
      // 最大间隔时间
      max = logs[i][1] - pre;
      res = logs[i][0];
    } else if (logs[i][1] - pre == max) {
      res = Math.min(logs[i][0], res);
    }
    pre = logs[i][1];
  }
  return res;
}
hardestWorker(10, [
  [0, 10],
  [1, 20],
]);
