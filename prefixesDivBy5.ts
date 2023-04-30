function prefixesDivBy5(nums: number[]): boolean[] {
  let pre = 0;
  let ret: boolean[] = [];
  for (const num of nums) {
    pre = ((pre << 1) + num) % 5;
    if (pre % 5 == 0) ret.push(true);
    else ret.push(false);
  }
  console.log(ret);
  return ret;
}
prefixesDivBy5([0, 1, 1]);

prefixesDivBy5([1, 1, 0, 0, 0, 1, 0, 0, 1]);
