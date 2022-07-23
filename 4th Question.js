//Q:4. Median of Two Sorted Arrays================>

//Input: nums1 = [1,3], nums2 = [2]
//Output: 2.00000

//Questions:
// what is a median ?
// best time complexity ?

//test cases
// nums1 = [1,3,34,90], nums2 = []
// nums1 = []. nums2 = []

// function bruteForce(nums1 = [], nums2 = []) {
//     const mergedNums = [...nums1, ...nums2].sort((a, b) => a - b);
//     const midPoint = Math.floor(mergedNums.length / 2);

//     return mergedNums.length % 2 !== 0
//         ? mergedNums[midPoint]
//         : (mergedNums[midPoint - 1] + mergedNums[midPoint]) / 2;
// }

// merge sort
// complexity O(n + m)
function findMedianSortedArrays(nums1 = [], nums2 = []) {
    let start = 0;
    let end = 0;
    const m = nums1.length;
    const n = nums2.length;
    const sum = m + n;

    if (sum === 0) {
        return null;
    }

    const merged = [];

    while (start < m && end < n) {
        if (nums1[start] <= nums2[end]) {
            merged.push(nums1[start++]);
        } else {
            merged.push(nums2[end++]);
        }
    }

    while (start < m) {
        merged.push(nums1[start++]);
    }
    while (end < n) {
        merged.push(nums2[end++]);
    }

    const isOdd = sum % 2;
    if (isOdd) {
        return merged[(sum - 1) / 2];
    } else {
        return (merged[merged.length / 2] + merged[merged.length / 2 - 1]) / 2;
    }
}

const nums1 = [1, 2];
const nums2 = [3, 4];

console.log(findMedianSortedArrays(nums1, nums2));
