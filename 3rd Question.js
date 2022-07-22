//Q:3. Longest Substring Without Repeating Characters
//Given a string s, find the length of the longest substring without repeating characters.

/*
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

var lengthOfLongestSubstring = function (str) {
    let start = 0;
    let end = 0;
    let maxlength = 0;
    const occr = new Set();
    // console.log(uniqueCharacter);
    while (start < str.length) {
        if (!occr.has(str[start])) {
            occr.add(str[start]);
            start++;
            maxlength = Math.max(maxlength, occr.size);
        } else {
            occr.delete(str[end]);
            end++;
        }
    }
    return maxlength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
