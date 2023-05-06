function minNumberOfFrogs(croakOfFrogs: string): number {
  let [c, r, o, a, k] = [0, 0, 0, 0, 0];
  let res = 0;
  for (let i = 0; i < croakOfFrogs.length; i++) {
    let cur = croakOfFrogs[i];
    if (cur == "c") {
      if (k > 0) {
        k--;
      } else {
        res++;
      }
      c++;
    } else if (cur == "r") {
      c--;
      r++;
    } else if (cur == "o") {
      r--;
      o++;
    } else if (cur == "a") {
      o--;
      a++;
    } else if (cur == "k") {
      a--;
      k++;
    }
    if (c < 0 || r < 0 || o < 0 || a < 0) {
      break;
    }
  }
  console.log(c, r, o, a, k);
  if (c != 0 || r != 0 || o != 0 || a != 0) {
    return -1;
  }
  return res;
}

console.log(minNumberOfFrogs("croakcroak"));
