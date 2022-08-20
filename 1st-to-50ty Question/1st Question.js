// ==============Two Sum================
//Given an array of integers nums and an integer target, return indices of the two numbers
// such that they add up to target.You may assume that each input would have exactly one solution,
// and you may not use the same element twice.You can return the answer in any order.
/*
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

//==========================================> Brute Force solutions=======>

//so out input will be an array of numbers [0,3,5,2,1,4] and our target will be a number between -infinity and +infinity
//we need to add two of our numbers together to reach the target
// we can do with through looping in a forloop, iterating over the entire array.
//because we need to add two numbers, we can use a nested for-loop
//if arr[index1] + arr[index2] = targetNumber, we need to return
//[index1, index 2]

/*
function twoSum(array, target) {
    //check length to make sure it is not less than or equalto 1
    if (array.length <= 1) return null;
    //we will create two loops nested
    for (let i = 0; i < array.length; i++) {
        // we will start our second index at index1 + 1
        for (let j = i + 1; j < array.length; j++) {
            //and check if the array values at each index equal the targetNumber
            if (array[i] + array[j] === target) {
                return [i, j];
            }
        }
    }
}
console.log(twoSum([2, 7, 11, 15], 9));
*/

//======================Otimize================================================
/*
function twoSum(nums, target) {
    let occr = {};
    for (let i = 0; i < nums.length; i++) {
        if (occr[nums[i]] !== undefined) {
            return [occr[nums[i]], i];
        } else {
            occr[target - nums[i]] = i;
        }
    }
}
console.log(twoSum([2, 7, 11, 15], 9));

*/
