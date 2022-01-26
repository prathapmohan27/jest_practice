function analyzeArray(arr) {
  let sortArr = arr.sort((a, b) => a - b);
  let ans = {};
  ans.average = sortArr[Math.floor(sortArr.length / 2)];
  ans.min = sortArr[0];
  ans.max = sortArr[sortArr.length - 1];
  ans.length = sortArr.length;
  return ans;
}
module.exports = analyzeArray;
