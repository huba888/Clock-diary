var getDistances = function (arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let bucket = map.get(arr[i]) || [];
    bucket.push(i);
    map.set(arr[i], bucket);
  }
  // 求前缀和
  let sum = new Map();
  for (const [k, arr] of map) {
    let newArr = new Array(arr.length + 1).fill(0);
    for (let i = 1; i < newArr.length; i++) {
      newArr[i] = newArr[i - 1] + arr[i - 1];
    }
    sum.set(k, newArr);
  }
  let ans = new Array(arr.length).fill(0);
  for (let i = 0; i < arr.length; i++) {
    let temp = map.get(arr[i]);
    let preSum = sum.get(arr[i]);
    // 找到索引
    let index = binarySearch(temp, i);
    // let index = temp.findIndex(item => item == i);
    let leftCount = index;
    let rightCount = temp.length - index - 1;
    // 求0 到 index 不包含的值
    let leftSum = preSum[index];
    let rightSum = preSum[temp.length] - preSum[index + 1];
    let curAns =
      Math.abs(i * leftCount - leftSum) + Math.abs(i * rightCount - rightSum);
    ans[i] = curAns;
  }
  function binarySearch(arr, target) {
    let left = -1;
    let right = arr.length;
    while (left + 1 !== right) {
      let mid = (left + right) >> 1;
      if (arr[mid] < target) {
        left = mid;
      } else {
        right = mid;
      }
    }
    return right;
  }
  return ans;
};
getDistances([2, 1, 3, 1, 2, 3, 3]);

getDistances([10, 5, 10, 10]);
