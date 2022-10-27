/**
 * Longest Consecutive Sequence
 * 
 * Input: nums = [100,4,200,1,3,2]
    Output: 4
    Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 */

function longestConseecutiveSequence(arr) {
  let hasSet = new Set();
  let result = 0;
  for (let i = 0; i < arr.length; i++) hasSet.add(arr[i]);
  for (let i = 0; i < arr.length; i++) {
    if (!hasSet.has(arr[i] - 1)) {
      let j = arr[i];
      while (hasSet.has(j)) j++;
      result = Math.max(result, j - arr[i]);
    }
  }
  return result;
}
console.log(longestConseecutiveSequence([100, 4, 200, 1, 3, 2]));
