/**
 * 167. Two Sum II - Input Array Is Sorted
 */
var twoSum = function (numbers, target) {
  let i = 0;
  let j = numbers.length - 1;
  let occr = [];
  while (i <= j) {
    if (numbers[i] + numbers[j] == target) {
      occr.push(i + 1, j + 1);
      break;
    } else if (numbers[i] + numbers[j] > target) {
      j--;
    } else {
      i++;
    }
  }
  return occr;
};
console.log(twoSum([2, 7, 11, 15], 9));
