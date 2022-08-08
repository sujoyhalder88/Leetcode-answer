//Q:7.7. Reverse Integer
// function reverseInt(x) {
//     while (x != 0) {
//         let reversenum = x.toString().split("").reverse().join("");
//         if (reversenum.endsWith("-")) {
//             reversenum = "-" + reversenum;
//             return parseInt(reversenum);
//         } else {
//             return parseInt(reversenum);
//         }
//     }
//     if (reversenum > 2147483647) {
//         return 0;
//     }
//     if (reversenum < -2147483647) {
//         return 0;
//     }
// }
// console.log(reverseInt(-123));

function revInt(x) {
    let rev = 0;
    let less;
    while (x != 0) {
        less = x % 10;
        x = parseInt(x / 10);
        rev = rev * 10 + less;
    }
    if (rev > 0x7fffffff) return 0;
    if (rev < -0x7fffffff) return 0;
    return rev;
}
console.log(revInt(123));
