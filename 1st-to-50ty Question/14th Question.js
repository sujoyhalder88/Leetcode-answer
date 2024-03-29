//Longest Common Prefix
/*
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

var longestCommonPrefix = function (strs) {
    let prefix = "";
    if (strs === null || strs.length === 0) return prefix;

    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i]; // loop through all characters of the very first string.
        console.log(char);
        for (let j = 1; j < strs.length; j++) {
            // loop through all other strings in the array
            if (strs[j][i] !== char) return prefix;
        }
        prefix = prefix + char;
    }

    return prefix;
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
