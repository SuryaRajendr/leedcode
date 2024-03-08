/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let num = 12
    console.log(String(num))
    return String(BigInt(num1)+BigInt(num2))
};

console.log("addStrings",addStrings("1","2"))