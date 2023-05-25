/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function (n, startPos, s) {
  let m = s.length;
  let ans = new Array(m).fill(0);
  let map = { L: [0, -1], R: [0, 1], U: [-1, 0], D: [1, 0] };
  for (let i = 0; i < s.length; i++) {
    let x = startPos[0];
    let y = startPos[1];
    let cur = 0;
    let curS = s.slice(i);
    for (let j = 0; j < curS.length; j++) {
      let dir = map[curS[j]];
      x = x + dir[0];
      y = y + dir[1];
      if (x < 0 || x > n - 1 || y < 0 || y > n - 1) {
        break;
      }
      cur++;
    }
    ans[i] = cur;
  }
  return ans;
};
executeInstructions(3, [0, 1], "RRDDLU");
