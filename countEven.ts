function countEven(num: number): number {
  let res = 0;
  for (let i = 2; i <= num; i++) {
    if (check(i)) res++;
  }
  function check(num: number) {
    let res: number = 0;
    while (num) {
      res += num % 10;
      num = Math.floor(num / 10);
    }
    return (res & 1) == 0 ? true : false;
  }
  return res;
}
countEven(30);
