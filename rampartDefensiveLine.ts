// 编程大赛的题目 二分答案
function rampartDefensiveLine(rampart: number[][]): number {
  // 右侧剩余空间
  let n = rampart.length;
  let l = -1;
  let r = rampart[1][0] - rampart[0][1] + rampart[2][0] - rampart[1][1] + 1;
  while (l + 1 !== r) {
    let mid = Math.floor((l + r) / 2);
    if (check(mid)) {
      // true
      l = mid;
    } else {
      r = mid;
    }
  }
  function check(mid: number) {
    let prev = rampart[1][0] - rampart[0][1];
    for (let i = 1; i < n - 1; i++) {
      let r = rampart[i + 1][0] - rampart[i][1];
      if (mid <= prev) {
        prev = r;
      } else if (mid - prev <= r) {
        prev = r - (mid - prev);
      } else {
        return false;
      }
    }
    return true;
  }
  return l;
}
console.log(
  rampartDefensiveLine([
    [0, 3],
    [4, 5],
    [7, 9],
  ])
);
console.log(
  rampartDefensiveLine([
    [1, 2],
    [5, 8],
    [11, 15],
    [18, 25],
  ])
);
