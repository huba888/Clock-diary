// 给一个数组 表示 n 天的股票价格
// X 指标: 任意两天的股票价格之和 - 此两天的间隔天数
// 返回最大指标
// arr[i] + arr[j] - (j - i)
// arr[i] + i+ arr[j] - j
function getMaxX(arr: number[]) {
  let max = arr[0];
  let ans = -Infinity;
  for (let i = 1; i < arr.length; i++) {
    ans = Math.max(ans, max + arr[i] - i);
    max = Math.max(max, arr[i] + i);
  }
  return ans;
}

let res = getMaxX([1, 2, 3, 4, 5, 6]);
console.log(res);
