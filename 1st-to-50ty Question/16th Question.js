//3Sum Closest
/**
 * 
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 * 
 * Time complexity : O(n^2).
   Space complexity : O(1).
 */
var threeSumClosest = function (nums, target) {
    var len = nums.length;
    var res = nums[0] + nums[1] + nums[2];
    var sum = 0;
    var start = 0;
    var end = 0;
    nums.sort((a, b) => a - b);
    for (var i = 0; i < len - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        start = i + 1;
        end = len - 1;
        while (start < end) {
            sum = nums[i] + nums[start] + nums[end];
            if (sum < target) {
                start++;
            } else if (sum > target) {
                end--;
            } else {
                return sum;
            }
            if (Math.abs(sum - target) < Math.abs(res - target)) res = sum;
        }
    }
    return res;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([0, 0, 0], 1));
