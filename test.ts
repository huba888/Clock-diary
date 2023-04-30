function minimumCost(
  start: number[],
  target: number[],
  specialRoads: number[][]
): number {
  // 先排除一些特殊路径
  let temp: number[][] = [];
  for (let i = 0; i < specialRoads.length; i++) {
    let [x1, y1, x2, y2, cost] = specialRoads[i];
    if (Math.abs(x1 - x2) + Math.abs(y1 - y2) <= cost) {
      continue;
    }
    temp.push(specialRoads[i]);
  }
  if (temp.length == 0) {
    let [x1, y1] = start;
    let [x2, y2] = target;
    return Math.abs(x1 - x2) - Math.abs(y1 - y2);
  }
  // 一点是从左下角,往右下角走
  temp.sort((a, b) => a[0] - b[0]);
}
