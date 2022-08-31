//15. 3Sum
/*
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
*/

var threeSum = function (nums) {
    // var nums.length = nums.nums.lengthgth;
    var res = [];
    var l = 0;
    var r = 0;
    nums.sort((a, b) => a - b);
    // console.log(nums);
    for (var i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        l = i + 1;
        r = nums.length - 1;
        while (l < r) {
            if (nums[i] + nums[l] + nums[r] < 0) {
                l++;
            } else if (nums[i] + nums[l] + nums[r] > 0) {
                r--;
            } else {
                res.push([nums[i], nums[l], nums[r]]);
                while (l < r && nums[l] === nums[l + 1]) l++;
                while (l < r && nums[r] === nums[r - 1]) r--;
                l++;
                r--;
            }
        }
    }
    return res;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));

//=======================================================================
var threeSum = function (nums) {
    let start = 0;
    let end = 0;
    let result = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        start = i + 1;
        end = nums.length - 1;
        while (start < end) {
            if (nums[i] + nums[start] + nums[end] < 0) {
                start++;
            } else if (nums[i] + nums[start] + nums[end] > 0) {
                end--;
            } else {
                result.push([nums[i], nums[start], nums[end]]);
                while (start < end && nums[start] === nums[start + 1]) start++;
                while (start < end && nums[start] === nums[end - 1]) end--;
                start++;
                end--;
            }
        }
    }
    return result;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
