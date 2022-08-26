//Container With Most Water
/*
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
*/

var maxArea = function (height) {
    let max = 0;
    let start = 0;
    let end = height.length - 1;
    while (end > start) {
        let area = (end - start) * Math.min(height[start], height[end]);
        max = Math.max(area, max);
        if (height[start] < height[end]) {
            start++;
        } else {
            end--;
        }
    }
    return max;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
