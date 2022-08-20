//Q:8.string to Integer (atoi)

var myAtoi = function (s) {
    let result = 0;
    let symble = 1;
    let isNonWhiteSpaceMet = false;
    let isNumberPhase = false;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === " ") {
            if (!isNonWhiteSpaceMet) {
                continue;
            } else {
                break;
            }
        }
        isNonWhiteSpaceMet = true;

        if (char >= "0" && char <= "9") {
            isNumberPhase = true;
            result = result * 10 + (char - "0");
            continue;
        }

        if (char === "+" && !isNumberPhase) {
            isNumberPhase = true;
            continue;
        }

        if (char === "-" && !isNumberPhase) {
            isNumberPhase = true;
            symble *= -1;
            continue;
        }

        break;
    }
    result *= symble;
    return Math.min(Math.max(-(2 ** 31), result), 2 ** 31 - 1);
};
console.log(myAtoi(" -42"));
console.log(myAtoi("4193 with words"));
