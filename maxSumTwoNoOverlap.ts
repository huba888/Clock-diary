function maxSumTwoNoOverlap(
  nums: number[],
  firstLen: number,
  secondLen: number
): number {
  // 求前缀和
  let n = nums.length;
  let sum = new Array(n + 1).fill(0);
  for (let i = 1; i < sum.length; i++) {
    sum[i] = sum[i - 1] + nums[i - 1];
  }
  let ans = 0;
  function helper(firstLen: number, secondLen: number) {
    let maxA = 0;
    for (let i = firstLen + secondLen; i < nums.length + 1; i++) {
      // i = 7
      maxA = Math.max(sum[i - secondLen] - sum[i - secondLen - firstLen], maxA);
      ans = Math.max(maxA + sum[i] - sum[i - secondLen], ans);
    }
  }
  helper(firstLen, secondLen);
  helper(secondLen, firstLen);
  return ans;
}
// console.log(maxSumTwoNoOverlap([0, 6, 5, 2, 2, 5, 1, 9, 4], 1, 2));
console.log(maxSumTwoNoOverlap([2, 1, 5, 6, 0, 9, 5, 0, 3, 8], 4, 3));
