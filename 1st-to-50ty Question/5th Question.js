//Q:5. Longest Palindromic Substring=====================>

// Brute force solution
function is_Palindrome(s) {
    var rev = s.split("").reverse().join("");
    return s == rev;
}

function longest_palindrome(s) {
    var max_length = 0,
        maxp = "";

    for (var i = 0; i < s.length; i++) {
        var subs = s.substr(i, s.length);

        for (var j = subs.length; j >= 0; j--) {
            var sub_subs_str = subs.substr(0, j);
            if (sub_subs_str.length <= 1) continue;

            if (is_Palindrome(sub_subs_str)) {
                if (sub_subs_str.length > max_length) {
                    max_length = sub_subs_str.length;
                    maxp = sub_subs_str;
                }
            }
        }
    }

    return maxp;
}
console.log(longest_palindrome("cbbd"));
console.log(longest_palindrome("babad"));
